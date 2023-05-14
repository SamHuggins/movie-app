import { useState, useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import MovieList from './components/MovieList';


function App() {
  return (
    <>
      <div>
        <Home />
        <MovieList />
      </div>
    </>
  );
}

export default App;
