import axios from "axios";

const URL='http://localhost:8000'
export const fecthUser= async (id) => await axios.get(`${URL}/user/${id}`);
export const listUsers=()=> axios.get(`${URL}/users1`)
export const createUser=(newUser)=>  axios.post(`${URL}/user/`,newUser);
export const updateUser=(User)=> axios.put(`${URL}/user/`,User)
