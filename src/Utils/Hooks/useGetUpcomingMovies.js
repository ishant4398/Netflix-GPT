import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../thunks";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.upcoming);

  useEffect(() => {
    if (!movies.length) dispatch(fetchUpcomingMovies());
  }, []);

  const result = movies?.length ? movies : null;

  return result;
};

export default useGetUpcomingMovies;
