import React, {useState, useEffect} from "react";
import queryProducts from "../utils/queryProducts";
import {productsData} from "../utils/productsData";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    queryProducts(productsData)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  })

  return (
    <div className="div-construction pt-0 min-h-[90vh] flex flex-col justify-start items-center">
      <h1 className="text-3xl mt-12">{props.greetings}</h1>
      <ItemList items={products} />
    </div>
  );
}