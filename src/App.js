import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { FilterProductProvider } from "./context/FilterContext";
import { ProductProvider } from "./context/ProductContext";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <AuthProvider>
      <ProductProvider>
        <FilterProductProvider>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home /> <Main />
                </>
              }
            />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        </FilterProductProvider>
      </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
