<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let body;
  export let done;

  const dispatch = createEventDispatcher();

  const onUpdate = () => {
    dispatch("update", { id, done });
  }

  const onDelete = () => {
    dispatch("delete", { id });
  };
</script>


<div class="element container mx-auto grid grid-cols-5 justify-items-center my-5 py-3 px-2" class:done={done}>

  <form on:submit|preventDefault={onUpdate}>
    <button class="check" class:toggle={done}></button>
  </form>

  <p class="col-start-2 col-span-3">{body}</p>
  {#if done}
  <button class="delete" on:click={onDelete} />
  {/if}
</div>


<style>
  .element {
    max-width: 800px;
    background: linear-gradient(90deg, rgb(139, 139, 139), 20%, white);
    border-radius: 15px;
    font-size: 17px;
    font-weight: 400;
  }

  .done {
    transform: none;
    opacity: 0.5;
    background: linear-gradient(90deg, rgb(0, 128, 0), 20%, white);
  }

  .element button {
    width: 2em;
    height: 2em;
    border: none;
		background-color: transparent;
		background-position: 50% 50%;
		background-repeat: no-repeat;
    outline: none;
  }

  button.check {
    border: 1px solid rgba(0, 0, 0, 0.6);
		border-radius: 50%;
		box-sizing: border-box;
		background-size: 1em auto;
  }

  .toggle {
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }

  .delete {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    opacity: 0.5;
    transition: opacity 0.7s;
  }

  .delete:hover,
  .delete:focus {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    .element {
      max-width: 400px;
    }
  }
</style>
