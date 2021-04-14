const Item = ({ data }) => {
  return (
    <div className="item">
      <img
        className="poster-img"
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : 'https://via.placeholder.com/300x300'
        }
        alt="poster_img"
      />
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
