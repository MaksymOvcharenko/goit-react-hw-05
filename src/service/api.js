import axios from "axios";
// import ApiKey from "./ApiKey.json";

export const fetchTrends = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTM0NGZjYTZkZGQ0MDkwZDFkNzZhZGEwZGI1ZGNjNCIsIm5iZiI6MTcyMjA3OTUzMC40NTgyMjUsInN1YiI6IjY2YTRkNDQxODFlMDczZDM5MTQ0NzI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FZMxS-LpcFg4PgrInFqjQFqx2O5m-HtiQ4dTaMEVjM";
  const BaseURL =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

export const fetchDetails = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTM0NGZjYTZkZGQ0MDkwZDFkNzZhZGEwZGI1ZGNjNCIsIm5iZiI6MTcyMjA3OTUzMC40NTgyMjUsInN1YiI6IjY2YTRkNDQxODFlMDczZDM5MTQ0NzI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FZMxS-LpcFg4PgrInFqjQFqx2O5m-HtiQ4dTaMEVjM";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

export const fetchCredits = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTM0NGZjYTZkZGQ0MDkwZDFkNzZhZGEwZGI1ZGNjNCIsIm5iZiI6MTcyMjA3OTUzMC40NTgyMjUsInN1YiI6IjY2YTRkNDQxODFlMDczZDM5MTQ0NzI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FZMxS-LpcFg4PgrInFqjQFqx2O5m-HtiQ4dTaMEVjM";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchReviews = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTM0NGZjYTZkZGQ0MDkwZDFkNzZhZGEwZGI1ZGNjNCIsIm5iZiI6MTcyMjA3OTUzMC40NTgyMjUsInN1YiI6IjY2YTRkNDQxODFlMDczZDM5MTQ0NzI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FZMxS-LpcFg4PgrInFqjQFqx2O5m-HtiQ4dTaMEVjM";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US'`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchSearch = async (query) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTM0NGZjYTZkZGQ0MDkwZDFkNzZhZGEwZGI1ZGNjNCIsIm5iZiI6MTcyMjA3OTUzMC40NTgyMjUsInN1YiI6IjY2YTRkNDQxODFlMDczZDM5MTQ0NzI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2FZMxS-LpcFg4PgrInFqjQFqx2O5m-HtiQ4dTaMEVjM";
  const BaseURL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
