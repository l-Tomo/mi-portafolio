// main.js
import { useState } from 'react';

export const useMain = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return {
    videoLoaded,
    handleVideoLoad,
  };
};
