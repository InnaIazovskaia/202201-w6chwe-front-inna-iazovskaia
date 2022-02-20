import styled from "styled-components";

const RobotCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 450px;
`;

const RobotName = styled.h2`
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const P = styled.p`
  margin: 1px;
  font-weight: bold;
`;

const Robot = ({
  robot: { name, image, speed, strength, date_of_creation },
}) => {
  return (
    <RobotCard className="robot">
      <RobotName className="robot_title">{name}</RobotName>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <InformationContainer>
        <P>Speed: {speed}</P>
        <P>Strength: {strength}</P>
        <P>Date of creation: {date_of_creation}</P>
      </InformationContainer>
    </RobotCard>
  );
};

export default Robot;
