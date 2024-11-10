import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css"

const ImageGallery = ({ images, onImagesClick }) => {
  return (
    <div className={css.Wrapper}>
      {images.map((image) => (
        <div className={css.imgWrapper} key={image.id}>
          <ImageCard image={image} onImagesClick={() => onImagesClick(image)} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
