import React from "react";
import useGetCurrentLanguage from "../../Utils/Hooks/useGetCurrentLanguage";

const ActivityButtons = ({ buttonList, selectedStatus, setStatus }) => {
  const currentLang = useGetCurrentLanguage();

  return (
    <div className=" bg-black rounded-t-lg ">
      {buttonList.map((element) => (
        <button
          key={element.id}
          className={
            "text-white font-semibold px-2 py-2 w-40 rounded-md mr-4 bg-gray-800 " +
            (selectedStatus === element.value ? "bg-red-700" : "")
          }
          onClick={() => setStatus(element.value)}
        >
          {element.name}
        </button>
      ))}
    </div>
  );
};

export default ActivityButtons;
