<script context="module">
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <div class="blok container mx-auto">
    <p>
      Aplikacja TODO oparta na <a
        class="text-blue-600 underline"
        href="https://kit.svelte.dev">SvelteKit</a
      >
    </p>
    <p>Projekt zaliczeniowy PAI (Pracownia Aplikacji Internetowych)</p>
  </div>
</section>

<style>
  .blok {
    font-size: 24px;
    padding: 5px 10px;
  }

  .blok p {
    margin: 15px 0;
  }

  @media only screen and (max-width: 768px) {
    .blok {
      font-size: 18px;
    }

    .blok p {
      margin: 20px 0;
    }
  }
</style>
