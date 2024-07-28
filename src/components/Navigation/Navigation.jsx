import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <>
      <div className={s.nav}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link}>
          Movies
        </NavLink>
      </div>
    </>
  );
};
