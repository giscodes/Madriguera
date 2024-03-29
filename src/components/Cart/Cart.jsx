import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext()
  
  return (
    <>
      {
        carrito.length === 0
        ? //Si no existen productos en el carrito
          <>
              <h2 className="carritoVacio">Carrito vacio</h2>
              <Link className="nav-link" to={"/"}><button className="btn btn-prod">Continuar comprando</button></Link>
          </>
        : //Si existen productos en el carito
          <div className="container cartContainer">
              <ItemList prods={carrito} plantilla="ItemCart"/>
              <div className="divButtons">
              <p className="resumenCompra">Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
              <button className="btn btn-danger btn-ex" onClick={() => emptyCart()}>Vaciar Carrito</button>
              <Link className="nav-link" to={"/"}><button className="btn btn-prod">Continuar comprando</button></Link>
              <Link className="nav-link" to={"/checkout"}><button className="btn btn-prod">Finalizar Compra</button></Link>
            </div>
          </div>
      }
    
    </>
  )

}

/*
  Primer metodo de rendering - Complejidad de 6
  const cond = false
  if(cond) {
    return <h2>Es verdadero</h2>
  }
   
  return <h2>Es falso</h2>

  Segundo metodo de rendering - Complejidad de 6

  const cond = true
  return (
    <>
      {cond && <h2>Es verdadero</h2>}
      {!cond && <h2>Es falso</h2>}
    </>
  )

  Tercer metodo de rendering - Complejidad 5
  const cond = false
  return (
    <>
      {cond ? <h2>Es verdadero</h2> : <h2>Es falso</h2>}
    </>
  )
*/

/*   const cond = true
    if(cond){
        return <h2>Es verdadero</h2>
    }
    return <h2>Es falso</h2>
    Primer metodo de rendering consultando por una condicion.


        const cond = true
   return (
    <>
    {cond && <h2>Es Verdadero</h2>}
    {!cond && <h2>Es falso</h2>}
    </>
   )
   Segundo método de rendering


      const cond = true
   return (
    <>
    {cond ? <h2>Es verdadero</h2> : <h2>Es falso</h2>}
    </>
    Tercer metodo de rendering
    */