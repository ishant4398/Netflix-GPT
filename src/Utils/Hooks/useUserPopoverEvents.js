import { useLayoutEffect, useState } from "react";

const useUserPopoverEvents = (elementRef) => {
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
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [elementRef]);

  return isPopoverOpen;
};

export default useUserPopoverEvents;
