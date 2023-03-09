
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6A8beKXBu5-2ZsxvOSy5yCUc3om1V5hw",
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
            categoria: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}
