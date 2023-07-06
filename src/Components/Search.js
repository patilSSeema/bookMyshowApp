import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import styled from "styled-components";
import DisplayMovies from "./DisplayMovies";
import "./DisplayMovies.css";

const API_KEY = "7f46651666f1ca68e4cf0cb150551f07";

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  // color: white;
  padding: 10px 10px;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 10px;
  width: 80%;
  align-items: center;
  // cursor: pointer;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin-left: 15px;
`;

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search?api_key=${API_KEY}&query=${searchText}`
      );
      setContent(data.results);

      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <div>
      <SearchBox>
        <SearchInput
          placeholder="Search Movie"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </SearchBox>
      <Button variant="contained" onClick={fetchSearch}>
        Search
      </Button>

      <div className="media">
        {content &&
          content.map((c) => (
            <DisplayMovies
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
