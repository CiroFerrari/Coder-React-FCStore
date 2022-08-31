import {useEffect, useState} from "react";
import queryData from "../utils/queryData";
import ItemDetail from "./ItemDetail";
import {productsData} from "../utils/productsData";

export default function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();

  useEffect(() => {
    queryData(productsData[0])
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, [])

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div className="flex justify-center items-center min-h-[70vh] w-screen">
        <div className="spin"></div>
        <p className="mt-6 text-xl">Cargando</p>
      </div>
  )
}