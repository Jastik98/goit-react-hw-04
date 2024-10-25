import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ OnClick }) => {
  return (
    <button className={css.btn} onClick={OnClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;