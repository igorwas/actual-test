<script>
  import { Meteor } from "meteor/meteor";
  import { Products } from "../../../api/products";
  import { Link } from "svelte-routing";
  import { Row, Col, Button, Icon } from "@sveltestrap/sveltestrap/src";
  import { fade } from 'svelte/transition';
  import CardComp from "../../components/generic/Card.svelte";
  import AddEdit from "../../components/products/AddEdit.svelte";
  import Filters from "../../components/products/Filters.svelte";
  import { cart, filter } from "../../store";
  import { filterToQuery } from '../../../utils/filterToQuery'

  let subIsReady = false;
  $m: {
    const handle = Meteor.subscribe("products");
    subIsReady = handle.ready();
  }

  $m: query = filterToQuery($filter);
  $m: products = Products.find(query, {sort: { createdAt: -1}}).fetch();
</script>

<Row>
  <Col md={12}>
    <AddEdit />
    <Filters />
  </Col>
  {#if subIsReady}
    {#each products as product, i (product._id)}
      <Col md={6}>
        <Link class="link-dark" to={`product/${product._id}`}>
        <CardComp>
          <span slot="title" transition:fade={{ delay: i*100 }}>
            {product.title}{` - ${product?.price}$`}
          </span>
          <span slot="header">
            <Button color={"success"} on:click={
              (e)=>{
                e.preventDefault();
                cart.add(product)
              } 
            } disabled={!product?.quantity}>
              <Icon name={"cart-plus"} />
            </Button>
          </span>
        </CardComp>
      </Link>
      </Col>
    {/each}
  {:else}
    <div>Loading ...</div>
  {/if}
</Row>
