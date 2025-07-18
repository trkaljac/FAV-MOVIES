import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  

  return (
    <>
      <MovieCard movie={{
        title: "Inception",
        year: "2010",
        poster: "https://example.com/inception.jpg"
      }} />
            <MovieCard movie={{
        title: "Interstellar",
        year: "2014",
        poster: "https://example.com/interstellar.jpg"
      }} />
    </>
  )
}

export default App
