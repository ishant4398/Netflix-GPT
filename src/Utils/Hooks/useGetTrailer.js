import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailer } from "../thunks";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies?.trailer);

  useEffect(() => {
    if (!trailer) dispatch(fetchTrailer(movieId));
  }, []);

  return trailer;
};

export default useGetTrailer;
