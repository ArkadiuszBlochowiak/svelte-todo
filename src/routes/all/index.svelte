<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/all.json");

    if (res.ok) {
      const data = await res.json();

      return {
        props: { todos: data.todos },
      };
    }

    const { message } = await res.json();
    return {
      error: new Error(message),
    };
  };
</script>

<script>
  import TodoElement from "$lib/TodoElement.svelte";
  import TodoForm from "$lib/TodoForm.svelte";

  export let todos;

  let message = undefined;

  const onCreate = async (event) => {
    const { body } = event.detail;

    const res = await fetch("/all.json", {
      method: "POST",
      body: JSON.stringify({ body }),
    });

    console.log(res.ok);

    if (res.ok) {
      const data = await res.json();

      todos = data.todos;
      message = !data.status ? "Nie udało się dodać do bazy danych" : undefined;
    }
  };

  const onDelete = async (event) => {
    const { id } = event.detail;

    const res = await fetch("/all.json", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      const data = await res.json();

      todos = data.todos;
      message = !data.status ? "Nie udało się usunąć z bazy danych" : undefined;
    }
  };

  const onUpdate = async (event) => {
    const { id, done } = event.detail;

    const res = await fetch("/all.json", {
      method: "PUT",
      body: JSON.stringify({ id, done }),
    });

    if (res.ok) {
      const data = await res.json();
      todos = data.todos;

      message = !data.status ? "Nie udało się zaktualizować danych" : undefined;
    }
  };
</script>

<svelte:head>
  <title>All</title>
</svelte:head>

<section>
  {#if message}
    <div
      class="mb-8 border border-red-700 bg-red-200 p-8 font-semibold text-xl text-center"
    >
      {message}
    </div>
  {/if}

  <TodoForm on:create={onCreate} />
  <br />
</section>

<section>
  {#each todos as todo}
    <TodoElement {...todo} on:delete={onDelete} on:update={onUpdate} />
  {/each}
</section>
