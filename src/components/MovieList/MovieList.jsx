import { Link } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ movies, children, state }) => {
  return (
    <>
      <div className={s.cont}>
        <h1>{children}</h1>
        <ul>
          {movies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                height={120}
              />
              <Link to={`/movies/${id}`} state={state}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
