
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Carts from './pages/Carts'
import Orders from './pages/Orders'

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Dashboard/>}>
         <Route index element={<Home/>} />
         <Route path='/products' element ={<Products/>} />
         <Route path='/products/:id' element ={<ProductDetail/>} />
         <Route path='/cart' element ={<Carts/>} />
         <Route path='/orders' element ={<Orders/>} />
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;