// import '../css/ItemListContainer.css'

export default function ItemListContainer(props) {
  return (
    <div className="div-construction pt-12 min-h-[90vh] flex flex-col justify-center">
      <h1 className="text-3xl lg:mb-[-100px] z-10">{props.greetings}</h1>
      <img className="" src="http://www.nelidapos.com/assets/images/wuc.jpg"/>
    </div>
  );
}