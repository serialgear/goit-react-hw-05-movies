import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  color: #a16103;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const SectionTitle = styled.h3`
  color: #7b3f00;
`;

export const AddTitle = styled.h2`
  color: #a16103;
`;
export const MovieBox = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0 0 10px #0a04573b;
`;

export const AddBox = styled.section`
  box-shadow: 0 0 10px #0a04573b;
  padding: 10px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;
export const Data = styled.div`
  display: block;
  padding: 15px;
  margin-left: 20px;
  color: #090c4f;
`;

export const AddLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #3f51b5;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 8px 1px #f2c0a88f;
  &.active {
    color: #a16103;
    box-shadow: 0 0 10px 2px #a16103;
  }
`;

export const AddList = styled.ul`
  list-style: none;
  display: flex;
`;
