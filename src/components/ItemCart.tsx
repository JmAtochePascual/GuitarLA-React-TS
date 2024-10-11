import { Dispatch } from "react";
import { Order } from "../types";
import { GuitarAction } from "../reducer/guitarReducer";

type ItemCartProps = {
  item: Order;
  dispatch: Dispatch<GuitarAction>;
};

const ItemCart = ({ item, dispatch }: ItemCartProps) => {
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
          onClick={() => dispatch({ type: 'decrease-quantity', payload: { id: item.id } })}
          className="btn btn-dark">
          -
        </button>

        {item.quantity}

        <button
          type="button"
          onClick={() => dispatch({ type: 'increase-quantity', payload: { id: item.id } })}
          className="btn btn-dark">
          +
        </button>
      </td>

      <td>
        <button
          type="button"
          onClick={() => dispatch({ type: 'remove-guitar', payload: { id: item.id } })}
          className="btn btn-danger">
          X
        </button>
      </td>
    </tr>
  )
}

export default ItemCart