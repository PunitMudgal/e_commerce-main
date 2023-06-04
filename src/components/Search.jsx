import { FaSearch } from "react-icons/fa";
import { UseProductContext } from "../context/ProductContext";

function Search() {
  const { getSortingValues,filter:{search} } = UseProductContext();
  // const [input, setInput] = useState("");
 
  return (
    <div className="flex border p-2 gap-1 border-slate-900 rounded-md">
      <form
        action="submit"
        className="flex"
         onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch size={22} />
        <input
          value={search}
          name="search"
          onChange={getSortingValues}
          className="border-none outline-none bg-transparent"
          type="text"
          placeholder="Search By Keyword..."
        />
      </form>
    </div>
  );
}

export default Search;
