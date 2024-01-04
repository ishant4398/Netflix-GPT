import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addLikedMovies,
  removeLikedMovies,
} from "../../Utils/Slices/movieSlice";
import Not_Liked_Image from "../../Assets/thumb-up.svg";
import Liked_Image from "../../Assets/thumb-up-filled.svg";
import languageTranslations from "../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";
import useLikedMovies from "../../Utils/Hooks/useLikedMovies";
import useGetCurrentUser from "../../Utils/Hooks/useGetCurrentUser";

const LikeButton = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likedMovies = useLikedMovies();
  const currentLang = useGetCurrentLanguage();
  const user = useGetCurrentUser();
  const dispatch = useDispatch();

  const { id } = movie;

  useEffect(() => {
    const checkIsLiked = likedMovies.some(
      (currentMovie) => currentMovie.id === id
    );

    setIsLiked(checkIsLiked);

    const userId = user?.uid;
    if (userId) {
      localStorage.setItem(
        `likedMovies_${userId}`,
        JSON.stringify(likedMovies)
      );
    }
  }, [likedMovies]);

  const addToLikedMovies = (e) => {
    e.stopPropagation();
    dispatch(addLikedMovies(movie));
  };

  const removedFromLikedMovies = (e) => {
    e.stopPropagation();
    dispatch(removeLikedMovies(id));
  };

  return (
    <div className="flex rounded-[20px] bg-gray-500 w-10 h-10 ml-[52px] mt-1">
      <img
        className="w-8 h-8 mx-auto my-auto pb-1"
        src={isLiked ? Liked_Image : Not_Liked_Image}
        alt={
          isLiked
            ? languageTranslations[currentLang]?.likedImageAltText
            : languageTranslations[currentLang]?.notLikedImageAltText
        }
        onClick={isLiked ? removedFromLikedMovies : addToLikedMovies}
        title={languageTranslations[currentLang]?.likeImageTitle}
      />
    </div>
  );
};

export default LikeButton;
