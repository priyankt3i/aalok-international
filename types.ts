
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'Women' | 'Men' | 'Children';
}
