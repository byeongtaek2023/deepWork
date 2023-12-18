import axios, { AxiosResponse } from "axios";
import { Addto } from "../components/Input";

// 모든 todos를 가져오는 api
const getTodos = async ():Promise<Addto[]> => {
  const response:AxiosResponse<Addto[]> = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);

  return response.data;

};

const addTodo = async (newTodo:Addto) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}`, newTodo);
};

const deleteTodo = async (id:string) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/${id}`)
} 

const switchTodo = async (item:Addto) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/${item.id}`, { isDone: !item.isDone });
} 

export { addTodo,getTodos,deleteTodo,switchTodo };
