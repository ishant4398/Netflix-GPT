import useGetTrailer from "../../Utils/Hooks/useGetTrailer";

const PlayingTrailer = ({ movieId }) => {
  const trailer = useGetTrailer(movieId);

  if (!trailer) return;

  const { key } = trailer;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video absolute"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default PlayingTrailer;
