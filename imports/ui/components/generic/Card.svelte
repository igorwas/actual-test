<script>
  import {
    Card,
    CardBody,
    CardTitle,
    CardHeader,
  } from "@sveltestrap/sveltestrap/src";
</script>

<Card class="mt-2">
  <CardHeader>
    <CardTitle><slot name="title" /></CardTitle>
    {#if $$slots.header}
      <slot name="header" />
    {/if}
  </CardHeader>
  {#if $$slots.body}
    <CardBody>
      <slot name="body" />
    </CardBody>
  {/if}
</Card>
