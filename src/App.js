import './App.css';
import Header from './components/Header';
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home'
import Main from './pages/Main';

function App() {
  return (
 <>
 <ProductProvider>
 <Header /> 
 {/* <Home /> */}
 <Main />
 </ProductProvider>
 </>
  );
}

export default App;
