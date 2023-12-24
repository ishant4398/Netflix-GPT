export const PROFILE_PIC_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg";

export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUzMDhhYzBhNDFhMDYzODJhNDJkOWNhNTQyNTIyNSIsInN1YiI6IjY1Njk5ZmNhYjdkMzUyMDBhZDU2ZTU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.214YXqCqolgOMZLcLRisPETvzYiQ3g3uXuD-PQoTq98";

export const API_OPTIONS_GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
};

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

export const TMDB_MOVIE_URL = "https://api.themoviedb.org/3/movie/";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const OPEN_AI_KEY =
  "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";
