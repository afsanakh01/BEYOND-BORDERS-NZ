import { useState, useEffect } from 'react';

export const useImagePreloader = (basePath: string, totalFrames: number) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      // Updated to match the actual sequence filename pattern if needed
      // The reference says ezgif-frame-001.jpg
      img.src = `${basePath}ezgif-frame-${frameNumber}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          // Keep the indices correct (1-300)
          setImages(loadedImages);
        }
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
        loadedCount++; // Still count it to avoid getting stuck
        setProgress(Math.floor((loadedCount / totalFrames) * 100));
      };

      loadedImages[i] = img;
    }
  }, [basePath, totalFrames]);

  return { images, progress };
};
