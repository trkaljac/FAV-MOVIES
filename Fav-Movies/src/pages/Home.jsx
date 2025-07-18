import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {id: 1, title: "Inception", year: "2010", poster: "https://example.com/inception.jpg" },
    {id: 2, title: "Interstellar", year: "2014", poster: "https://example.com/interstellar.jpg" },
    {id: 3, title: "The Dark Knight", year: "2008", poster: "https://example.com/darkknight.jpg"  },
    {id: 4, title: "The Matrix", year: "1999", poster: "https://example.com/matrix.jpg"  }
  ]; 
  
const handleSearch = (e) => {
    e.preventDefault();  
    alert(searchQuery);  
  
  };
  return (
  <div className="home">
    <form className="search-form" onSubmit={handleSearch}> 
     
      <input value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} type="text" placeholder="Search for movies..." />
      <button type="submit" className="search-button">Search</button>
  
    </form>

      <div className="movie-grid">
        {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
      </div>
    </div>
  )
}

export default Home;