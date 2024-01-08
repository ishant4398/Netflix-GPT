export const convertDateFormat = (inputDateStr) => {
  const date = new Date(inputDateStr);

  // Extract day, month, and year
  const day = date.getDate();
  const monthIndex = date.getMonth(); // This will give the month index (0 = January, 1 = February, ...)
  const year = date.getFullYear();

  // Array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the date
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;
  return formattedDate;
};

export const formatRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours}h ${remainingMinutes}m`;
  } else {
    return `${remainingMinutes}m`;
  }
};

export const checkForUnwantedTerms = (searchResults) => {
  const unwantedTerms = ["sorry", "apologies", "apologize", "unfortunately"];
  const words = searchResults?.join("").toLowerCase().split(" ");

  const hasUnwantedTerms = unwantedTerms.some((word) =>
    words.includes(word.toLowerCase())
  );
  return hasUnwantedTerms;
};

// export const getUniqueMovies = (allMovies, newMovies) => {
//   newMovies.forEach((newMovie) => {
//     const isMovieAlreadyExists = allMovies.some(
//       (movie) => movie.id === newMovie.id
//     );

//     if (!isMovieAlreadyExists) {
//       allMovies = [...allMovies, newMovie];
//     }
//   });
//   return allMovies;
// };

// export const getLocalZoneTime = (timestamp = null) => {
//   if (!timestamp) return null;

//   const ISToffsetMinutes = 330; // IST is UTC+5:30, so 5 hours 30 minutes = 5 * 60 + 30 = 330 minutes
//   const date = new Date(timestamp + ISToffsetMinutes * 60 * 1000); // Adding the offset directly and converting it into miliseconds for timestamp

//   return date.toString();
// };
