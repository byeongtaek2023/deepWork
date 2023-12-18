// import Body from "../components/Body";
import Header from "../components/Header";
import Input from "../components/Input";
import styled from "styled-components";

const Box = styled.div`
  max-width: 1200px;
  min-width: 800px;
  background-color: #ced4da;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <Box>
      <Header />
      <Input />
    </Box>
  );
};
export default Home;
