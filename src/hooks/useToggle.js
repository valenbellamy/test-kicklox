import { useState, useCallback } from "react";

const useToggle = (initial = false) => {
  const [isVisible, setIsVisible] = useState(initial);

  const toggle = useCallback(() => {
    setIsVisible((isVisible) => !isVisible);
  }, []);

  return [isVisible, toggle]; // en retournant un tableau je peux utiliser le hook avec un nom d'état et de fonction que je souhaite
};

export default useToggle;
