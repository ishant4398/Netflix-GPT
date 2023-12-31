import useGetMovieInfo from "../../Utils/Hooks/useGetMovieInfo";
import MoviePoster from "./MoviePoster";
import MovieDetail from "./MovieDetail";

const MovieInfo = () => {
  const movie = useGetMovieInfo();

  if (!movie) return;

  return (
    <div className="bg-black">
      <MovieDetail />
      <MoviePoster />
    </div>
  );
};

export default MovieInfo;
