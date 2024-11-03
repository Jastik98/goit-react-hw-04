import Modal from "react-modal";
import css from "./ImageModal.module.css"

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, imageUrl }) => {


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
          zIndex: "600"
        },
        content: {
          border: "none",
          padding: "0",
          maxWidth: "800px",
          margin: "auto",
          inset: "auto",
          borderRadius: "0",
          backgroundColor: "transparent",
        },
      }}
    >
      <img
        className={css.content}
        src={imageUrl}
        alt="Large picture"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Modal>
  );
};

export default ImageModal;
