import './App.css';
import Header from './HeaderFooter/Header';
import Home from './Pages/Home';
import Footer from './HeaderFooter/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Category from './Pages/Shop/Category';
import Productdetail from './Pages/Shop/Productdetail';
import Checkout from './Pages/Shop/Checkout';
import Cart from './Pages/Shop/Cart';
import Blog from './Pages/Blog/Blog';
import Blogdetails from './Pages/Blog/Blogdetail';
import Elements from './Pages/Pagess/Elements';
import Tracking from './Pages/Pagess/Tracking';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Privetroute from './Pages/Privetroute';
import Admin from './Pages/Admin';
import Data from './Pages/Data';

const App = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/productdetails' element={<Productdetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Admin><Cart /></Admin>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogdetails' element={<Blogdetails />} />
        <Route path='/elements' element={<Elements />} />
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/contact' element={<Privetroute Cmp ={Contact} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/data' element={<Data/>} />1
      </Routes>
      <Footer />
    </>
  )
}

export default App;