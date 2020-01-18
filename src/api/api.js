import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

 


