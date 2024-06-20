import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />}/>
        <Route path="/updateproduct" element={<UpdateProduct />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;