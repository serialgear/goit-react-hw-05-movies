import { useState, useEffect } from 'react';
import { getTrending } from 'services/moviesAPI';
import { Outlet } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { Title } from './Home.styled';
import Loader from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then(data => {
        data.map(movie => setMovies(movies => [...movies, movie]));
      })
      .catch(error => setError({ error }))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      {error && toast.error(`Something went wrong! ${error.message}`)}
      <Title>Trending today</Title>
      {<MovieList movies={movies} />}
      {isLoading && <Loader />}
      <Outlet />
      <ToastContainer autoClose={3000} />
    </main>
  );
};
export default Home;
