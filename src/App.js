import './App.css';
import "./App.css"
import Home from './Home';
import Navbar from './Navbar';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './Movie'
import TopRated from './TopRated';
import Upcoming from './Upcoming';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/top-rated' element={<TopRated/>} />
          <Route exact path='/upcoming' element={<Upcoming/>} />
          <Route path='/movie' element={<Movie/>} />
          <Route path='/movie/:id' element={<Movie/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
