import React from "react";
import styled from "styled-components";
import { Addto } from "./Input";

const WorkingStIn = styled.div`
  display: flex;
  background-color: #495057;
  margin-left: 10px;
  max-width: 150px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  color: #ffffff;
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 8px;
  cursor: pointer;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
`;

const BodyPostWrapper = styled.div`
  margin-bottom: 20px;
`;

const BodyPost: React.FC<{
  item: Addto;
  deletHandler: (id: string) => void;
  switchHandler: (id: Addto) => void;
}> = ({ item, deletHandler, switchHandler }) => {
  return (
    <BodyPostWrapper>
      <WorkingStIn key={item.id}>
        <div>
          <div>제목:{item.title}</div>
          <div>내용:{item.content}</div>
          <Button onClick={() => deletHandler(item.id)}>삭제</Button>
          <Button onClick={() => switchHandler(item)}>
            {item.isDone ? "취소":"완료" }
          </Button>
        </div>
      </WorkingStIn>
    </BodyPostWrapper>
  );
};

export default BodyPost;
