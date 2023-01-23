import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from '../../services/moviesAPI';
import { List, Item, Name, ImgBox, Photo, Label } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastInfo(movieId).then(setCast);
  }, [movieId]);

  return (
    <List>
      {cast.map(({ id, photo, name, character }) => {
        // console.log(actor);

        return (
          <Item key={id}>
            <ImgBox>
              <Photo src={photo} alt={name} width="100%" />
            </ImgBox>

            <Name>{name}</Name>
            <Label>Character: {character}</Label>
          </Item>
        );
      })}
    </List>
  );
};
export default Cast;
