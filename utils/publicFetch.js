import axios from 'axios'

const baseURL =
  process.env.SITE_NAME+"/api"
    

const publicFetch = axios.create({
  baseURL,
  headers: {'Access-Control-Allow-Origin': '*',
  referrerPolicy: 'no-referrer',
  "referrer policy": 'no-referrer'
}
})

export { publicFetch, baseURL }
