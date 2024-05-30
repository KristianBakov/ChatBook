import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
};

export default useWindowSize;
