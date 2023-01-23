import axios from 'axios';
import defaultImg from '../images/defaultImg.png';
import noFilm from '../images/noFilm.jpg';
const API_KEY = '9a3eb7a069130cbd83fc81cc8deda116';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p';

const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const data = [];

  response.data.results.map(item => {
    const photo = item.poster_path ? getImageUrl(item.poster_path) : noFilm;
    return data.push({
      title: item.title,
      id: item.id,
      photo: photo,
    });
  });
  return data;
};

const getSearch = async query => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query: query,
  });
  const response = await axios.get(`${BASE_URL}/search/movie?${params}`);
  const data = [];

  response.data.results.map(item => {
    const photo = item.poster_path ? getImageUrl(item.poster_path) : noFilm;
    return data.push({
      title: item.title,
      id: item.id,
      photo: photo,
    });
  });

  return data;
};

const getImageUrl = path => {
  return `${IMAGES_BASE_URL}/w500/${path}`;
};

const getMovie = async id => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  const response = await axios.get(`${BASE_URL}/movie/${id}?${params}`);
  const data = response.data;
  return {
    id: data.id,
    title: data.title,
    image: getImageUrl(data.poster_path),
    year: new Date(data.release_date).getFullYear(),
    genres: data.genres.map(genre => genre.name).join(', '),
    vote: data.vote_average,
    votes: data.vote_count,
    popularity: data.popularity,
    originalTitle: data.original_title,
    about: data.overview,
  };
};

const getCastInfo = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const cast = [];

  response.data.cast.map(item => {
    const photo = item.profile_path
      ? getImageUrl(item.profile_path)
      : defaultImg;
    return cast.push({
      name: item.name,
      character: item.character,
      id: item.id,
      photo: photo,
    });
  });
  return cast;
};

const getReviewsInfo = async movieId => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return res.data.results;
};
export { getTrending, getSearch, getMovie, getCastInfo, getReviewsInfo };
