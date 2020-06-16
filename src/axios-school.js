import axios from 'axios'
import * as api from './api'
const instance = axios.create({
    baseURL: api.BASEURL
})
instance.defaults.headers.post['Content-Type'] = 'application/json'




export default instance;