import { Order } from "../types";

type ItemCartProps = {
  item: Order;
  deleteItem: (id: Order['id']) => void;
  increaseQuantity: (id: Order['id']) => void;
  decreaseQuantity: (id: Order['id']) => void;
};

const ItemCart = ({ item, deleteItem, increaseQuantity, decreaseQuantity }: ItemCartProps) => {
  return (
    <tr>
      <td>
        <img
          src={`img/${item.image}.jpg`}
          alt={item.name}
          className="img-fluid" />
      </td>

      <td>
        {item.name}
      </td>

      <td className="fw-bold">
        ${item.price}
      </td>

      <td className="flex align-items-start gap-4">
        <button
          type="button"
          onClick={() => decreaseQuantity(item.id)}
          className="btn btn-dark">
          -
        </button>

        {item.quantity}

        <button
          type="button"
          onClick={() => increaseQuantity(item.id)}
          className="btn btn-dark">
          +
        </button>
      </td>

      <td>
        <button
          type="button"
          onClick={() => deleteItem(item.id)}
          className="btn btn-danger">
          X
        </button>
      </td>
    </tr>
  )
}

export default ItemCart