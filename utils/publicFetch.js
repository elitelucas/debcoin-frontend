import axios from 'axios'

const baseURL =
  "/api"
    

const publicFetch = axios.create({
  baseURL
 
})

export { publicFetch, baseURL }
