import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.APP_URL
    : `https://${process.env.SITE_NAME}/api`

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
