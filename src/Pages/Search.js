import React from "react";
import SearchBar from "../Components/SearchBar";
import MovieList from "../Components/MovieList";
import Button from "../Components/Button";
import Logo from "../Assets/images/pamono-logo.svg";
import getMovieList from "../getMovieList";

import "../Styles/Pages/search.scss";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [error, setError] = React.useState({ status: false, message: "" });

  const movieRequest = (event) => {
    event.preventDefault();

    if (searchValue.length > 0) {
      const baseURL = `https://www.omdbapi.com/?s=${searchValue}&apikey=74aa479`;

      getMovieList(baseURL, setMovies, setError);
    } else {
      setError({
        status: true,
        message: "Please insert a movie title",
      });
    }
  };

  return (
    <div id="searchPage">
      <div className="info-container">
        <img src={Logo} alt="Pamono Logo" />
        <h1>Movie Search</h1>
        <p>Use the search below to find a movie</p>

        <form onSubmit={movieRequest}>
          <SearchBar setSearchValue={setSearchValue} />
          <Button type="submit">
            <i className="fas fa-search"></i>
          </Button>
        </form>
        {error.status === true && (
          <p className="error-message">
            <i className="fas fa-exclamation-triangle"></i>
            {error.message}
          </p>
        )}
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
