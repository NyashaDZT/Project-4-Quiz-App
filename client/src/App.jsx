import { Outlet, useNavigation } from "react-router-dom"

//Components
import NavBar from "./components/Navbar" 
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
