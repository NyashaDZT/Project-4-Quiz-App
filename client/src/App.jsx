import { Outlet, useNavigation } from "react-router-dom"

//Components
import NavBar from "./components/Navbar" 
import Footer from "./components/Footer"
import { Spinner } from 'react-bootstrap'

function App() {
  const navigation = useNavigation()

  return (
    <div>
      <NavBar />
      <main>
        {
          navigation.state === 'idle' ?
          <Outlet />
          :
          <div className="centered d-flex justify-content-center align-items-center h-100">
            <Spinner animation='border' />
          </div>
        }
      </main>
      <Footer />
    </div>
  )
}

export default App
