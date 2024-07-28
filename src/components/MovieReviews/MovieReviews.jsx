import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../service/api";
import { Audio } from "react-loader-spinner";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchReviews(movieID);
        setReviews(res.data.results);
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
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <h3>Author: {author}</h3>

            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;
