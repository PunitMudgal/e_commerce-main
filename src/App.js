import Header from "./components/Header";
import { ProductProvider } from "./context/ProductContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Main from "./pages/Main";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ProductProvider>
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
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
