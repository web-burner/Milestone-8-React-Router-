import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addToLS, getFromLs } from "../../localStorage/localStorage";

const Product = ({ product }) => {
  const { id, name, price, image, stock } = product;
  const navigate = useNavigate();

    const handleCart = (id, product) => {
    const data = getFromLs();
    const exist = data.some((d) => d.id === id);
    if (exist) {
      toast("This Product Already Exist in The Cart!");
      return;
    }
    if (!exist) {
      toast("Product Added To Cart Successfully!");
      addToLS(product);
    }
  };
  return (
    <div className=" p-4 bg-base-300 rounded-lg space-y-3 hover:scale-105 transition duration-150 ease-in-out">
      <figure>
        <img src={image} className=" rounded-md" />
      </figure>
      <div>
        <h2 className=" text-xl font-semibold">{name}</h2>
      </div>
      <div className=" flex justify-between">
        <p className={` ${stock ? "text-green-600 " : "text-red-600"}`}>
          {stock ? <span>In Stock</span> : <span>Sold Out</span>}
        </p>
        <p>${price}</p>
      </div>

      <div className=" flex justify-between">
        <button onClick={()=>handleCart(id,product)} className=" btn">Add To Cart</button>
        <button
          onClick={() => navigate(`/product/${id}`, { state: product })}
          className=" underline"
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default Product;

// {
//     "id": 2,
//     "name": "Wooden Coffee Table",
//     "category": "Furniture",
//     "price": 230,
//     "material": "Oak Wood",
//     "dimensions": "40 x 22 x 18 in",
//     "stock": true,
//     "image": "https://i.ibb.co.com/B29xwj5b/Wooden-Coffee-Table.jpg",
//     "description": "Solid oak coffee table with smooth polish and rounded corners."
// }
