import styled from "styled-components";
import { Addto} from "./Input";
import { useQuery } from "react-query";
import { getTodos } from "../api/todoList";
import BodyPost from "./BodyPost";


const WorkingSt = styled.div`
display: flex;
`
const BodyPostContainer = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 200px;

  & button {
    margin-top: 8px;
    padding: 4px 8px;
    cursor: pointer;
  }
`;


const Body:React.FC<{ deletHandler:(id:string)=>void; switchHandler:(id:Addto)=>void;}> = ({ deletHandler,switchHandler}) => {
  
//데이터 가져오기 
  const { isLoading, isError, data} =  useQuery('todo',getTodos
  ,{
    retry: 3 ,
    staleTime: 6000
  })
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
                <BodyPostContainer>
            <BodyPost item={item} deletHandler={deletHandler}  switchHandler={switchHandler}/>
            </BodyPostContainer>
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
                <BodyPostContainer>
                <BodyPost item={item} deletHandler={deletHandler}  switchHandler={switchHandler}/>
                </BodyPostContainer>
              );
            }
          })}
            </WorkingSt>
        </div>
     
      </div>
         
   
  </div>;
};

export default Body;
