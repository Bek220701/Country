import scss from "./Header.module.scss";
import world from "../../assets/img/2560px-World_Airways_Logo.svg.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <img src={world} width={250} alt="img" />
          <div className={scss.nav}>
            <NavLink to={"/"}>FILM</NavLink>
            <NavLink to={"/cinema"}>CINEMA</NavLink>
            <NavLink to={"/world"}>WORLD</NavLink>
          </div>
          <div className={scss.inp}>
            <input type="text" placeholder="search..." />
            <button>Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
