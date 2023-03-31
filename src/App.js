import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
import {  Route, Routes } from "react-router-dom";
import ProductNav from "./component/ProductNav";
import ListProduct from "./component/ListProduct";
import Search from "./component/Search";
import Add from "./component/Add";
import Product from "./component/Product";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="items" element={<Items />}>
            <Route path="" element={<ProductNav/>} >
            <Route path="list"  >
              <Route index element={<ListProduct/>}/>
              <Route path=":title" element={<Product/>} />  
            </Route>
            <Route path="search" element={<Search/>} />
            <Route path="add" element={<Add/>} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
