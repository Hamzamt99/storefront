
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Components/Categories/';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Product from './Components/Products';
import Cart from './Components/SimpleCart';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={[<Category />, <Product />]} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
