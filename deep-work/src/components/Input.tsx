import React, { useState } from "react";
import Body from "./Body";
import uuid from "react-uuid";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, switchTodo } from "../redux/modules/todoSlice";



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


  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const addPostHandler = () => {
    const newTodo = {
      id: uuid(),
      title: title,
      content: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  const deletHandler = (id: string) => {
    if (window.confirm("삭제 하시겠습니까?")) {
     dispatch(deleteTodo(id))
    }
    return;
  };

  const switchHandler = (id: string) => {
    dispatch(switchTodo(id));
  };


  const handleEnterPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
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
          <input value={content} onChange={contentHandler} onKeyDown={handleEnterPress} />
        </div>
        <div>
          <button onClick={addPostHandler} >추가하기</button>
        </div>
      </InputWarp>
      <Body

        deletHandler={deletHandler}
        switchHandler={switchHandler}
      />
    </div>
  );
};

export default Input;

const InputWarp = styled.div`
display : flex;
align-content: center;
jutifiy-content: center;
justify-content: space-between;
background-color: #adb5bd;
height:40px;
`