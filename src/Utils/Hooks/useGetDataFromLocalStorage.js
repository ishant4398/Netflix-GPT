import { useLayoutEffect } from "react";
import { updateCurrentLang } from "../Slices/configSlice";
import { useDispatch } from "react-redux";
import useGetCurrentUser from "./useGetCurrentUser";
import {
  updateLikedMovies,
  updateWatchLaterMovies,
} from "../Slices/movieSlice";

const useGetDataFromLocalStorage = () => {
  const user = useGetCurrentUser();
  const dispatch = useDispatch();

  const userId = user?.uid;

  useLayoutEffect(() => {
    if (userId) {
      const currentLang = localStorage.getItem(`currLanguage_${userId}`);

      const likedMovies = JSON.parse(
        localStorage.getItem(`likedMovies_${userId}`)
      );

      const watchLaterMovies = JSON.parse(
        localStorage.getItem(`watchLaterMovies_${userId}`)
      );

      if (currentLang) {
        dispatch(updateCurrentLang(currentLang));
      }

      if (watchLaterMovies?.length) {
        dispatch(updateWatchLaterMovies(watchLaterMovies));
      }

      if (likedMovies?.length) {
        dispatch(updateLikedMovies(likedMovies));
      }
    }
  }, [userId]);
};

export default useGetDataFromLocalStorage;
