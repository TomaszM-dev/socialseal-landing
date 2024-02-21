import { useState, useEffect } from "react";

const useResize = () => {
  const [isTabScreen, setIsTabScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTabScreen(width >= 685 && width <= 1008);
      setIsMobileScreen(width <= 685);
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
