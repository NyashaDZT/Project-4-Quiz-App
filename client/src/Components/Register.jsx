import { useEffect, useState } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import ImageUploadField from './ImageUploadField'


export default function Register(){
  console.log(`Hit register page`)
  const [error, setError] = useState(null)
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_picture: '',
    bio: ''
  })

  function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

    const res = useActionData()
    const navigate = useNavigate()

    const printFormData = () => {
      console.log('Form Data:', formData)
    }

    useEffect(()=> {
      if(res?.status === 201) {
        navigate('/login')
      } else if (res?.status >= 400 && res?.status < 600) { 
        setError(res.statusText) 
      }
    }, [res, navigate])

  return(
    <>
      <h1 className="text-center bold display-3 mb-4">Register</h1>
      <Form className='form' id="registrationForm" method="POST">
        <input type="text" name="username" placeholder=' Username' onChange={handleChange} />
        <input type="email" name="email" placeholder=' Email'  onChange={handleChange} />
        <input type="password" name="password" placeholder=' Password' onChange={handleChange} />
        <input type="password" name="password_confirmation" placeholder=' Confirm password' onChange={handleChange} />
        <ImageUploadField value={formData.image} setFormData={setFormData} />
        <input type="text" name="bio" placeholder='Bio - about you' onChange={handleChange} />
        {res && <p className='danger'>{error}</p>}
        <button className='btn btn-warning' type="submit" onClick={printFormData}>Register</button>
      </Form>
    </>
  )
}