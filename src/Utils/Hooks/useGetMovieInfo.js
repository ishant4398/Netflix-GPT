import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../thunks";

const useGetMovieInfo = () => {
  const movieDetails = useSelector((store) => store.movies?.movieDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, []);

  return movieDetails;
};

export default useGetMovieInfo;
