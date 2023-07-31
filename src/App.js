import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'

function App() {
  const [cartIsEmpty] = useState(false)

  const [clicked, setClicked] = useState(false)


  const handleClick = () => {
    setClicked(!clicked)
  }

  

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className='div'>
             <h1>Davolayebi</h1>
             <p>Nigeria Limited</p>
          </div>

          <div id='mobile' className='hamburger' onClick={handleClick} >
            <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 
           
            
              {/* <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div> */}
          </div>
        <div id="nav-bar"  className={clicked ? "#nav-bar active" : "#nav-bar" }>
        <ul  id='navbar' className={clicked ? "#nav-bar active" : "#nav-bar" }>  
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          </ul>  
        </div>  
        
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route 
            path="/checkout" 
            element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App