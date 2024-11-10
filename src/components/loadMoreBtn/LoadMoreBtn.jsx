import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ changePage }) => {
 

  return (
    <button className={css.btn} onClick={changePage}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
