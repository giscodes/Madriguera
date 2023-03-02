import { BsCart3 } from "react-icons/bs";
export const CartWidget = ({ cantCarrito }) => {
  return (
    <>
      <button className="BsCart">
        <BsCart3 />
      </button>
      <p>{cantCarrito}</p>
    </>
  );
};