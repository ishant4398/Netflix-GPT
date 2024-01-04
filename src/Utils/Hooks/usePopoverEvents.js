import { useLayoutEffect, useState } from "react";

const usePopoverEvents = (elementRef) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleMouseOver = (e) => {
    if (elementRef.current && elementRef.current.contains(e.target)) {
      setIsPopoverOpen(true);
    }
  };

  const handleMouseOut = (e) => {
    if (elementRef.current && !elementRef.current.contains(e.target)) {
      setIsPopoverOpen(false);
    }
  };

  // Applying Popover, Event Delegation and Debouncing on mouse over and mouse out events
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
  }, [elementRef]);

  return isPopoverOpen;
};

export default usePopoverEvents;
