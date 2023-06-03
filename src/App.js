import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product-detail/:id' element={<ProductDetail/>}/>
    </Routes>
  );
}

export default App;
