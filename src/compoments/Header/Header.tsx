import scss from "./Header.module.scss";
import world from "../../assets/img/2560px-World_Airways_Logo.svg.png";
const Header = () => {
  return (
    <div id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <img src={world} width={250} alt="img" />
          <div className={scss.nav}>
            <a>ASIA</a>
            <a>EUROPA</a>
            <a>AMERICA</a>
            <a>OCEANIA</a>
            <a>ANTARTIC</a>
            <a>AFRICA</a>
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
