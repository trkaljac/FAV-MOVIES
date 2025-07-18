const API_KEY = "9e7bea50f19118d92594c97a2c3103ac";
const API_URL = "https://api.themoviedb.org/3" // Base URL for the API;

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);  
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)} `);  
  const data = await response.json();
  return data.results;
};