export const PROFILE_PIC_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUzMDhhYzBhNDFhMDYzODJhNDJkOWNhNTQyNTIyNSIsInN1YiI6IjY1Njk5ZmNhYjdkMzUyMDBhZDU2ZTU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.214YXqCqolgOMZLcLRisPETvzYiQ3g3uXuD-PQoTq98";

export const API_OPTIONS_GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + ACCESS_TOKEN,
  },
};
