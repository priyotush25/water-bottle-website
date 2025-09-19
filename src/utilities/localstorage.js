// find items in local storage
const getStoreCarts = () => {
  const stringCarts = localStorage.getItem("cart");

  if (stringCarts) {
    return JSON.parse(stringCarts);
  }
  return [];
};

// sava cart in local storage
const saveCartsLS = (cart) => {
  const cartField = JSON.stringify(cart);

  localStorage.setItem("cart", cartField);
};

//add to cart in local storage
const addCartLS = (id) => {
  const cart = getStoreCarts();
  cart.push(id);

  saveCartsLS(cart);
};

const removeLS = (id) => {
  const cart = getStoreCarts();

  const remaining = cart.filter((idx) => idx !== id);
  saveCartsLS(remaining);
};

export { addCartLS, getStoreCarts, removeLS };
