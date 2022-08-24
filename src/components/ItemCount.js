import {useState} from "react";
import swal from 'sweetalert';

export default function ItemCount(props) {
  const[count, setCount] = useState(props.initial);

  function decrement() {
    if(count != props.initial) {
      setCount(count-1)
    } else {
      swal(`¡No puedes agregar menos de ${props.initial} unidad!`);
    }
  }

  function increment() {
    if(count != props.stock) {
      setCount(count+1)
    } else {
      swal(`¡No puedes agregar más de ${props.stock} unidades!`);
    }
  }

  function addToCart() {
    swal(`¡Se agregaron al carrito ${count} unidades!`);
  }

  return (
    <div className="flex flex-col items-center w-[200px]">
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
    </div>
);
}