import css from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div >
      <img className={css.img} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
