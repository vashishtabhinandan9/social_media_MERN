import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:'http://localhost:5000/',
    //baseURL: 'https://daily-creative.herokuapp.com/api/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        "Content-Type":"application/json",
    }
  });
  