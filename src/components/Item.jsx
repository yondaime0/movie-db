import React from "react";
import Skeleton from "react-loading-skeleton";

const Item = ({ data }) => {
  const [posterIsLoaded, setPosterIsLoaded] = React.useState(false);

  return (
    <div className="item">
      <img
        className={`poster-img ${!posterIsLoaded ? "hidden" : ""}`}
        src={
          data.poster_path &&
          `https://image.tmdb.org/t/p/w500${data.poster_path}`
        }
        onLoad={() => setPosterIsLoaded(true)}
        alt="poster_img"
      />
      <Skeleton className={`poster-img ${posterIsLoaded ? "hidden" : ""}`} />
      <div className="item-text">
        <div className="item-text-title">
          <div className="title">{data.title || data.name}</div>
          <div className="date">{data.release_date || data.first_air_date}</div>
        </div>
        <div className="item-text-vote">{data.vote_average}</div>
      </div>
    </div>
  );
};

export default Item;
