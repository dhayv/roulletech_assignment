import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.recipemeal.site'
})

export default api
