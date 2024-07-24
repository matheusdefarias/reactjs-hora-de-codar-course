import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
      </header>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <h3>Rodapé</h3>
      </footer>
    </div>
  );
}

export default App;
