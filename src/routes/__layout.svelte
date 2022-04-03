<script>
  import "../app.css";
  import Header from "$lib/Header/index.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>TODO project © 2021 Arkadiusz Błochowiak</p>
</footer>

<style>
  main {
    min-height: calc(100vh - 150px);
  }

  footer {
    min-height: 50px;
    width: 100%;
    margin-top: 25px;
    padding: 10px 0px;
    border-top: 1px solid var(--accent-color);
    text-align: center;
  }
</style>
