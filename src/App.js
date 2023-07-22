// src/App.js
import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
   // eslint-disable-next-line
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description of Movie 1',
      posterURL: 'https://www.youtube.com/watch?v=7GqFWaC6C68',
      rating: 8.5,
    },
    {
      title: 'Movie 2',
      description: 'Description of Movie 2',
      posterURL: 'https://example.com/poster2.jpg',
      rating: 7.9,
    },
    // Add more movies here
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: NaN,
  });

  const handleFilterChange = (field, value) => {
    setFilter((prevFilter) => ({ ...prevFilter, [field]: value }));
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch =
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) || !filter.title;
    const ratingMatch = isNaN(filter.rating) || movie.rating >= filter.rating;

    return titleMatch && ratingMatch;
  });

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
