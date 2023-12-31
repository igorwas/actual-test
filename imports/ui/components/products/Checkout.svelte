<script>
  import { Icon, Button } from "@sveltestrap/sveltestrap/src";
  import { pick } from "lodash";
  import { cart, alert } from "../../store";

  $: total = $cart.reduce((total, p) => total + p.quantityToBuy * p.price, 0);

  const buy = () => {
    Meteor.call(
      "orders.create",
      $cart.map((p) => pick(p, "_id", "quantityToBuy")),
      (err, res) => {
        if (err) {
          $alert = err.message;
        } else {
          $cart = [];
        }
      }
    );
  };
</script>

{#if $cart?.length}
  {#each $cart as cartItem, i (cartItem._id)}
    <div>
      {i + 1}.{cartItem.title} - {cartItem.quantityToBuy}({cartItem.price}$) = {cartItem.quantityToBuy *
        cartItem.price}$
      <Button
        color={"success"}
        on:click={(e) => {
          e.preventDefault();
          cart.add(cartItem);
        }}
        disabled={cartItem.quantity <= cartItem?.quantityToBuy}
      >
        <Icon name={"plus"} />
      </Button>
      <Button
        color={"danger"}
        on:click={() => {
          cart.remove(cartItem);
        }}
      >
        <Icon name={"dash"} />
      </Button>
      <hr />
    </div>
  {/each}

  <b>Total: {total}$</b>
  <Button color={"success"} on:click={buy}>Buy</Button>
{:else}
  <span class="ml-2">Empty cart</span>
{/if}
