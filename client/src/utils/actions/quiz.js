import axios from 'axios'
import { formToObj, getToken} from '../helpers/common'

export async function createQuiz(request) {
  const data = await formToObj(request)
  console.log(data)
  return await axios.post(`/api/quizzes/`, data, {
      validateStatus: () => true,
      headers: {
          Authorization: `Bearer ${getToken()}`
      }
  })
}