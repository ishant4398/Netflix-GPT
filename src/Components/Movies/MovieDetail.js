import { useSelector } from "react-redux";
import MovieDescription from "./MovieDescription";
import ReleasedDate from "./MovieDetail/ReleasedDate";
import AudioLanguages from "./MovieDetail/AudioLanguages";
import Genre from "./MovieDetail/Genre";
import ProductionCountries from "./MovieDetail/ProductionCountries";
import ProductionCompanies from "./MovieDetail/ProductionCompanies";
import Adult from "./MovieDetail/Adult";
import Duration from "./MovieDetail/Duration";
import languageTranslations from "../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const MovieDetail = () => {
  const movieDetails = useSelector((store) => store.movies?.movieDetails);
  const currentLang = useGetCurrentLanguage();

  if (!movieDetails) return;

  const {
    id,
    original_title,
    overview,
    genres,
    spoken_languages,
    runtime,
    adult,
    release_date,
    production_companies,
    production_countries,
  } = movieDetails;

  return (
    <div>
      <MovieDescription id={id} title={original_title} overview={overview} />
      <div className="w-screen aspect-video absolute z-10 px-12 mt-[500px]">
        <Genre genres={genres} />
        <div className="mt-[65px] mb-6 [&>div]:my-8">
          <p className="text-white text-xl font-bold">
            {languageTranslations[currentLang].moreInfoHeading}
          </p>
          <div>
            <AudioLanguages languages={spoken_languages} />
          </div>
          <div>
            <Duration duration={runtime} />
          </div>
          <div>
            <Adult adult={adult} />
          </div>
          <div>
            <ReleasedDate release_date={release_date} />
          </div>
          <div>
            <ProductionCountries production_countries={production_countries} />
          </div>
          <div>
            <ProductionCompanies production_companies={production_companies} />
          </div>
        </div>
      </div>
      <div className="w-screen aspect-video absolute mt-[500px] bg-black"></div>
    </div>
  );
};

export default MovieDetail;
