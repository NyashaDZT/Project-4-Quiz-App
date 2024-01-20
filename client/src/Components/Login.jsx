import { useEffect } from "react"
import { Form, useActionData, useNavigate } from "react-router-dom"
import { setToken } from '../utils/helpers/common'

export default function Login(){
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if(res?.status === 200) {
      setToken(res.data.token)
      navigate('/')
    }
  }, [res, navigate])

  return(
    <>
      <h1 className="text-center bold display-3 mb-4">Login</h1>
      <Form className='form' id="loginForm" method="POST">
        <input type="text" name="username" placeholder='Username' />
        <input type="password" name="password" placeholder=" Password" />
        <button className='btn btn-warning' type="submit">Login</button>
        {res && <p className='danger'>{res.data.message}</p>}
      </Form>
    </>
  )
}