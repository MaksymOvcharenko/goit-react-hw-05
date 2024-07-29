import { useEffect } from "react";
import { useState } from "react";
import { fetchSearch } from "../../service/api";
import { useLocation, useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { Audio } from "react-loader-spinner";
import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFalse, setIsFalse] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  const movie = searchParams.get("query");
  useEffect(() => {
    if (!movie) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsFalse(false);
        setLoading(true);
        setError(null);
        const res = await fetchSearch(movie);

        setMovies(res.data.results);
        if (res.data.results.length < 1) {
          setIsFalse(true);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movie]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const { query } = form.elements;

    setSearchParams({ query: query.value.toLowerCase() });
  };

  return (
    <>
      <div className={s.search}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>
      </div>
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
      <div className={s.cont}>
        {isFalse && <h3>Do not found movies, Please Try again!</h3>}
        {movies.length > 0 && <h2>We find {movies.length} movies</h2>}
        <MovieList movies={movies} state={location}></MovieList>
      </div>
    </>
  );
};

export default MoviesPage;
