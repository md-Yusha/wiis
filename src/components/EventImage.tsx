interface EventImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const EventImage = ({ src, alt, className = '', width, height }: EventImageProps) => (
  <img src={src} alt={alt} className={className} width={width} height={height} />
);

export default EventImage;
