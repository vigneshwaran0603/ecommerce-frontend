import React from 'react'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin.jsx';
import WatchDetails from './pages/WatchDetails.jsx';
import Shop from './pages/Shop.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminRegister from './pages/AdminRegister.jsx';
import Cart from './pages/Cart.jsx';
import WishList from './pages/WishList.jsx';
import UpdateProduct from './pages/UpdateProduct.jsx';
import Update from './pages/Update.jsx';
import CheckoutForm from './pages/CheckoutForm.jsx';



const App = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col">
      
    <Router>
      {/* Header appears on all pages */}
      {/* <Header /> */}
      {/* <Home /> */}
      {/* Main routes */}
      <Routes>
       
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/admin" element={<Admin />} />
          <Route path="/adminregister" element={<AdminRegister />} />
           <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/watchdetails" element={<WatchDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
         <Route path="/updateproduct" element={<UpdateProduct />} />
         <Route path="/update/:id" element={<Update />} />
          <Route path="checkout" element={<CheckoutForm />} />

         
      </Routes>
    </Router>
    <div className="gold-particles"></div>

     {/* <Footer /> */}
    </div>
    </>
  )
}

export default App






