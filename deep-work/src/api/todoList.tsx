import axios, { AxiosResponse } from "axios";
import { Addto } from "../components/Input";

// 모든 todos를 가져오는 api
const getTodos = async ():Promise<Addto[]> => {
  const response:AxiosResponse<Addto[]> = await axios.get("http://localhost:3001/todos");

  return response.data;

};

const addTodo = async (newTodo:Addto) => {
  await axios.post("http://localhost:3001/todos", newTodo);
};

const deleteTodo = async (id:string) => {
  await axios.delete(`http://localhost:3001/todos/${id}`)
} 

const switchTodo = async (item:Addto) => {
  await axios.patch(`http://localhost:3001/todos/${item.id}`, { isDone: !item.isDone });
} 

export { addTodo,getTodos,deleteTodo,switchTodo };
