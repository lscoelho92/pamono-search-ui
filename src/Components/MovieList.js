import MovieCard from "./MovieCard";

import "../Styles/Components/movieList.scss";

function MovieList({ movies, error }) {
  return (
    <section className="result-container">
      {movies && movies.length > 0 && (
        <div className="movie-list">
          <p>Found Movies:</p>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
      {error && (
        <div className="error-container">
          <p>
            Unfortunately we cannot find the desired title. Try to be more
            specific or try another movie
          </p>
        </div>
      )}
    </section>
  );
}

export default MovieList;
