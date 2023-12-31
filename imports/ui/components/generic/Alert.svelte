<script>
  import { alert } from "../../store.js";
  import { Alert } from "@sveltestrap/sveltestrap/src";
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    if ($alert) {
      setTimeout(() => {
        $alert = "";
      }, 2000);
    }
  });
</script>

{#if $alert}
  <Alert color="danger" transition={{ duration: 500 }}>{$alert}</Alert>
{/if}
