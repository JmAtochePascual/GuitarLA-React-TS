import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { GUITARS } from "./data/guitars"
import { TGuitar, TGuitarCartItem } from "./types";

function App() {
  const [cart, setCart] = useState<TGuitarCartItem[]>([]);
  const INCREASE = 1;
  const MAX_QUANTITY = 5;
  const MIN_QUANTITY = 1;

  const existGuitar = (id: TGuitar['id']): boolean => cart.some(item => item.id === id);

  const addToCart = (guitar: TGuitar) => setCart([...cart, { ...guitar, quantity: 1 }]);

  const removeFromCart = (id: TGuitar['id']) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  const increaseQuantity = (id: TGuitar['id']) => {
    if (cart.find(item => item.id === id)!.quantity >= MAX_QUANTITY) return;

    const newCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + INCREASE } : item);
    setCart(newCart);
  }

  const decreaseQuantity = (id: TGuitar['id']) => {
    if (cart.find(item => item.id === id)!.quantity <= MIN_QUANTITY) {
      removeFromCart(id);
      return;
    }

    const newCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity - INCREASE } : item);
    setCart(newCart);
  }

  const handleCart = (guitar: TGuitar) => {
    if (existGuitar(guitar.id)) {
      increaseQuantity(guitar.id);
    } else {
      addToCart(guitar);
    }
  };

  return (
    <>
      <Header
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            GUITARS.map(guitar =>
              <Guitar
                key={guitar.id}
                guitar={guitar}
                handleCart={handleCart}
              />
            )
          }
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
