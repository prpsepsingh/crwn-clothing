export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if cartItemToAdd already exists in cartItems list. If it does, return true. Else return false.
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if cartItemToAdd exists in cartItems, create new cartItems and increase the quantity of cartItem by 1. Else return cartItem.
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if cartItemToAdd doesn't exist in cartItems, then a cartItems list will be created and it will be added with a quantity of 1 to the end of the cartItems.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
