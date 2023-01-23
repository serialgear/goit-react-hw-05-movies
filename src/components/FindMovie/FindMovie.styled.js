import styled from 'styled-components';
import FindImg from '../../images/findMovie.png';

export const Box = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #f2c0a88f;
`;

export const Img = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: url(${FindImg});
  background-size: cover;
  border-radius: 10px;
`;
