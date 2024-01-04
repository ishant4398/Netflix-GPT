import React, { useState } from "react";
import ActivityButtons from "./ActivityButtons";
import TabContent from "./TabContent";
import useGetMovieListByStatus from "../../Utils/Hooks/useGetMovieListByStatus";
import { ACTIVITY_BUTTONS } from "../../Utils/constants";
import languageTranslations from "../../Utils/languageTranslations";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const WatchList = () => {
  const [status, setStatus] = useState(ACTIVITY_BUTTONS[0].value);
  const movies = useGetMovieListByStatus(status);

  const currentLang = useGetCurrentLanguage();

  return (
    <div className="flex flex-col bg-black h-screen text-white">
      <h1 className="text-3xl font-semibold mt-32 mx-11">
        {languageTranslations[currentLang]?.activityHeading}
      </h1>
      <div className=" h-auto px-11 rounded-lg my-5 mt-8 bg-black">
        <ActivityButtons
          buttonList={ACTIVITY_BUTTONS}
          selectedStatus={status}
          setStatus={setStatus}
        />
        <TabContent movies={movies} />
      </div>
    </div>
  );
};

export default WatchList;
