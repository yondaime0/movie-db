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
  const [actorsIsLoaded, setActorsIsLoaded] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0);
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
        setActorsIsLoaded(true);
      });
  }, [id]);

  return (
    <div className="movie-wrapper">
      <div className="movie-header">
        <div className="movie-header-poster">
          <img
            className={`movie-header-poster-img ${
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
            className={`movie-header-poster-img ${
              posterIsLoaded ? "hidden" : ""
            }`}
            width={260}
            height={390}
          />
        </div>
        <div className="movie-header-info">
          <div className="movie-header-info-title-block">
            <h1 className="movie-header-info-title">{data.title}</h1>
          </div>
          <div className="movie-header-info-tagline">{data.tagline}</div>
          <div className="movie-header-info-categories">
            ??????????????????:{" "}
            {data.genres &&
              data.genres.map((arr, index) => {
                return (
                  <span
                    key={`${arr.name}_${index}`}
                    className="movie-header-info-categories-type"
                  >
                    {arr.name + ",  "}
                  </span>
                );
              })}
          </div>
          <div className="movie-header-info-date">
            ???????? ????????????: {data.release_date}
          </div>
          <div className="movie-header-info-budget">
            ????????????: {data.budget === 0 ? "????????????????" : data.budget + "$"}
          </div>
          <div className="movie-header-info-revenue">
            ????????????: {data.revenue === 0 ? "????????????????" : data.revenue + "$"}
          </div>
          <div className="movie-header-info-vote">
            ??????????????: {data.vote_average}/10
          </div>
          <div className="movie-header-info-runtime">
            ??????: {data.runtime}????.
          </div>
          <div className="movie-header-info-overview">{data.overview}</div>
        </div>
      </div>

      {
        <div className="scrollmenu-trailer">
          {video.results &&
            video.results.map((data, index) => {
              return <Trailer key={`${data.name}_${index}`} data={data} />;
            })}
        </div>
      }

      <div className="movie-actors-title">???????????? ??????????????:</div>
      <div className="movie-actors">
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
