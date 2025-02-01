import { TGuitar } from "../types";

type GuitarProps = {
  guitar: TGuitar;
  handleCart: (guitar: TGuitar) => void;
};

const Guitar = ({ guitar, handleCart }: GuitarProps) => {
  const { name, description, price, image } = guitar;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`img/${image}.jpg`} alt={`imagen guitarra ${name}`} />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          onClick={() => handleCart(guitar)}
          className="btn btn-dark w-100">
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default Guitar