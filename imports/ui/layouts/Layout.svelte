<script>
  import {
    Container,
    Nav,
    Navbar,
    NavItem,
    Collapse,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Icon
  } from "@sveltestrap/sveltestrap/src";
  import { Link } from "svelte-routing";
  import Alert from "../components/generic/Alert.svelte";
  import Checkout from "../components/products/Checkout.svelte";

  import { cart } from "../store.js";
</script>

<Navbar color="light" light expand="xs">
  <Collapse navbar expand="xs">
    <Nav class="ms-auto" navbar>
      <NavItem>
        <Link class="nav-link" to="/">Home</Link>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle nav>
          <Icon name={cart?.length ? "cart-fill" : "cart"} />
        </DropdownToggle>

        <DropdownMenu end class="px-2">
          <Checkout />
        </DropdownMenu>
      </Dropdown>
    </Nav>
  </Collapse>
</Navbar>

<Container class="mt-2">
  <slot />
</Container>

<Alert />
