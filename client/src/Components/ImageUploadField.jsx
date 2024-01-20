import axios from "axios"

export default function ImageUploadField({ value, setFormData }) {
  
  async function handleImageUpload(e) {
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)


    try {
      const { data: { secure_url } }   = await axios.post(endpoint, data)
      console.log(secure_url)
      setFormData(prevFormData => ({
        ...prevFormData,
        profile_picture: secure_url
      }))
    } catch (error) {
  if (error.response) {
    console.error('Response data:', error.response.data);
    console.error('Status code:', error.response.status);
    console.error('Status text:', error.response.statusText);
  } else {
    console.error('Error message:', error.message);
  }
}
}

  return(
    <>
    <input type='file' name='profile_picture'  onChange={handleImageUpload} />
    </>
  )
}