import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 35px;
  margin-bottom: 20px;
  color: #3f51b5;
  background-color: transparent;
  font-size: 25px;
  font-weight: 500;

  padding: 10px;
  border-radius: 10px;
  border-color: transparent;
  box-shadow: 0 0 8px 1px #f2c0a88f;
  cursor: pointer;
  &:hover {
    color: #a16103;
    box-shadow: 0 0 10px 2px #a16103;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #3f51b5;
`;

export const Label = styled.span`
  margin-left: 10px;
`;
