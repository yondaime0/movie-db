import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import Actors from '../components/Actors';

const MoviePage = () => {
  const [data, setData] = React.useState([]);
  const [actors, setActors] = React.useState([]);
  const [video, setVideo] = React.useState([]);
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
          <div className="movie_header__info-title-block">
            <h1 className="movie_header__info-title">{data.title}</h1>
          </div>
          <div className="movie_header__info-tagline">{data.tagline}</div>
          <div className="movie_header__info-categories">
            Категорія:{' '}
            {data.genres &&
              data.genres.map((arr) => {
                return (
                  <span className="movie_header__info-categories-type">
                    {arr.name + ',  '}
                  </span>
                );
              })}
          </div>
          <div className="movie_header__info-date">
            Дата виходу: {data.release_date}
          </div>
          <div className="movie_header__info-budget">
            Бюджет: {data.budget === 0 ? 'невідомо' : data.budget + '$'}
          </div>
          <div className="movie_header__info-revenue">
            Зібрав: {data.revenue === 0 ? 'невідомо' : data.revenue + '$'}
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
          return data.type === 'Trailer' ? (
            <div className="trailer">
              <div className="trailer-name">{data.name}</div>
              <iframe
                className="trailer-video"
                src={`https://www.youtube.com/embed/${data.key}`}
                srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}
    html,body{height:100%}
    img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
    </style>
    <a href=https://www.youtube.com/embed/${data.key}?autoplay=1>
    <img src=https://img.youtube.com/vi/${data.key}/hqdefault.jpg alt='Demo video'>
    <span>▶</span>
    </a>`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              ></iframe>
            </div>
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

export default MoviePage;
