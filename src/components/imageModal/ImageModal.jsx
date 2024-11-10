import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(61, 61, 61, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "600",
        },
        content: {
          border: "none",
          padding: "0",
          maxWidth: "700px",
          margin: "auto",
          inset: "auto",
          borderRadius: "10px",
          backgroundColor: "transparent",
          objectFit: "cover",
        },
      }}
    >
      {image && (
        <img
          className={css.content}
          src={image.urls.regular}
          alt={image.alt_description}
          style={{
            maxWidth: "90%",
            maxHeight: "auto",
            objectFit: "contain",
          }}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
