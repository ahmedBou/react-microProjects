import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID KDwViUNQWDF6Cz28N9QZ7z_R8o-Skjzk6Pz4InsWo14'
  }
})