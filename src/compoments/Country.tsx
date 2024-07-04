import axios from "axios";
import scss from "./Country.module.scss";
import { useEffect, useState } from "react";
import { Types } from "./Types";
import { FaMapMarkerAlt } from "react-icons/fa";

const Country = () => {
  const [worldAll, setWorldAll] = useState<Types[]>([]);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const getWorld = async () => {
    try {
      const { data } = await axios.get<Types[]>(BACKEND_URL);
      console.log(data);
      setWorldAll(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getWorld();
  }, []);

  return (
    <div className={scss.country}>
      <div className="container">
        <div className={scss.block}>
          {worldAll.map((item, idx) => (
            <div key={idx} className={scss.count}>
              <img src={item.flags.png} alt="img" />
              <h1>{item.name.common}</h1>
              <div className={scss.region}>
                <h4>{item.region}</h4>
                <a>
                  <FaMapMarkerAlt />
                </a>
              </div>
              <h4>
                {item.area} KB <sup>2</sup>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
