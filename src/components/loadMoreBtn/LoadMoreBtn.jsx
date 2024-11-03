import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ currentPage, setNextPage }) => {
  const changePage = () => {
    const nextPage = currentPage + 1;
    setNextPage(nextPage);
  };

  return (
    <button className={css.btn} onClick={changePage}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
