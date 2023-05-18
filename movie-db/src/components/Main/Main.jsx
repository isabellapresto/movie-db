import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Routes, Route } from 'react-router-dom';


function Main() {
  return (
    <div>
    <Routes>
      <Route path = '/' element = {<MovieList />} />
      <Route path = ':id' element = {<MovieDetails />} />
      <Route path = 'about' element = {<About />} />
      <Route path = 'contact' element = {<Contact />} />
    </Routes>
    </div>
  );
}

export default Main;