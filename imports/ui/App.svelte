<script>
  import { Router, Route } from "svelte-routing";
  import MainLayout from './layouts/Layout.svelte';
  import Products from './pages/products/Products.svelte';
  import Product from './pages/products/Product.svelte';

  export let url = "";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
</svelte:head>

<Router {url}>
  <MainLayout>
    <Route path="/product/:_id" let:params>
      <Product _id={params._id} />
    </Route>
    <Route path="/" component={Products} />
  </MainLayout>
</Router>
