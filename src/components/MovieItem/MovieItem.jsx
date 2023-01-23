import { Link, useLocation } from 'react-router-dom';
import { Card, Title } from './MovieItem.styled';
import PropTypes from 'prop-types';

const MovieItem = ({ movie, state }) => {
  const location = useLocation();

  return (
    <>
      <li>
        <Link
          to={location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`}
          state={{ from: state }}
        >
          <Card>
            <img src={movie.photo} width="100%" alt={movie.title} />
            <Title>{movie.title}</Title>
          </Card>
        </Link>
      </li>
    </>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  state: PropTypes.string,
};
