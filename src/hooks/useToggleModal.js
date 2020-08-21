import { useState, useCallback } from "react";

const useToggleModal = (initial = false) => {
  const [isVisible, setIsVisible] = useState(initial);

  const toggle = useCallback(() => {
    setIsVisible((isVisible) => !isVisible);
  }, []);

  return { isVisible, toggle };
};

export default useToggleModal;
