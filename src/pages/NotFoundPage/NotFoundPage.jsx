import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.cont}>
      <h3>Sorry, this page is not found</h3>
      <br />
      <br />
      <Link to="/">
        <h4>Go home</h4>
      </Link>
    </div>
  );
};

export default NotFoundPage;
