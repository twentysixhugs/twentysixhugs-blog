import { useState, useEffect } from "react";

export const useIsLoadingOnMount = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading;
};
