import { Outlet, useNavigation } from "react-router-dom"

//Components
import NavBar from "./Components/Navbar" 

function App() {
  

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
