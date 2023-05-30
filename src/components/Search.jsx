import { FaSearch } from "react-icons/fa";
import { UseFilterContext } from "../context/Filtercontext";

function Search() {
  const {
    text,
    handleSearch,
  } = UseFilterContext();

  // const handleSearchKey = (e) => {
  //   e.code === "Enter" && handleSearch();
  // };

  console.log("text ->", text);
  return (
    <div className="flex border p-2 gap-1 border-slate-900 rounded-md">
      <form action="" className="flex" onSubmit={(e) => e.preventDefault()} >
      <FaSearch onClick={handleSearch} size={22} />
      <input
        value={text}
        name="text"
        onChange={handleSearch}
        className="border-none outline-none bg-transparent"
        type="text"
        placeholder="Search Product.."
      />
      </form>
    </div>
  );
}

export default Search;
