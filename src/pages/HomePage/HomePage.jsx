import { useEffect, useState } from "react";

import { fetchTrends } from "../../service/api";

import { Audio } from "react-loader-spinner";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchTrends();
        setMovies(res.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="black"
          ariaLabel="loading"
        />
      )}
      {error && <p>Something wrong...</p>}

      <MovieList movies={movies}>Tredings movies :</MovieList>
    </>
  );
};

export default HomePage;
