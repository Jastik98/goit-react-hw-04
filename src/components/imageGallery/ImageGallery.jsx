import ImageCard from "../imageCard/imageCard";

const ImageGallery = ({ images, onImagesClick }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImagesClick(image.urls.regular)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
