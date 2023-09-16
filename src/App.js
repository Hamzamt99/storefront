
import './App.css';
import Category from './Components/Categories/';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Product from './Components/Products';
function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
