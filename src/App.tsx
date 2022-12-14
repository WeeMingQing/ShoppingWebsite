import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Store} from "./pages/Store"
import {About} from "./pages/About"
import {NavBar} from "./components/NavBar"
import './App.css'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
  /**mb-4 is a style to add margin to the bottom of the container 
   * <> is a fragment to render everything to the screen
  */

function App() {
  return (
    <ShoppingCartProvider>
    <NavBar/>
    <Container className="mb-4"> 
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/store" element={<Store/>}/>
        <Route path ="/about" element={<About/>}/>

      </Routes>
    </Container>
    </ShoppingCartProvider>
    )
  }

export default App
