import { NavLink } from "react-router-dom";
import s from "./GoBackBtn.module.css";

const GoBackBtn = ({ path, children }) => {
  return (
    <NavLink className={s.link} to={path}>
      {children}
    </NavLink>
  );
};
export default GoBackBtn;
