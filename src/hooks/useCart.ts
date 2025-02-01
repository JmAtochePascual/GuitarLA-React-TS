import { useEffect, useState } from "react";
import { TGuitar, TGuitarCartItem } from "../types";

export const useCart = () => {
  const [cart, setCart] = useState<TGuitarCartItem[]>(JSON.parse(localStorage.getItem('cartGuitar') || '[]'));
  const INCREASE = 1;
  const MAX_QUANTITY = 5;
  const MIN_QUANTITY = 1;

  useEffect(() => {
    localStorage.setItem('cartGuitar', JSON.stringify(cart));
  }, [cart]);

  const searchCartItem = (id: TGuitar['id']) => cart.find(item => item.id === id);

  const addToCart = (guitar: TGuitar) => setCart([...cart, { ...guitar, quantity: 1 }]);

  const removeFromCart = (id: TGuitar['id']) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  const increaseQuantity = (guitarCartItem: TGuitarCartItem) => {
    if (guitarCartItem.quantity === MAX_QUANTITY) return;

    const newCart = cart.map(item => item.id === guitarCartItem.id ? { ...item, quantity: item.quantity + INCREASE } : item);
    setCart(newCart);
  }

  const decreaseQuantity = (guitarCartItem: TGuitarCartItem) => {
    if (guitarCartItem.quantity === MIN_QUANTITY) return;

    const newCart = cart.map(item => item.id === guitarCartItem.id ? { ...item, quantity: item.quantity - INCREASE } : item);
    setCart(newCart);
  }

  const cleanCart = () => setCart([]);

  const handleCart = (guitar: TGuitar) => {
    const existGuitar = searchCartItem(guitar.id);

    if (existGuitar) {
      increaseQuantity(existGuitar);
    } else {
      addToCart(guitar);
    }
  };

  return {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cleanCart,
    handleCart
  }
}