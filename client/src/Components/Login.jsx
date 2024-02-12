import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate } from "react-router-dom"
import { setToken } from '../utils/helpers/common'

export default function Login(){
  const [error, setError] = useState(null)
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if(res?.status === 200) {
      setToken(res.data.access)
      navigate('/quizzes')
    } else if (res?.status >= 400 && res?.status < 600) { 
      setError(res.statusText) 
    }
  }, [res, navigate])

  return(
    <>
      <h1 className="text-center bold display-3 mb-4">Login</h1>
      <Form className='form' id="loginForm" method="POST">
        <input type="text" name="username" placeholder='Username' />
        <input type="password" name="password" placeholder=" Password" />
        {res && <p className='danger'>{error}</p>}
        <button className='btn btn-warning' type="submit">Login</button>
      </Form>
    </>
  )
}