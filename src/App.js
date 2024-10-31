import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';
import ProductShowcase from './ProductShowCase';
import CollapsibleExample from './Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CollapsibleExample></CollapsibleExample>
        <Routes>
          <Route path="/" element={<ProductSearch />} />
          <Route path="/articles" element={<ProductShowcase />} />
          <Route path="/about" element={<ProductSearch />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
