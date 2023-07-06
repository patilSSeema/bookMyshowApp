import React, { useEffect } from "react";
import axios from "axios";
import "./DisplayMovies.css";
import { Chip } from "@mui/material";
const API_KEY = "7f46651666f1ca68e4cf0cb150551f07";
const Genre = ({
  selectedGenres,
  genres,
  setGenres,
  setSelectedGenres,
  type,
}) => {
  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    console.log(data);
    setGenres(data.genres);
  };
  console.log(genres);
  useEffect(() => {
    fetchGenre();

    //mounting and unmounting components
    return () => {
      setGenres({});
    };
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
  };
  return (
    <div className="ChipStyle" style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="large"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genre;
