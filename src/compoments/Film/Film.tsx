import axios from "axios";
import { useEffect, useState } from "react";

interface ICinema {
  backdrop_path: string;
}

const Film = () => {
  const [filmBg, setFilmBg] = useState<ICinema[]>([]);

  const API_KEY = import.meta.env.VITE_API;

  const getFilms = (key: ICinema[]) => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
        )
        .then((res) => {
          res.data.results.map((item) =>
            setFilmBg((arr) => [...arr, item.backdrop_path])
          );
        });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getFilms(API_KEY);
  }, []);
  console.log(filmBg);

  return (
    <div
      id="hero"
      style={{
        background: `linear-gradient(to bottom right, rgba(182, 154, 154, 0.195), rgba(135, 116, 116, 0.395)), url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${
          filmBg[Math.round(Math.random() * filmBg.length)]
        }
        ) no-repeat center/cover`,
        minHeight: "100vh",
      }}
    ></div>
  );
};

export default Film;

