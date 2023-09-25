
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Components/Categories/';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Product from './Components/Products';
import Details from './Components/SimpleCart';
import Checkout from './Components/checkout/Checkout';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={[<Category />, <Product />]} />
        <Route path='/cart' element={ <Checkout />} />
        <Route path='/details' element={ <Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
