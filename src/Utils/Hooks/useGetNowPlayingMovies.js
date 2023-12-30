import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovies } from "../thunks";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlaying);

  useEffect(() => {
    if (!movies.length) dispatch(fetchNowPlayingMovies());
  }, []);

  const result = movies?.length ? movies : null;

  return result;
};

export default useGetNowPlayingMovies;
