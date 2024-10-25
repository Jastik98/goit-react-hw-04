import toast, { Toaster } from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSubmit, searchText, setSearchText }) => {
  const handleSubmit = (eventSubmit) => {
    eventSubmit.preventDefault();
    if (!searchText.trim()) {
      toast.error("Search term can`t be empty!");
      return;
    } else {
      toast.success("Successfully searched!");
    }
    onSubmit(searchText);
    setSearchText("");
  };

  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <IoMdSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
