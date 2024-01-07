export const PROFILE_PIC_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg";

export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_MOVIE_URL = "https://api.themoviedb.org/3/movie/";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const IMG_USER_ICON_URL =
  "https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png";

export const LANGUAGES = [
  {
    key: "en",
    name: "English",
  },
  {
    key: "hindi",
    name: "Hindi",
  },
  {
    key: "spanish",
    name: "Spanish",
  },
];

export const MOVIE_LANGUAGES = {
  en: "English",
  hi: "Hindi",
  kn: "Kannad",
  te: "Telugu",
  gu: "Gujrati",
  ta: "Tamil",
  bn: "Bangla",
  pa: "Punjabi",
  or: "Oriya",
  th: "Thai",
};

export const ACTIVITY_BUTTONS = [
  {
    id: 1,
    value: "liked",
    name: "Liked",
  },
  {
    id: 2,
    value: "watchlater",
    name: "Watch Later",
  },
];

export const API_OPTIONS_GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_ACCESS_TOKEN,
  },
};

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
export const OPEN_AI_GPT_MODEL = "gpt-3.5-turbo";

export const WEBSITE_OWNER_EMAIL = "ishantkushwaha98@gmail.com";
