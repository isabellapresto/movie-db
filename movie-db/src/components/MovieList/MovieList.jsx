import FilterDropDown from "../FilterDropDown/FilterDropDown";
import MovieCard from "../MovieCard/MovieCard";

function MovieList() {
  return (
    <div>
      <FilterDropDown />
      <MovieCard />
    </div>
  );
}

export default MovieList;

// API-nyckel
// 077207546687be83948995e76c1930a6

//Exempel på API begäran: 
//https://api.themoviedb.org/3/movie/550?api_key=077207546687be83948995e76c1930a6