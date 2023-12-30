import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../thunks";

const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.topRated);

  useEffect(() => {
    if (!movies.length) dispatch(fetchTopRatedMovies());
  }, []);

  const result = movies?.length ? movies : null;

  return result;
};

export default useGetTopRatedMovies;
