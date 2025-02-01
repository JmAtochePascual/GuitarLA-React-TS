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

  const addToCart = (guitar: TGuitar) => setCart([...cart, { ...guitar, quantity: 1 }]);

  const searchCartItem = (id: TGuitar['id']) => cart.find(item => item.id === id);

  const removeFromCart = (id: TGuitar['id']) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  const increaseQuantity = (guitarCartItem: TGuitarCartItem) => {
    if (guitarCartItem.quantity >= MAX_QUANTITY) return;

    const newCart = cart.map(item => item.id === guitarCartItem.id ? { ...item, quantity: item.quantity + INCREASE } : item);
    setCart(newCart);
  }

  const decreaseQuantity = (guitarCartItem: TGuitarCartItem) => {
    if (guitarCartItem.quantity <= MIN_QUANTITY) {
      removeFromCart(guitarCartItem.id);
      return;
    }

    const newCart = cart.map(item => item.id === guitarCartItem.id ? { ...item, quantity: item.quantity - INCREASE } : item);
    setCart(newCart);
  }

  const handleCart = (guitar: TGuitar) => {
    const existGuitar = searchCartItem(guitar.id);

    if (existGuitar) {
      increaseQuantity(existGuitar);
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
