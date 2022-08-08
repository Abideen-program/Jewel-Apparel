import { createContext, useState, useEffect } from "react";

const checkCartITem = (cartItems, productToAdd) => {
  //find if the item is already in the cart
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  //if present in the cart, retain the information but increase the quantity
  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  // return the cart with mordified items / return a new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productToRemove.id;
  });

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== productToRemove.id;
    });
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const removeCheckoutItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find((cartItem) => {
        return cartItem.id === itemToRemove.id
    })

    if(existingItem) {
      return cartItems.filter((cartItem) => {
        return cartItem.id !== itemToRemove.id
      })
    }
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeItemFromCheckout: () => {},
  cartCount: 0,
  // setCartCount: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(checkCartITem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItemFromCheckout = (itemToRemove) => {
    setCartItems(removeCheckoutItem(cartItems, itemToRemove));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);


  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeItemFromCheckout,
    cartCount,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
