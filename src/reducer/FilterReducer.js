const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_DATA_TO_FILTERS":
      let priceArray = action.payload.map((prod) => prod.price);
      let maxPrice = Math.max(...priceArray);
      return {
        ...state,
        filterProduct: [...action.payload],
        products2: [...action.payload],
        // products3: [...action.payload],
        filter: { ...state.filter, maxPrice, price: maxPrice },
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_CATEGORIES":
      const { products2 } = state;
      let categoriesOfProducts;
      categoriesOfProducts = products2.filter(
        (prod) => prod.category === action.payload
      );
      return {
        ...state,
        filterProduct: categoriesOfProducts,
      };

    case "GET_SORTING_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: { ...state.filter, [name]: value },
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filterProduct } = state;
      const { sorting_value } = state.filter;
      let tempSortProduct = [...filterProduct];

      const sortingProducts = (a, b) => {
        if (sorting_value === "default") return undefined;

        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name || a.title.localeCompare(b.name || b.title);
        }
        if (sorting_value === "z-a") {
          return b.name || b.title.localeCompare(a.name || a.title);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filterProduct: newSortData,
      };

    case "SEARCHING_PRODUCTS":
      const { search, price } = state.filter;
      let newData;
      if (search) {
        newData = state.filterProduct.filter((prod) => {
          let newTitle = prod.title || prod.name;
          return newTitle.toLowerCase().includes(search.toLowerCase());
        });
      } else if (!search && !price) {
        return (newData = state.filterProduct);
      } else {
        newData = state.products2.filter((prod) => prod.price <= price);
      }

      return {
        ...state,
        filterProduct: newData,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filterProduct: [...action.payload],
        filter: {
          search: "",
          sorting_value: "default",
          // price: 0,
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
