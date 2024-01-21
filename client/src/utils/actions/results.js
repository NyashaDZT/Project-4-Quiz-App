import axios from 'axios'
import { formToObj, getToken} from '../helpers/common'

export async function createResult(request) {
  const data = await formToObj(request)
  return await axios.post(`/api/results`, data, {
      validateStatus: () => true,
      headers: {
          Authorization: `Bearer ${getToken()}`
      }
  })
}