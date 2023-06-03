import { FaSearch } from "react-icons/fa";
import { UseProductContext } from "../context/ProductContext";
import { useState } from "react";

function Search() {
  // const { serachProducts, filterProduct } = UseProductContext();
  const [input, setInput] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // serachProducts(input)
  //   // let naam = filterProduct.title||filterProduct.name;
  //   // console.log(naam);
  // let searchedPRod = filterProduct.filter((prod) => prod.title || prod.name === input);
  //  console.log('searched', searchedPRod)
  // };

  return (
    <div className="flex border p-2 gap-1 border-slate-900 rounded-md">
      <form
        action="submit"
        className="flex"
        //  onSubmit={handleSubmit}
      >
        <FaSearch size={22} />
        <input
          value={input}
          name="text"
          onChange={(e) => setInput(e.target.value)}
          className="border-none outline-none bg-transparent"
          type="text"
          placeholder="Search Product.."
        />
      </form>
    </div>
  );
}

export default Search;
