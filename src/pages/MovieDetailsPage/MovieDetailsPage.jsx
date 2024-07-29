import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchDetails } from "../../service/api";
import { useEffect, useRef, useState } from "react";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import s from "./MovieDetailsPage.module.css";
import { Audio } from "react-loader-spinner";
import { clsx } from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/movies");
  console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchDetails(movieID);
        setMovie(res.data);
        setGenres(res.data.genres);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieID]);
  const { original_title, overview, vote_average, poster_path } = movie;
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
      <GoBackBtn path={goBack.current}>Back to movies</GoBackBtn>
      <div className={s.cont}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
          height={480}
        />
        <div className={s.info}>
          <h2>{original_title}</h2>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>
          <ul>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <ul>
                {genres.map((e) => (
                  <li key={e.id}>{e.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.btn}>
        <NavLink className={buildLinkClass} to={`/movies/${movieID}/cast`}>
          Cast
        </NavLink>

        <NavLink to={`/movies/${movieID}/reviews`} className={buildLinkClass}>
          Rewiews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
