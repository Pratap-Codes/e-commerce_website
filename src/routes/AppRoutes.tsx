import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import ProductList from '../pages/ProductList'
import Layout from '../components/layout/Layout'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='products' element={<ProductList/>}/>
        <Route path='product/:id' element={<ProductDetails/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes
