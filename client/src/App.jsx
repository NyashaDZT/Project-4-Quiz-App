import { Outlet, useNavigation } from "react-router-dom"

//Components
import NavBar from "./Components/Navbar" 
import Footer from "./Components/Footer"

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
