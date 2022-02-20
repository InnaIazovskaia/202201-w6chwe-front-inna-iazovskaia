import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadRobotsListThunk } from "../../redux/thunks/robotsThunks";
import Robot from "../../components/Robot/Robot";

const Container = styled.div`
  margin: 0 auto;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const RobotsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  text-align: center;
`;

const RobotsPage = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsListThunk);
  }, [dispatch]);

  return (
    <Container>
      <Title>Robots</Title>
      <RobotsContainer title="robots">
        {robots.map((robot) => (
          <Robot key={robot._id} robot={robot}></Robot>
        ))}
      </RobotsContainer>
    </Container>
  );
};

export default RobotsPage;
