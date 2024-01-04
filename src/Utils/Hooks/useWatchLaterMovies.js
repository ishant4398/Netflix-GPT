import { useSelector } from "react-redux";

const useWatchLaterMovies = () => {
  const watchLaterMovies = useSelector(
    (store) => store.movies.watchLaterMovies
  );
  return watchLaterMovies;
};

export default useWatchLaterMovies;
