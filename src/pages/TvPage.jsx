import React from 'react';
import axios from 'axios';
import Actors from '../components/Actors';
import { useParams } from 'react-router-dom';
import Trailer from '../components/Trailer';

const TvPage = () => {
  const [data, setData] = React.useState([]);
  const [video, setVideo] = React.useState([]);
  const [actors, setActors] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk`
      )
      .then(({ data }) => setData(data));

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=ru`
      )
      .then(({ data }) => setVideo(data));

    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk`
      )
      .then(({ data }) => setActors(data.cast));
  }, [id]);

  return (
    <div className="movie_wrapper">
      <div className="movie_header">
        <div className="movie_header__poster">
          <img
            className="movie_header__poster-img"
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                : ''
            }
            alt="poster_img"
          />
        </div>
        <div className="movie_header__info">
          <div className="movie_header__info-title">{data.name}</div>
          <div className="movie_header__info-categories">
            <span className="movie_header__info-subtitle">Категорія:</span>{' '}
            {data.genres &&
              data.genres.map((arr, index) => {
                return (
                  <span
                    key={`${arr.name}_${index}`}
                    className="movie_header__info-categories-type"
                  >
                    {arr.name + ',  '}
                  </span>
                );
              })}
          </div>
          <div className="movie_header__info-date">
            <span className="movie_header__info-subtitle">Дата виходу:</span>{' '}
            {data.first_air_date}
          </div>

          <div className="movie_header__info-seasons">
            <span className="movie_header__info-subtitle">
              Кількість сезонів:
            </span>{' '}
            {data.number_of_seasons}
          </div>
          <div className="movie_header__info-episodes">
            <span className="movie_header__info-subtitle">
              Кількість епізодів:
            </span>{' '}
            {data.number_of_episodes}
          </div>
          <div className="movie_header__info-vote">
            <span className="movie_header__info-subtitle">Рейтинг:</span>{' '}
            {data.vote_average}/10
          </div>
          <div className="movie_header__info-runtime">
            <span className="movie_header__info-subtitle">
              Час кожного з епізодів:
            </span>{' '}
            {data.episode_run_time &&
              data.episode_run_time.map((data) => data + 'хв, ')}
          </div>
          <div className="movie_header__info-overview">{data.overview}</div>
        </div>
      </div>

      {video.results &&
        video.results.map((data, index) => {
          return data.type === 'Trailer' ? (
            <Trailer key={`${data.name}_${index}`} data={data} />
          ) : (
            ''
          );
        })}

      <div className="movie_actors-title">Список акторів:</div>
      <div className="movie_actors">
        {actors &&
          actors.map((data, index) => {
            return index <= 7 ? <Actors key={data.id} data={data} /> : '';
          })}
      </div>
    </div>
  );
};

export default TvPage;
