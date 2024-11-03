import toast, { Toaster } from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ handleSearchSubmit, searchText, setSearchText }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const handleSubmit = (eventSubmit) => {
    eventSubmit.preventDefault();
    if (!localSearchText.trim()) {
      toast.error("Search term can`t be empty!");
      return;
    } else {
      handleSearchSubmit(localSearchText);
      toast.success("Successfully searched!");
    }
    
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form  onSubmit={handleSubmit}>
        <input
          className={css.input}
          onChange={(e) => setLocalSearchText(e.target.value)}
          type="text"
          autoComplete="off"
          value={localSearchText}
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <IoMdSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
