import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from './LoadingScreen'
import "./index.css"
import { Navbar } from './Navbar'
import { MobileMenu } from './MobileMenu'
import { Home } from './Home'
import { About } from './About'
import { Projects } from './Projects'
import { RevealOnScroll } from './Components/RevealOnScroll'
import { Contact } from './Contact'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

 return (
  <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    <div
      className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 bg-lines relative`}
    >
    <Navbar menuOpen ={menuOpen} setMenuOpen= {setMenuOpen}/>
    <MobileMenu menuOpen ={menuOpen} setMenuOpen= {setMenuOpen}/>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    </div>
  </>
);
}

export default App
