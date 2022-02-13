import Container from '../../components/common/Container';
import Banner from '../../components/dashboard/Banner';
import Content from '../../components/dashboard/Content';

const Home = (props) => {
  return (
    <>
      <Container id={props.id??''} containerFluid={true}>
        <Banner />
        <Content />
      </Container>
    </>
  );
};

export default Home
