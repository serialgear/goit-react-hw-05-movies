import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import FindMovie from '../../components/FindMovie/FindMovie.jsx';
import { getSearch } from 'services/moviesAPI';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const from = location.pathname + location.search;
  useEffect(() => {
    const query = searchParams.get('query');
    setSearchQuery(query);

    if (!query) {
      return;
    }
    // setQuery(query);
    setIsLoading(true);
    getSearch(query)
      .then(data => {
        if (data.length === 0) {
          return toast.info(
            'Sorry, there are no more movies matching your search query!!!'
          );
        }
        data.map(movie => setSearchedMovies(movies => [...movies, movie]));
      })
      .catch(error => setError({ error }))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleSubmit = query => {
    if (query !== searchQuery) {
      setSearchedMovies([]);
    }
  };
  return (
    <div>
      {error && toast.error(`Something went wrong! ${error.message}`)}

      <Outlet />
      <Searchbar
        setSearchParams={setSearchParams}
        onSubmit={handleSubmit}
        searchQuery={searchQuery}
      />
      {isLoading && <Loader />}
      {searchedMovies <= 0 && !isLoading ? (
        <FindMovie />
      ) : (
        <MovieList movies={searchedMovies} state={from} />
      )}
      <ToastContainer />
    </div>
  );
};

export default Movies;
