import './App.css'
import NavBar from './Headers/NavBar'
import Footers from './Footers'
import Home from './pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import About from './pages/About'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Property from './pages/Property'
import Ruffdata from './pages/RuffData'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='property' element={<Property/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/sell' element={<Sell/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/buy' element={<Buy/>}/>
      <Route path='/ruffData' element={<Ruffdata/>}/>
    </Routes>
    <Footers/>
    </BrowserRouter>
    </>
  )
}

export default App
