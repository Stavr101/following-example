import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Image = styled.img`
  display: flex;
  margin-top: -20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
`;

export const Line = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  margin-bottom: 62px;
`;

export const Avatar = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 5;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Ellipse = styled.div`
  width: 92px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06),
    inset 0px -2.55556px 5.11111px #ae7be3,
    inset 0px 5.11111px 3.83333px #fbf8ff;
  border-radius: 50%;
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  height: 50px;
  background-color: ${({ isFollow }) => (isFollow ? '#5CD3A8' : '#EBD8FF')};
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;
