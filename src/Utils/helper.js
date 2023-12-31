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
