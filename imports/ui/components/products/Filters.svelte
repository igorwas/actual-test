<script>
  import { InputGroup, Input, Button } from "@sveltestrap/sveltestrap/src";
  import CardComp from "../../components/generic/Card.svelte";
  import { formEventToData } from "../../../utils/forms";
  import { filter } from "../../store.js";

  const apply = (e) => {
    const data = formEventToData(e);
    $filter = data;
  };
</script>

<form on:submit|preventDefault={apply}>
  <CardComp>
    <span slot="title">Filter</span>
    <span slot="body">
      <InputGroup size="sm">
        <Input
          type="number"
          placeholder="Min price"
          name="min"
          value={$filter?.min}
        />
        <Input
          type="number"
          placeholder="Max price"
          name="max"
          value={$filter?.max}
        />
        <Button color="success" type="submit">Filter</Button>
      </InputGroup>
    </span>
  </CardComp>
</form>
