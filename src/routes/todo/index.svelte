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

  export let todos;
  let message = undefined;

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
  <title>Todo</title>
</svelte:head>

<section>
  {#each todos as todo}
    {#if !todo.done}
      <TodoElement {...todo} on:update={onUpdate} />
    {/if}
  {/each}
</section>
