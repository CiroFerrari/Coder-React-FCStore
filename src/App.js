import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="¡Pronto estaremos online!" />} />
        <Route path="/category/:id" element={<ItemListContainer greetings="¡Pronto estaremos online!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
