import axios from 'axios';
 
//http://localhost:3333/tasks
 
const api = axios.create({
  //baseURL: 'http://localhost:3333/'
  baseURL: 'http://192.168.1.107:4000'
});
 
export default api;