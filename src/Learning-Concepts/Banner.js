import { useEffect, useState } from "react";
import useGetPopularMovies from "../Utils/Hooks/useGetPopularMovies";
import MovieCard from "../Components/Movies/MovieCard";

const Banner = () => {
  const popularMovies = useGetPopularMovies();
  const [activeMovieIndex, setActiveMovieIndex] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      showNextMovie();
    }, 3000);

    return () => {
      clearInterval(timerID);
    };
  }, [activeMovieIndex]);

  const showPreviousMovie = () => {
    setActiveMovieIndex(
      (activeMovieIndex - 1 + popularMovies.length) % popularMovies.length
    );
  };

  const showNextMovie = () => {
    setActiveMovieIndex((activeMovieIndex + 1) % popularMovies.length);
  };

  if (!popularMovies) return;

  return (
    <div className="flex flex-col pt-6 justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold p-3">Banner</h1>
      <div className="flex ml-7">
        <button className="mr-8" onClick={showPreviousMovie}>
          Prev
        </button>
        <MovieCard
          key={popularMovies[activeMovieIndex].id}
          movie={popularMovies[activeMovieIndex]}
        />
        <button className="ml-3" onClick={showNextMovie}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Banner;
