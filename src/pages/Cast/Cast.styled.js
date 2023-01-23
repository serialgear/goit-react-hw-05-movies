import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 10px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Name = styled.h3`
  color: #7b3f00;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Label = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #090c4f;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ImgBox = styled.div`
  width: 160px;
  height: 230px;
  margin-bottom: 10px;
`;

export const Photo = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
