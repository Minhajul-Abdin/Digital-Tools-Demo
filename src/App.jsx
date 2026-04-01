import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Stats from './components/stats'
import Title from './components/Title'
import Tools from './components/tools'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import Price from './components/Price'
import Ready from './components/Ready'

const getTools = async() => {
  const res = await fetch("/tools.json")
  return res.json()
}

const toolsPromise = getTools();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  return (
    <>
    <Navbar carts={carts}></Navbar>
    <Hero></Hero>
    <Stats></Stats>
    <Title></Title>
    <div className="tabs tabs-box flex justify-center bg-transparent border-none">
      <input type="radio" name="my_tabs_1" className={` tab mr-2 rounded-full px-6 ${activeTab === "products" ? 'background-grad' : ''} `} aria-label="Products" onClick={()=> setActiveTab("products")} />
      <input type="radio" name="my_tabs_1" className={`tab rounded-full px-6 ${activeTab === "cart" ? 'background-grad' : ''}`} aria-label={`Cart (${carts.length}) `} onClick={()=> setActiveTab("cart")} />
    </div>
    {activeTab === "products" && <Tools toolsPromise={toolsPromise} carts={carts} setCarts={setCarts}></Tools>}
    {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    <GetStarted></GetStarted>
    <Price></Price>
    <Ready></Ready>

    <Footer></Footer>
    </>
  )
}

export default App
