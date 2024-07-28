import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchCredits } from "../../service/api";
import { Audio } from "react-loader-spinner";
const MovieCast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const location = useLocation();
  // const goBack = useRef(location?.state ?? "/");
  //   console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchCredits(movieID);
        setCast(res.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieID]);

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
      <ul className={s.cont}>
        {cast.map(({ profile_path, character, original_name, cast_id }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={original_name}
              height={120}
            />
            <h3>{original_name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
