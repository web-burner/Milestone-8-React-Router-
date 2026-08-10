import { useContext } from "react";
import { AssetContext } from "./App";

const ProductTable = ({ products }) => {
  const asset = useContext(AssetContext)
  return (
    <div>
      <h2>{products.length}</h2>
      <h3>Asset: {asset}</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
