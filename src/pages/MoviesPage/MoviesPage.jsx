import { useEffect } from "react";
import { useState } from "react";
import { fetchSearch } from "../../service/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { Audio } from "react-loader-spinner";
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
    // setQuery(query.value.toLowerCase());
    setSearchParams({ query: query.value.toLowerCase() });
  };
  console.log(isFalse);

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
          wrapperStyle
          wrapperClass
        />
      )}

      {error && <p>Something wrong...</p>}
      <div className={s.cont}>
        {isFalse && <h3>Do not found movies, Please Try again!</h3>}
        {movies.length > 0 && <h1>We find {movies.length} movies</h1>}
        <ul>
          {movies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                height={120}
              />
              <Link to={`/movies/${id}`} state={location}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoviesPage;
