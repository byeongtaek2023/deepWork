import React, { useEffect, useState } from "react";
import Body from "./Body";
import uuid from "react-uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __addTodos, __deleteTodo, __getTodos, __switchTodo, addTodo, deleteTodo, switchTodo } from "../redux/modules/todoSlice";
import { json } from "../axios/todo";

export type Addto = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type RootState = {
  todoSlice: Addto[];
};

const Input: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(``);

  const [content, setContent] = useState<string>(``);

const data = useSelector((state:RootState)=>state.todoSlice)

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };


  const addPostHandler = async () => {
    const newTodo = {
      id: uuid(),
      title: title,
      content: content,
      isDone: false,
    };
    // try {
    //   await json.post("/todos", newTodo);
    // } catch {
    //   console.log("post error");
    // }
  
    dispatch(__addTodos(newTodo)as any);
    setTitle("");
    setContent("");
  };

   
  useEffect(()=>{
    async function lender() {
      const responses:Addto = (await json.get("/todos")).data;
      console.log(responses)
      dispatch(__getTodos()as any);
    }
  lender();
  },[])
  

  const deletHandler = async(id: string) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      // await json.delete(`/todos/${id}`);
      dispatch(__deleteTodo(id)as any);
    }
    return;
  };

  const switchHandler = async(id: string) => {
    // await json.patch(`/todos/${id}`, { isDone: true });
    dispatch(__switchTodo(id)as any);
    

  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addPostHandler();
    }
  };


  return (
    <div>
      <InputWarp>
        <div>
          <label>제목</label>
          <input value={title} onChange={titleHandler} />
          <label>내용</label>
          <input
            value={content}
            onChange={contentHandler}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div>
          <button onClick={addPostHandler}>추가하기</button>
        </div>
      </InputWarp>
      <Body deletHandler={deletHandler} switchHandler={switchHandler} />
    </div>
  );
};

export default Input;

const InputWarp = styled.div`
  display: flex;
  align-content: center;
  jutifiy-content: center;
  justify-content: space-between;
  background-color: #adb5bd;
  height: 40px;
`;


