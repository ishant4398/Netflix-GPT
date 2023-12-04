import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../thunks";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.popular);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const result = movies?.length ? movies : null;

  return result;
};

export default useGetPopularMovies;
