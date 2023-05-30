import './App.css';
import Header from './components/Header';
import { FilterContextProvider } from './context/Filtercontext';
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home'
import Main from './pages/Main';

function App() {
  return (
 <>
 <ProductProvider>
  <FilterContextProvider>
 <Header /> 
 {/* <Home />  */}
 <Main />
 </FilterContextProvider>
 </ProductProvider>
 </>
  );
}

export default App;
