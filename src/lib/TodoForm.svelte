<script>
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  let bodyInput;
  let body;

  onMount(() => {
    bodyInput.focus();
  });

  const onSubmit = () => {
    dispatch("create", {
      body,
    });

    body = "";
    bodyInput.focus();
  };
</script>

<form on:submit|preventDefault={onSubmit} method="POST">
  <div class="form container grid grid-col-3 gap-1 mx-auto justify-items-center">
      <div class="new col-span-3">
        <label for="body">Do zrobienia: </label>
        <input type="text" id="body" placeholder="Dodaj todo" bind:this={bodyInput} bind:value={body} />
      </div>
      <div class="col-start-2 col-span-1">
        <button class="btn-add">Dodaj</button>
      </div>
  </div>
</form>

<style>
  :root {
    --color: #ff3e00;
  }

  .form {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-size: 17px;
  }

  .new {
    margin: 10px 0;
  }

  #body {
    padding-left: 10px;
    width: 35vw;
    border-bottom: 1px solid black;
    outline: none;
  }

  .btn-add {
    margin: 0 auto;
    padding: 5px;
    background-color: var(--color);
    color: white;
    transition: background-color 1s;
    border-radius: 10px;
    border: 1px solid transparent;
  }

  .btn-add:hover {
    background-color: white;
    color: var(--color);
    border: 1px solid var(--color);
  }

  @media only screen and (max-width: 768px) {
    #body {
      width: 60vw;
    }
  }
  
</style>

