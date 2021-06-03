import axios from 'axios'

import { API_BITLY_KEY } from '../utils/Consts'

const baseURL = 'https://api-ssl.bitly.com/v4'

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': `Bearer ${API_BITLY_KEY}`,
    'Content-Type': 'application/json'
  }
})

export default api
