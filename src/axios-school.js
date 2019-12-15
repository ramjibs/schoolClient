import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:4000/api/" 
})
instance.defaults.headers.post['Content-Type'] = 'application/json'




export default instance;