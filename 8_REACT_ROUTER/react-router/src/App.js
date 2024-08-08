import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Search from "./pages/Search";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
      </header>
      
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <footer>
        <h3>Rodapé</h3>
      </footer> */}
    </div>
  );
}

export default App;
