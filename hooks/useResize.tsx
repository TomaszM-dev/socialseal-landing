import { useState, useEffect } from "react";

const useResize = () => {
  const [isTabScreen, setIsTabScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 1000) {
        setIsTabScreen(true);
      } else if (width <= 685) {
        setIsMobileScreen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isTabScreen, isMobileScreen };
};

export default useResize;
