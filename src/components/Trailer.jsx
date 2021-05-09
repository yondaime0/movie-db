import React from 'react';

const Trailer = ({ data }) => {
  return (
    <div className="trailer">
      <div className="trailer-name">{data.name}</div>
      <iframe
        className="trailer-video"
        src={`https://www.youtube.com/embed/${data.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
export default Trailer;
