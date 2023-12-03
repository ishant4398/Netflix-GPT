import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../thunks";

const useGetMovie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlaying);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const movie = movies.length ? movies[0] : null;

  return movie;
};

export default useGetMovie;
