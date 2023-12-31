<script>
  import { Meteor } from "meteor/meteor";
  import { Row, Col, Card,
    CardBody,
    CardTitle,
    CardText,
    CardHeader,
    ButtonGroup,
    Button,
    Icon, } from "@sveltestrap/sveltestrap/src";
  import { navigate } from "svelte-routing";
  import { Products } from "../../../api/products";
  import AddEdit from "../../components/products/AddEdit.svelte";
  import { cart } from '../../store.js'

  export let _id;
  export let product;
  export let isEdit;

  const remove = () => {
    Meteor.call("tasks.remove", product._id, (err, res) => {
      if (res) {
        navigate("/");
      }
    });
  };
  const onEdit = () => {
    isEdit = !isEdit;
  };

  let subIsReady = false;

  $m: {
    const handle = Meteor.subscribe("products");
    subIsReady = handle.ready();
  }

  $m: product = Products.findOne({ _id });
</script>

<Row>
  <Col>
    {#if subIsReady}
      <Card>
        <CardHeader>
          <CardTitle>{product?.title}</CardTitle>
          <ButtonGroup>
            <Button color={"danger"} on:click={remove}>
              <Icon name={"trash"} />
            </Button>
            <Button color={"primary"} on:click={onEdit}>
              <Icon name={"pencil"} />
            </Button>
            <Button color={"success"} on:click={
              (e)=>{
                e.preventDefault();
                cart.add(product)
              } 
            } disabled={!product?.quantity} >
             <Icon name={"cart-plus"} />
            </Button>
          </ButtonGroup>
        </CardHeader>
        <CardBody>
          {#if isEdit}
            <AddEdit {product} {onEdit} />
          {:else}
            <CardText>Price: {product?.price}</CardText>
            <CardText>Available quantity: {product?.quantity}</CardText>
            <CardText>Description: {product?.description}</CardText>
          {/if}
        </CardBody>
      </Card>
    {/if}
  </Col>
</Row>
