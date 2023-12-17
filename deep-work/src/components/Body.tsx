import styled from "styled-components";
import { Addto} from "./Input";
import { useQuery } from "react-query";
import { getTodos } from "../api/todoList";
import BodyPost from "./BodyPost";


const WorkingSt = styled.div`
display: flex;
`

// const WorkingStIn = styled.div`
// display: flex;
// background-color: #495057;

// margin-left: 10px;
// max-width: 150px;
// height: 150px;
// `


const Body:React.FC<{ deletHandler:(id:string)=>void; switchHandler:(id:Addto)=>void;}> = ({ deletHandler,switchHandler}) => {
  
//데이터 가져오기 
  const { isLoading, isError, data} =  useQuery('todo',getTodos)
console.log('bodyData',data)


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Data not available</div>;
  }

  return <div>
          <div>
          <h1>Working...</h1>
        <WorkingSt>
          {data?.map((item:Addto) => {
            if (!item.isDone) {
              return (
            <BodyPost item={item} deletHandler={deletHandler}  switchHandler={switchHandler}/>
              );
            } 
          })}
         
        </WorkingSt>
        <div>
          <h1>Done...</h1>
          <WorkingSt>
          {data?.map((item:Addto) => {
            if (item.isDone) {
              return (
                <BodyPost item={item} deletHandler={deletHandler}  switchHandler={switchHandler}/>
              );
            }
          })}
            </WorkingSt>
        </div>
     
      </div>
         
   
  </div>;
};

export default Body;
