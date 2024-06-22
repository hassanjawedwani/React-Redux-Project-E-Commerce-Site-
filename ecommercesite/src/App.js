import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import ListProducts from "./components/ListProducts";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/updateproduct" element={<UpdateProduct/>}/>
        <Route path="/login" element={<Protected cmp={Login} />}/>
        <Route path="/register" element={<Protected cmp={Register} />}/>
        <Route path="/register" element={<Protected cmp={Register} />}/>
        <Route path="/search" element={<Protected cmp={SearchComponent} />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;