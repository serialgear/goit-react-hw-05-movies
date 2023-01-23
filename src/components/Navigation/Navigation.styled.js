import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin-left: 30px;
  margin-bottom: 20px;
  position: sticky;
  z-index: 1200;
  top: 0;
  left: 0;
  background-image: linear-gradient(45deg, #fff, #cfcccc);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

export const Link = styled(NavLink)`
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
