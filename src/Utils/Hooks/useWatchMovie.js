import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayingMovie } from "../thunks";
import { useParams } from "react-router-dom";

const useWatchMovie = () => {
  const movie = useSelector((store) => store.movies?.playingMovie);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayingMovie(id));
  }, []);

  return movie;
};

export default useWatchMovie;
