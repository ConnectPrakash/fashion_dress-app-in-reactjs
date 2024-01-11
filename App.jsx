import React from 'react'
import Navbar from './components/navbar/Navbar'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Shop from './components/Pages/Shop';
import Shopcategory from './components/Pages/Shopcategory';
import Product from './components/Pages/Product';
import Card from './components/Pages/Card';
import LoginSignup from './components/Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Card/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App
