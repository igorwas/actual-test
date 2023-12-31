import { writable } from "svelte/store";
import { findIndex } from "lodash";

export const alert = writable("");

export const filter = writable({});

export const cart = (() => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: (product) =>
      update((cart) => {
        console.log('update', cart)
        const index = findIndex(cart, { _id: product._id });
        console.log("index", index);
        if (index == -1) {
          cart.push({ ...product, quantityToBuy: 1 });
        } else if (cart[index].quantityToBuy + 1 <= product.quantity) {
          cart[index].quantityToBuy += 1;
        }

        return cart;
      }),
    remove: (product) =>
      update((cart) => {
        const index = findIndex(cart, { _id: product._id });
        if (cart[index].quantityToBuy <= 1) {
            cart.splice(index, 1);
          } else {
            cart[index].quantityToBuy -= 1;
          }
        return cart
      }),
    set: (cart) => set(cart),
  };
})();
