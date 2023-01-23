import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovie } from 'services/moviesAPI';
import { useState, useEffect, Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from '../../components/Loader/Loader';
const MovieDetails = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    getMovie(movieId)
      .then(response => {
        setData(response);
      })
      .catch(error => setError({ error }))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <main>
      <GoBackButton to={backLinkHref}>Go Back</GoBackButton>
      {error && toast.error(`Something went wrong! ${error.message}`)}
      {isLoading && <Loader />}
      <MovieCard data={data} state={backLinkHref} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
    </main>
  );
};
export default MovieDetails;
