import {useState} from "react";
import swal from 'sweetalert';

export default function ItemCount(props) {
  const[count, setCount] = useState(props.min);

  function decrement() {
    if(count !== props.min) {
      setCount(count-1)
    } else {
      swal(`¡No puedes agregar menos de ${props.min} unidad!`);
    }
  }

  function increment() {
    if(count !== props.stock) {
      setCount(count+1)
    } else {
      swal(`¡No puedes agregar más de ${props.stock} unidades!`);
    }
  }

  function addToCart() {
    swal(`¡Se agregaron al carrito ${count} unidades!`);
  }

  return (
    <div className="flex items-center justify-between w-full border-indigo-600 border-2 rounded-md">
        <button className="mr-2 ml-2 px-3 py-2 hover:bg-indigo-100" onClick={decrement}>-</button>
        {count}
        <button className="ml-2 mr-2 px-3 py-2 hover:bg-indigo-100" onClick={increment}>+</button>

      <button
        type="submit"
        className="w-3/5 mt-0 w-full bg-indigo-600 border border-transparent rounded py-3 px-2 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={addToCart}
      >
        Agregar al carrito
      </button>
    </div>
);
}

/*
<div className="flex flex-col items-center w-full">
  <div className="flex justify-between items-center px-4 py-1 border-indigo-600 border-2 rounded-md w-full hover:bg-gray-50">
    <button className="mr-5 px-4 py-1 hover:bg-indigo-100" onClick={decrement}>-</button>
    {count}
    <button className="ml-5 px-4 py-1 hover:bg-indigo-100" onClick={increment}>+</button>
  </div>
  <button
    type="submit"
    className="w-full mt-3 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    onClick={addToCart}
  >
    Agregar al carrito
  </button>
</div>*/
