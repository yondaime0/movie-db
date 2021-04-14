import React from 'react';

const Actors = ({ data }) => {
  return (
    <div className="actor-block">
      <div className="actor-block-profile">
        <img
          src={
            data.profile_path
              ? `https://image.tmdb.org/t/p/original${data.profile_path}`
              : 'https://via.placeholder.com/130x200'
          }
          alt="profile"
        />
      </div>
      <div className="actor-block-name">{data.name}</div>
      <div className="actor-block-character">{data.character}</div>
    </div>
  );
};

export default Actors;
