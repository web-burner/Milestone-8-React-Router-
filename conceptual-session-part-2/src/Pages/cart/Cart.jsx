import { useEffect, useState } from "react";
import { getFromLs, removeToLs } from "../../localStorage/localStorage";
import CartProduct from "./CartProduct";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const savedList = getFromLs();
    if (savedList) {
      setProducts(savedList);
      // console.log(savedList);
    }
  }, []);

  const handleRemove = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    removeToLs(id);
    toast("Item Delete Successfully!");
  };
  const [sort, setSort] = useState("");
  const handleSort = () => {
    console.log(sort);
    if (sort === "asc") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProducts(sorted);
    }
    if (sort === "des") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProducts(sorted);
    }
  };

  const totalChart = {};
  products.forEach((p) => {
    const category = p.category;
    totalChart[category] = (totalChart[category] || 0) + p.price;
  });
  const chartData = Object.keys(totalChart).map((category) => ({
    category,
    total: totalChart[category],
  }));
  return (
    <div>
      <div className=" flex justify-between">
        <h1 className=" text-lg font-semibold mb-5">
          Total Products ({products.length})
        </h1>
        <select
          className=" select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option onClick={handleSort} value="none">
            Sort By Default
          </option>
          <option onClick={handleSort} value="asc">
            $Low-&gt;$High
          </option>
          <option onClick={handleSort} value="des">
            $High-&gt;$Low
          </option>
        </select>
      </div>

      <div className=" flex flex-col">
        {products.length === 0 ? (
          <div className=" flex justify-center items-center h-130 text-3xl font-bold text-gray-400">
            <p>Please Select a Product</p>
          </div>
        ) : (
          <div>
            <div>
              {products.map((product) => (
                <CartProduct
                  key={product.id}
                  handleRemove={handleRemove}
                  product={product}
                />
              ))}
            </div>
            <div className=" w-1/2 mx-auto">
              <BarChart
                style={{
                  width: "100%",
                  aspectRatio: 1.618,
                }}
                responsive
                data={chartData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis width="auto" />
                <Bar dataKey={`total`}></Bar>
                <Tooltip />
                <Legend />
                
                
                {/* <RechartsDevtools /> */}
              </BarChart>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
