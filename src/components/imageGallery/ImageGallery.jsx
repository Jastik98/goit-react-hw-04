import ImageCard from "../imageCard/imageCard";
import css from "./ImageGallery.module.css"

const ImageGallery = ({ images, onImagesClick }) => {
  return (
    <div className={css.Wrapper}>
      {images.map((image) => (
        <div className={css.imgWrapper} key={image.id} onClick={() => onImagesClick(image.urls.regular)}>
          <ImageCard image={image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
