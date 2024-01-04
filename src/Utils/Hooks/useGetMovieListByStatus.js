import useLikedMovies from "./useLikedMovies";
import useWatchLaterMovies from "./useWatchLaterMovies";

const useGetMovieListByStatus = (status) => {
  let movies = [];
  const likedMovies = useLikedMovies();
  const watchLaterMovies = useWatchLaterMovies();

  switch (status) {
    case "liked":
      movies = likedMovies;
      break;
    case "watchlater":
      movies = watchLaterMovies;
      break;
    default:
  }

  return movies;
};

export default useGetMovieListByStatus;
