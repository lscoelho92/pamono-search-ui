import "../Styles/Components/movieCard.scss";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt="Movie Poster" />
      <div className="infos-container">
        <h2>{movie.Title}</h2>
        <div>
          <p>Year: {movie.Year}</p>
          <p>Type: {movie.Type}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
