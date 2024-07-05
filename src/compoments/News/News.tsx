import { useEffect, useState } from "react";
import scss from "./News.module.scss";
import axios from "axios";
interface IFilm {
  title: string;
  overview: string;
  backdrop_path: string;
  popularity: number;
  poster_path: string;
}

const News = () => {
  const [news, setNews] = useState<IFilm[]>([]);

  //   const API_NEWS = import.meta.env.VITE_NEWS_URL;
  const API_KEY = import.meta.env.VITE_API;

  const getNews = async (key: IFilm[]) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
      );
      const { data } = res;
      console.log(data.results);
      setNews(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getNews(API_KEY);
  }, []);

  return (
    <div id={scss.news}>
      <div className="container">
        <div className={scss.news}>
          {news.map((item, idx) => (
            <div key={idx}>
              <h1>{item.title}</h1>
              <h2>{item.popularity}</h2>
              <h5>{item.overview}</h5>
              <img width={300}
                src={`https://image.tmdb.org/t/p/w1280/${item.poster_path} 
`}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
