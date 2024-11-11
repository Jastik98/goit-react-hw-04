import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImagesClick }) => {
  return (
    <ul className={css.Wrapper}>
      {images.map((image) => (
        <li className={css.imgWrapper} key={image.id}>
          <ImageCard image={image} onImagesClick={() => onImagesClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
