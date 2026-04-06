import { Cloudinary } from '@cloudinary/url-gen';
import { fill, crop, scale } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

// Create a Cloudinary instance with your cloud name
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dwggvgf1r'
  }
});

// Helper function to optimize image delivery
export const optimizeImage = (publicId: string) => {
  return cld.image(publicId)
    .delivery(format('auto'))
    .delivery(quality('auto'));
};

// Helper function to create a cropped image
export const createCroppedImage = (publicId: string, width = 500, height = 500) => {
  return cld.image(publicId)
    .resize(crop().width(width).height(height).gravity(autoGravity()))
    .delivery(format('auto'))
    .delivery(quality('auto'));
};

// Helper function to create a responsive image
export const createResponsiveImage = (publicId: string, maxWidth = 1200) => {
  return cld.image(publicId)
    .resize(scale().width(maxWidth))
    .delivery(format('auto'))
    .delivery(quality('auto'));
};

export default cld;
