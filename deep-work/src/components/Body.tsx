import styled from "styled-components";
import { Addto } from "./Input";


const WorkingSt = styled.div`
display: flex;

`
const WorkingStIn = styled.div`
display: flex;
background-color: #495057;

margin-left: 10px;
max-width: 150px;
height: 150px;

`

const Body:React.FC<{addToBody:Addto[]; deletHandler:(id:string)=>void; switchHandler:(id:string)=>void;}> = ({ addToBody,deletHandler,switchHandler}) => {

  return <div>
          <div>
          <h1>Working...</h1>
        <WorkingSt>
          
          {addToBody?.map((item) => {
            if (!item.isDone) {
              return (
                <WorkingStIn>
                <div key={item.id}>
                  <div>제목:{item.title}</div>
                  <div>내용:{item.content}</div>
                  <button onClick={()=>deletHandler(item.id)}>삭제</button>
                  <button onClick={()=>switchHandler(item.id)}>완료</button>
                </div>
                </WorkingStIn>
              );
            } 
          })}
         
        </WorkingSt>
        <div>
          <h1>Done...</h1>
          <WorkingSt>
          {addToBody?.map((item) => {
            if (item.isDone) {
              return (
                <WorkingStIn>
                <div key={item.id}>
                  <div>제목:{item.title}</div>
                  <div>내용:{item.content}</div>
                  <button onClick={()=>deletHandler(item.id)}>삭제</button>
                  <button onClick={()=>switchHandler(item.id)}>취소</button>
                </div>
                </WorkingStIn>
              );
            }
          })}
            </WorkingSt>
        </div>
     
      </div>
         
   
  </div>;
};

export default Body;
