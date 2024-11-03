import { useEffect, useState } from "react";
import { fetchPhotos } from "./api-servic/api";

import SearchBar from "./components/searchBar/SearchBar";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import ImageGallery from "./components/imageGallery/ImageGallery";
import ImageModal from "./components/imageModal/imageModal";

function App() {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = (querty) => {
    setSearchText(querty), setPage(1), setImages(null);
  };
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!searchText.trim()) return;

    async function loadPhotos() {
      try {
        setLoader(true);
        const response = await fetchPhotos(searchText, page);
        setImages((prevImages) => {
          if (prevImages === null) {
            return response;
          }
          return [...prevImages, ...response];
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    }
    loadPhotos();
  }, [searchText, page]);

  return (
    <div>
      <SearchBar
        setSearchText={setSearchText}
        searchText={searchText}
        handleSearchSubmit={handleSearchSubmit}
      />
      {images !== null && (
        <ImageGallery images={images} onImagesClick={openModal} />
      )}
      {error && <ErrorMessage error={error.message} />}
      {loader && (
        <div>
          <Loader />
        </div>
      )}
      {images !== null && !loader && (
        <LoadMoreBtn currentPage={page} setNextPage={setPage} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
}

export default App;
