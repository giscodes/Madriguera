
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "la-madriguera-58cee.firebaseapp.com",
  projectId: "la-madriguera-58cee",
  storageBucket: "la-madriguera-58cee.appspot.com",
  messagingSenderId: "1004752468752",
  appId: "1:1004752468752:web:5a5beb0f6d48e5b2584395"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), { //collection si existe productos, lo consulta sino lo crea y lo consulta
            nombre: prod.nombre,
            marca: prod.marca,
            categoria: prod.categoria,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}


export const getProductos= async () =>{
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod =>{
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async (id) =>{
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item

}
export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}
export const deleteProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id))
}


//CREATE AND READ ORDEN DE COMPRA

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const oC = await getDoc(doc(db, "ordenesCompra", id))
    const ordenCompra = { ...oC.data(), id: oC.id }
    return ordenCompra
}
