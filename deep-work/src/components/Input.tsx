import React, { useEffect, useRef } from "react";

import uuid from "react-uuid";
import styled from "styled-components";

import { addTodo, deleteTodo, getTodos, switchTodo } from "../api/todoList";
import Body from "./Body";
import { useMutation, useQueryClient } from "react-query";

export type Addto = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const Input: React.FC = () => {

  const titleInpuRef = useRef<HTMLInputElement>(null);

  const contextInpuRef = useRef<HTMLInputElement>(null);

  const addPostHandler = async () => {

    const title = titleInpuRef.current?.value || "";

    const context = contextInpuRef.current?.value || "";

    const newTodo = {
      id: uuid(),
      title: title,
      content: context,
      isDone: false,
    };

    mutation.mutate(newTodo);

    if (titleInpuRef.current) {
      titleInpuRef.current.value = "";
    }

    if (contextInpuRef.current) {
      contextInpuRef.current.value = "";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getTodos();
    };
    fetchData();
  }, []);


  const queryClient = useQueryClient();
  
  //addTodo 무효화
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  
  //deleteTodo 무효화
  const mutation2 = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });

  //switchTodo 무효화
  const mutation3 = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });

  const deletHandler = async (id: string) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      mutation2.mutate(id);
    }
    return;
  };

  const switchHandler = async (id: Addto) => {
    mutation3.mutate(id);
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
          <input ref={titleInpuRef}   onKeyDown={handleEnterPress} />

          <label>내용</label>
          <input ref={contextInpuRef} onKeyDown={handleEnterPress} />
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
