import { useSelector } from "react-redux";

const useLikedMovies = () => {
  const likedMovies = useSelector((store) => store.movies.likedMovies);
  return likedMovies;
};

export default useLikedMovies;
