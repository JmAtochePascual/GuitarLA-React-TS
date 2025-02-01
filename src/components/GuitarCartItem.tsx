import { TGuitarCartItem } from "../types";

type GuitarCartItemProps = {
  guitarItem: TGuitarCartItem;
  removeFromCart: (id: TGuitarCartItem['id']) => void;
}

const GuitarCartItem = ({ guitarItem, removeFromCart }: GuitarCartItemProps) => {
  const { id, name, price, quantity, image } = guitarItem;
  return (
    <tr>
      <td>
        <img className="img-fluid" src={`/img/${image}.jpg`} alt={`imagen guitarra ${name}`} />
      </td>
      <td>{name}</td>
      <td className="fw-bold">
        {price}
      </td>
      <td className="flex align-items-start gap-4">
        <button
          type="button"
          className="btn btn-dark">
          -
        </button>
        {quantity}
        <button
          type="button"
          className="btn btn-dark">
          +
        </button>
      </td>
      <td>
        <button
          type="button"
          onClick={() => removeFromCart(id)}
          className="btn btn-danger">
          X
        </button>
      </td>
    </tr>
  )
}

export default GuitarCartItem