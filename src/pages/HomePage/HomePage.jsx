import { useEffect, useState } from "react";
import s from "./HomePage.module.css";
import { fetchTrends } from "../../service/api";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";

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
          wrapperStyle
          wrapperClass
        />
      )}
      {error && <p>Something wrong...</p>}
      <div className={s.cont}>
        <h1>Tredings movies :</h1>
        <ul>
          {movies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                height={120}
              />
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
