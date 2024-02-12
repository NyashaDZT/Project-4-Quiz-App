import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss'

// Page components
import App from './App.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Index from './components/Index.jsx'
import SingleQuizView from './components/SingleQuizView.jsx';
import QuizCreate from './Components/QuizCreate.jsx';
import QuizEditOrDelete from './components/QuizEditOrDelete.jsx'

// Actions
import { loginUser, registerUser } from './utils/actions/auth.js'
import { profileLoader, quizLoader, singleQuizLoader } from './utils/loaders.js';
import { createQuiz } from './utils/actions/quiz.js';
import Profile from './components/Profile.jsx';


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
      },
      {
        path: '/createquiz',
        element: <QuizCreate />,
        action: async ({ request }) => createQuiz(request)
      },
      {
        path: '/profile/:userId',
        element: <Profile />,
        loader: async ({ params }) => profileLoader(params.userId)
    },
    {
      path:'/quizzes/:quizId/edit',
      element: <QuizEditOrDelete />,
      loader: async ({ params }) => singleQuizLoader(params.quizId),
    }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
