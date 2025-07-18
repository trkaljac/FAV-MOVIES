import '../css/MovieCard.css';
function MovieCard({ movie }) {
  function handleFavoriteClick() {
    alert("clicked");

  }
    // Logic to handle favorite click

  return <div className="movie-card">
      <div className="movie-poster">
         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavoriteClick}>♡</button>
        </div>
      </div>
      <div className="movie-info ">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
      </div>
    </div>
}

export default MovieCard;