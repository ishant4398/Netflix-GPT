import useWatchMovie from "../../Utils/Hooks/useWatchMovie";

const WatchMovie = () => {
  const movie = useWatchMovie();

  if (!movie) return;

  const { key } = movie;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        allowFullScreen
        title="Playing video"
      ></iframe>
    </div>
  );
};

export default WatchMovie;
