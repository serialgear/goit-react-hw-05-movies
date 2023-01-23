import PropTypes from 'prop-types';
import { animateScroll as scroll, scrollSpy } from 'react-scroll';
import {
  Title,
  MovieBox,
  Data,
  AddLink,
  SectionTitle,
  AddTitle,
  AddList,
  AddBox,
} from './MovieCard.styled';

const MovieCard = ({ data, state }) => {
  const loadAddInfo = () => {
    scrollSpy.update();
    scroll.scrollTo('700');
  };

  const { title, year, image, vote, about, genres } = data;

  return (
    <>
      {' '}
      <Title>
        {title}({year})
      </Title>
      <MovieBox>
        <img src={image} alt={title} width="320px" />
        <Data>
          <p>User Score: {vote}</p>
          <section>
            <SectionTitle>Overview</SectionTitle>
            <p>{about}</p>
          </section>
          <section>
            <SectionTitle>Genres</SectionTitle>
            <p>{genres}</p>
          </section>
        </Data>
      </MovieBox>
      <AddBox>
        <AddTitle>Additional information</AddTitle>
        <AddList>
          <li>
            <AddLink to="cast" onClick={loadAddInfo} state={{ from: state }}>
              Cast
            </AddLink>
          </li>
          <li>
            <AddLink to="reviews" onClick={loadAddInfo} state={{ from: state }}>
              Reviews
            </AddLink>
          </li>
        </AddList>
      </AddBox>
    </>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.number,
    image: PropTypes.string,
    vote: PropTypes.number,
    about: PropTypes.string,
    genres: PropTypes.string,
  }),
};
