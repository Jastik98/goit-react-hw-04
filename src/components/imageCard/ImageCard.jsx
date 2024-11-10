import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImagesClick }) => {
  return (
    <div onClick={onImagesClick}>
      <img className={css.img} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
