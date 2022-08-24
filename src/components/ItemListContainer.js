// import '../css/ItemListContainer.css'

import ItemCount from "./ItemCount";

export default function ItemListContainer(props) {
  return (
    <div className="div-construction pt-12 min-h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">{props.greetings}</h1>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}