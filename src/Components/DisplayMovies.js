import React from "react";
import "./DisplayMovies.css";
const img_300 = "https://image.tmdb.org/t/p/w200";
const DisplayMovies = ({
  id,
  title,
  poster,
  original_language,
  vote_average,
}) => {
  return (
    <div className="media">
      <img className="poster" src={`${img_300}/${poster}`} alt={title} />
      <b className="title">{title}</b>
      <p className="subtitle">
        <span>{original_language}</span>
        <span>{vote_average}</span>
      </p>
    </div>
  );
};

export default DisplayMovies;
