import axios from 'axios'

//const baseURL =
//  "/api"
const baseURL =
  "http://64.227.30.137/api"   

const publicFetch = axios.create({
  baseURL
 
})

export { publicFetch, baseURL }
