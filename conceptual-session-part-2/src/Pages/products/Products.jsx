import { useState } from "react";
import { useProducts } from "../../Hooks/hooks";
import AllProducts from "../AllProducts /AllProducts";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  // console.log(search)
  const searchValue = search.trim().toLowerCase();
  const matchedProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchValue),
      )
    : products;
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h2>
            <span className=" text-2xl font-semibold">All Products</span>{" "}
            <span className=" text-gray-400 text-sm ">
              ({matchedProducts.length}) products found
            </span>
          </h2>
        </div>
        <div>
          

          <input
            className=" p-2 border border-gray-400 outline-none rounded-xl"
            type="search"
            name="search"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Products"
          />
        </div>
      </div>
      <div>
        <AllProducts products={matchedProducts} />
      </div>
    </div>
  );
};

export default Products;
