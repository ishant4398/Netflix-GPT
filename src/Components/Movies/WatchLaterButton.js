import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addWatchedLaterMovies,
  removeWatchedLaterMovies,
} from "../../Utils/Slices/movieSlice";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";
import languageTranslations from "../../Utils/languageTranslations";
import Not_Watched_Later_Image from "../../Assets/clock-hour-4.svg";
import Watched_Later_Image from "../../Assets/clock-filled.svg";
import useWatchLaterMovies from "../../Utils/Hooks/useWatchLaterMovies";
import useGetCurrentUser from "../../Utils/Hooks/useGetCurrentUser";

const WatchLaterButton = ({ movie }) => {
  const [isWatchedLater, setIsWatchedLater] = useState(false);
  const watchLaterMovies = useWatchLaterMovies();
  const currentLang = useGetCurrentLanguage();
  const user = useGetCurrentUser();
  const dispatch = useDispatch();

  const { id } = movie;

  useEffect(() => {
    const checkIsWatchedLater = watchLaterMovies.some(
      (currentMovie) => currentMovie.id === id
    );

    setIsWatchedLater(checkIsWatchedLater);

    const userId = user?.uid;
    if (userId) {
      localStorage.setItem(
        `watchLaterMovies_${userId}`,
        JSON.stringify(watchLaterMovies)
      );
    }
  }, [watchLaterMovies]);

  const addToWatchLaterMovies = (e) => {
    e.stopPropagation();
    dispatch(addWatchedLaterMovies(movie));
  };

  const removedFromWatchLaterMovies = (e) => {
    e.stopPropagation();
    dispatch(removeWatchedLaterMovies(id));
  };

  return (
    <div className="flex rounded-[20px] bg-gray-500 w-10 h-10 ml-[52px] mt-3">
      <img
        className="w-8 h-8 mx-auto my-auto"
        src={isWatchedLater ? Watched_Later_Image : Not_Watched_Later_Image}
        alt={
          isWatchedLater
            ? languageTranslations[currentLang]?.watchedLaterImageAltText
            : languageTranslations[currentLang]?.notWatchedLaterImageAltText
        }
        onClick={
          isWatchedLater ? removedFromWatchLaterMovies : addToWatchLaterMovies
        }
        title={languageTranslations[currentLang]?.watchedLaterImageAltText}
      />
    </div>
  );
};

export default WatchLaterButton;
