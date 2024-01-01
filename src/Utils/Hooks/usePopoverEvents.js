import { useLayoutEffect } from "react";

const usePopoverEvents = (movieCardRef, setIsPopoverOpen) => {
  const handleMouseOver = (e) => {
    if (movieCardRef.current && movieCardRef.current.contains(e.target)) {
      setIsPopoverOpen(true);
    }
  };

  const handleMouseOut = (e) => {
    if (movieCardRef.current && !movieCardRef.current.contains(e.target)) {
      setIsPopoverOpen(false);
    }
  };

  // Applying Debouncing on mouse over and mouse out events
  useLayoutEffect(() => {
    let timerId_MouseOver;
    let timerId_MouseOut;
    let delay = 450;

    const handleMouseOverTimeout = (e) => {
      clearTimeout(timerId_MouseOver);
      timerId_MouseOver = setTimeout(() => {
        handleMouseOver(e);
      }, delay);
    };

    const handleMouseOutTimeout = (e) => {
      clearTimeout(timerId_MouseOut);
      timerId_MouseOut = setTimeout(() => {
        handleMouseOut(e);
      }, 0);
    };

    document.addEventListener("mouseover", handleMouseOverTimeout);
    document.addEventListener("mouseout", handleMouseOutTimeout);

    return () => {
      document.removeEventListener("mouseover", handleMouseOverTimeout);
      document.removeEventListener("mouseout", handleMouseOutTimeout);
    };
  }, [movieCardRef]);
};

export default usePopoverEvents;
