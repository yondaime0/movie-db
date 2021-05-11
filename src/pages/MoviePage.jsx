import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import Actors from "../components/Actors";
import Trailer from "../components/Trailer";
import Skeleton from "react-loading-skeleton";

const MoviePage = () => {
  const [data, setData] = React.useState([]);
  const [actors, setActors] = React.useState([]);
  const [video, setVideo] = React.useState([]);
  const [posterIsLoaded, setPosterIsLoaded] = React.useState(false);

  const [actorsIsLoaded, setActorsIsloaded] = React.useState(false);

  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk`
      )
      .then(({ data }) => {
        setData(data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=ru`
      )
      .then(({ data }) => setVideo(data));

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk`
      )
      .then(({ data }) => {
        setActors(data.cast);
        setActorsIsloaded(true);
      });
  }, [id]);

  return (
    <div className="movie_wrapper">
      <div className="movie_header">
        <div className="movie_header__poster">
          <img
            className={`movie_header__poster-img ${
              !posterIsLoaded ? "hidden" : ""
            }`}
            src={
              data.poster_path &&
              `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            }
            onLoad={() => {
              setPosterIsLoaded(true);
            }}
            alt="poster_img"
          />
          <Skeleton
            className={`movie_header__poster-img ${
              posterIsLoaded ? "hidden" : ""
            }`}
            width={260}
            height={390}
          />
        </div>
        <div className="movie_header__info">
          <div className="movie_header__info-title-block">
            <h1 className="movie_header__info-title">{data.title}</h1>
          </div>
          <div className="movie_header__info-tagline">{data.tagline}</div>
          <div className="movie_header__info-categories">
            Категорія:{" "}
            {data.genres &&
              data.genres.map((arr, index) => {
                return (
                  <span
                    key={`${arr.name}_${index}`}
                    className="movie_header__info-categories-type"
                  >
                    {arr.name + ",  "}
                  </span>
                );
              })}
          </div>
          <div className="movie_header__info-date">
            Дата виходу: {data.release_date}
          </div>
          <div className="movie_header__info-budget">
            Бюджет: {data.budget === 0 ? "невідомо" : data.budget + "$"}
          </div>
          <div className="movie_header__info-revenue">
            Зібрав: {data.revenue === 0 ? "невідомо" : data.revenue + "$"}
          </div>
          <div className="movie_header__info-vote">
            Рейтинг: {data.vote_average}/10
          </div>
          <div className="movie_header__info-runtime">
            Час: {data.runtime}хв.
          </div>
          <div className="movie_header__info-overview">{data.overview}</div>
        </div>
      </div>

      {video.results &&
        video.results.map((data, index) => {
          return data.type === "Trailer" ? (
            <Trailer key={`${data.name}_${index}`} data={data} />
          ) : (
            ""
          );
        })}

      <div className="movie_actors-title">Список акторів:</div>
      <div className="movie_actors">
        {actorsIsLoaded
          ? actors &&
            actors.map((data, index) => {
              return index <= 7 ? (
                <Actors key={`${data.id}_${index}`} data={data} />
              ) : (
                ""
              );
            })
          : Array(8)
              .fill(0)
              .map((_, index) => (
                <Actors key={`${_}_${index}`} data={{ profile_path: false }} />
              ))}
      </div>
    </div>
  );
};

export default MoviePage;
