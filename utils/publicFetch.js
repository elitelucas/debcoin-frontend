import axios from 'axios'

//const baseURL =
//  "/api"
const baseURL =
  "http://localhost/api"   

const publicFetch = axios.create({
  baseURL
 
})

export { publicFetch, baseURL }
