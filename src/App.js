import { Suspense, lazy } from "react";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Alert from "./components/Alert";
import { AuthProvider } from "./context/AuthContext";
import { FilterProductProvider } from "./context/FilterContext";
import { ProductProvider } from "./context/ProductContext";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";

const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Main = lazy(() => import("./pages/Main"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <FilterProductProvider>
            <CartProvider>
              <HashRouter basename="/e_commerce-main">
                <Header />
                <Alert />
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route
                      exact
                      path="/e_commerce-main"
                      element={
                        <>
                          <Home /> <Main />
                        </>
                      }
                    />
                    <Route
                      path="/singleProduct/:id"
                      element={<SingleProduct />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/cart" element={<Cart />} />
                  </Routes>
                </Suspense>
              </HashRouter>
            </CartProvider>
          </FilterProductProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
