import axios from 'axios'

const api = axios.create({
  baseURL: 'Django-load-balancer-1592783408.us-east-1.elb.amazonaws.com'
})

export default api
