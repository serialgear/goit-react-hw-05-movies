import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #f2c0a88f;
  transition: transform var(--animation-duration) var(--timing-function);
  &:hover {
    box-shadow: 0 0 13px 3px #a16103;
    transform: scale(1.03);
  }
`;

export const Title = styled.p`
  display: flex;
  padding: 5px;
  color: #3f51b5;
`;
