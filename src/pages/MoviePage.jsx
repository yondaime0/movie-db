import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import Actors from '../components/Actors';

function MoviePage() {
  const [data, setData] = React.useState([]);
  const [actors, setActors] = React.useState([]);
  const [video, setVideo] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk`
      )
      .then(({ data }) => setData(data));

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
            src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
            alt="poster_img"
          />
        </div>
        <div className="movie_header__info">
          <div className="movie_header__info-title">{data.title}</div>
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
            Бюджет: {data.budget}$
          </div>
          <div className="movie_header__info-revenue">
            Зібрав: {data.revenue}$
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
}

export default MoviePage;