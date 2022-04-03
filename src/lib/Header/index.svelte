<script>
  import { page } from "$app/stores";
  import logo from "./svelte-logo.svg";
</script>

<header>
  <div class="corner">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <nav>
    <ul>
      <li class:active={$page.url.pathname === "/"}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname=== "/all"}>
        <a sveltekit:prefetch href="/all">All</a>
      </li>
      <li class:active={$page.url.pathname === "/todo"}>
        <a sveltekit:prefetch href="/todo">Todo</a>
      </li>
      <li class:active={$page.url.pathname === "/done"}>
        <a sveltekit:prefetch href="/done">Done</a>
      </li>
    </ul>
  </nav>

  <div class="corner">
    <!-- Do wysrodkowania nawigacji -->
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    min-height: 50px;
    border-bottom: 1px solid #ff3e00;
    margin-bottom: 25px;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgb(255, 255, 255);
  }

  /* svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  } */

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
