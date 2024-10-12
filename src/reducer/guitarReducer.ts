import { Guitar, Order } from "../types"

export type GuitarAction =
  { type: 'add-guitar', payload: { guitar: Guitar } } |
  { type: 'remove-guitar', payload: { id: Guitar['id'] } } |
  { type: 'increase-quantity', payload: { id: Guitar['id'] } } |
  { type: 'decrease-quantity', payload: { id: Guitar['id'] } } |
  { type: 'clear-cart' }

export type GuitarState = {
  cart: Order[]
}

export const initialState: GuitarState = {
  cart: JSON.parse(localStorage.getItem('guitarLA') || '[]')
}

export const guitarReducer = (state: GuitarState = initialState, action: GuitarAction) => {
  const MAX_QUANTITY = 5;
  const MIN_QUANTITY = 1;

  const busqueda = (id: Guitar['id']) => state.cart.find(item => item.id === id);
  const removeItem = (id: Guitar['id']) => state.cart.filter(item => item.id !== id);
  const increaseQuantity = (id: Guitar['id']) => state.cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
  const decreaseQuantity = (id: Guitar['id']) => state.cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
  const addItem = (guitar: Guitar) => [...state.cart, { ...guitar, quantity: 1 }];


  if (action.type === 'add-guitar') {
    const item = busqueda(action.payload.guitar.id);
    return item ? { cart: increaseQuantity(action.payload.guitar.id) } : { cart: addItem(action.payload.guitar) };
  }

  if (action.type === 'remove-guitar') return { cart: removeItem(action.payload.id) };

  // the limit is 5
  if (action.type === 'increase-quantity') {
    const item = busqueda(action.payload.id);
    if (item?.quantity === MAX_QUANTITY) return state;
    return { cart: increaseQuantity(action.payload.id) };
  }

  // the minimum is 1
  if (action.type === 'decrease-quantity') {
    const item = busqueda(action.payload.id);
    if (item?.quantity === MIN_QUANTITY) return { cart: removeItem(action.payload.id) };
    return { cart: decreaseQuantity(action.payload.id) };
  }

  if (action.type === 'clear-cart') return { cart: [] };

  return state;
}