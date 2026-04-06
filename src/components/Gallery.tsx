/// <reference types="vite/client" />

import type { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GalleryImage {
  id: number;
  title: string;
  src: string;
}

interface GalleryProps {
  limit?: number;
  columns?: 1 | 2 | 3 | 4;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  imageHeight?: number;
}

// Load all images from src/assets/gallery
const galleryModules = import.meta.globEager('/src/assets/gallery/*.{png,jpg,jpeg,svg}');
const localImages: GalleryImage[] = Object.entries(galleryModules).map(([path, module], idx) => ({
  id: idx,
  title: path.split('/').pop()?.replace(/\.[^\.]+$/, '') || '',
  src: (module as any).default,
}));

const Gallery: FC<GalleryProps> = ({
  limit,
  columns = 3,
  aspectRatio = 'landscape',
  imageHeight = 300,
}: GalleryProps) => {
  // Calculate image dimensions and grid classes
  const getImageWidth = (height: number, aspectRatio: 'square' | 'portrait' | 'landscape'): number => {
    switch (aspectRatio) {
      case 'square': return height;
      case 'portrait': return Math.floor(height * 0.75);
      case 'landscape': return Math.floor(height * 1.33);
      default: return height;
    }
  };

  const getColumnsClass = (columns: number): string => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const imagesToShow = limit ? localImages.slice(0, limit) : localImages;
  const imageWidth = getImageWidth(imageHeight, aspectRatio);

  if (imagesToShow.length === 0) {
    return <div className="text-center py-8">No images found in the gallery.</div>;
  }

  return (
    <div className={`grid ${getColumnsClass(columns)} gap-6`}>
      {imagesToShow.map((image) => (
        <Card key={image.id} className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src={image.src}
              alt={image.title}
              width={imageWidth}
              height={imageHeight}
              className="w-full h-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{image.title}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
