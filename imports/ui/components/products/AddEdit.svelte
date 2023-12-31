<script>
  import { Input, Label, Button } from "@sveltestrap/sveltestrap/src";
  import { formEventToData } from "../../../utils/forms";
  import { alert } from "../../store.js";

  export let product;
  export const isEdit = product?._id;
  export let onEdit;

  const create = (e) => {
    const data = formEventToData(e);

    Meteor.call("tasks.create", data, (err, res) => {
      product = null;
      if (err) {
        $alert = err.message;
      }
    });
  };

  const edit = (e) => {
    const data = formEventToData(e);

    Meteor.call("tasks.edit", product._id, data, (err, res) => {
      if (res && onEdit) {
        onEdit();
      }

      if (err) {
        $alert = err.message;
      }
    });
  };
</script>

<form on:submit|preventDefault={isEdit ? edit : create}>
  <Label>Title:</Label>
  <Input name="title" value={product?.title} />
  <Label>Price:</Label>
  <Input type="number" name="price" value={product?.price} />
  <Label>Quantity:</Label>
  <Input type="number" name="quantity" value={product?.quantity} />

  <Button class="mt-2" color="success" type="submit"
    >{isEdit ? "Edit" : "Add product"}</Button
  >
</form>
