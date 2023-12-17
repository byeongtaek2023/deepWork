import React from "react";
import styled from "styled-components";
import { Addto } from "./Input";

const WorkingStIn = styled.div`
  display: flex;
  background-color: #495057;

  margin-left: 10px;
  max-width: 150px;
  height: 150px;
`;

const BodyPost: React.FC<{
  item: Addto;
  deletHandler: (id: string) => void;
  switchHandler: (id: Addto) => void;
}> = ({ item, deletHandler, switchHandler }) => {
  return (
    <div>
      <WorkingStIn key={item.id}>
        <div>
          <div>제목:{item.title}</div>
          <div>내용:{item.content}</div>
          <button onClick={() => deletHandler(item.id)}>삭제</button>
          <button onClick={() => switchHandler(item)}>
            {item.isDone ? "완료" : "취소"}
          </button>
        </div>
      </WorkingStIn>
    </div>
  );
};

export default BodyPost;
