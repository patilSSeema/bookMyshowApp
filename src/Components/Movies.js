import axios from "axios";
import React, { useEffect, useState } from "react";
import Genre from "./Genre";
import DisplayMovies from "./DisplayMovies";
import "./DisplayMovies.css";
import useGenre from "./hooks/useGenre";
const API_KEY = "7f46651666f1ca68e4cf0cb150551f07";
const Movies = () => {
  const [contet, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  console.log(genreforURL);
  const fetchMovie = async () => {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreforURL}`
    );
    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchMovie();
  }, [genreforURL]);
  return (
    <div>
      <div className="row">
        <div className="col-md-1">
          <h1>Genre</h1>
          <Genre
            type="movie"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
          />
        </div>
        <div className="col-md-11">
          <h1>Now Playing</h1>
          <div className="movies">
            {contet &&
              contet.map((movie) => (
                <DisplayMovies
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title || movie.name}
                  original_language={movie.original_language}
                  vote_average={movie.vote_average}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
