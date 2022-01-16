<script>
  const svelteAlert = () => {
    window.alert("This is the Svelte component.");
  };
</script>

<button on:click={svelteAlert}>Svelte</button>
