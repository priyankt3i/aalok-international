declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}
