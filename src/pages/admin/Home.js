import { Container } from "@mui/material";

const Home = (props) => {
  return (
    <>
      <Container id={props.id??''}>
        Ini Home Page
      </Container>
    </>
  );
};

export default Home
