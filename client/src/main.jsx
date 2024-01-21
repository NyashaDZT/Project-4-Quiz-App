import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss'

// Page components
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Index from './Components/Index.jsx'
import SingleQuizView from './Components/SingleQuizView.jsx';

// Actions
import { loginUser, registerUser } from './utils/actions/auth.js'
import { quizLoader, singleQuizLoader } from './utils/loaders.js';
import { createResult } from './utils/actions/results.js';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/quizzes',
        element: <Index />,
        loader: quizLoader
      },
      {
        path: '/quizzes/:quizId',
        element: <SingleQuizView />,
        loader: async ({ params }) => singleQuizLoader(params.quizId),
        action: async ({ request }) => createResult(request)
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
