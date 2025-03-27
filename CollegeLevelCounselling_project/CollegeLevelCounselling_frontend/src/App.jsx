import Navbar from "./components/Header/Navbar"
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function App() {
  
  return (
    <>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default App
