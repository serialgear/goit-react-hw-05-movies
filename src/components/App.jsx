import { useCallback, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Loader/Loader';
import Navigation from '../components/Navigation/Navigation';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('../pages/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews.jsx'));

export const App = () => {
  const handleNavigateToHome = useCallback(() => {
    return <Navigate to="/" />;
  }, []);

  const LazyLoadedHome = useMemo(() => <Home />, []);
  const LazyLoadedMovies = useMemo(() => <Movies />, []);
  const LazyLoadedMovieDetails = useMemo(() => <MovieDetails />, []);
  const LazyLoadedCast = useMemo(() => <Cast />, []);
  const LazyLoadedReviews = useMemo(() => <Reviews />, []);

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={LazyLoadedHome} />
          <Route path="/movies" element={LazyLoadedMovies} />
          <Route path="/movies/:movieId" element={LazyLoadedMovieDetails}>
            <Route path="cast" element={LazyLoadedCast} />
            <Route path="reviews" element={LazyLoadedReviews} />
          </Route>
          <Route path="*" element={handleNavigateToHome}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
