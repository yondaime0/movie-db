import React from "react";

const Trailer = ({ data }) => {
  return (
    <div className="trailer">
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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
      <div className="trailer-name">{data.name}</div>
    </div>
  );
};
export default Trailer;
