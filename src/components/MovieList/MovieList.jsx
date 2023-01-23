import MovieItem from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ movies, state }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} state={state} />
      ))}
    </List>
  );
};
export default MovieList;

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  state: PropTypes.string,
};
