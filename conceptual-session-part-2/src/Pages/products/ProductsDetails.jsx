import { useNavigate, useLocation } from "react-router";
import { addToLS, getFromLs } from "../../localStorage/localStorage";
import { toast } from "react-toastify";
const ProductsDetails = () => {
  const productDetails = useLocation().state;
  const {
    id,
    name,
    price,
    image,
    stock,
    description,
    category,
    dimensions,
    material,
  } = productDetails;
  console.log(productDetails);
  const navigate = useNavigate();

  const handleCart = (id, productDetails) => {
    const data = getFromLs();
    const exist = data.some((d) => d.id === id);
    if (exist) {
      toast("This Product Already Exist in The Cart!");
      return;
    }
    if (!exist) {
      toast("Product Added To Cart Successfully!");
      addToLS(productDetails);
    }
  };
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className=" p-5 bg-base-300 rounded-lg space-y-3 w-120 mx-auto">
      <figure>
        <img src={image} className=" h-110 mx-auto rounded-md" />
      </figure>
      <div>
        <div className=" flex justify-between">
          <h2 className=" text-xl font-semibold">{name}</h2> <p>${price}</p>
        </div>

        <p>{description}</p>
      </div>
      <div className=" flex justify-between">
        <p>{material}</p>
        <p>{dimensions}</p>
      </div>
      <div className=" flex justify-between">
        <p>{category}</p>

        <p className={` ${stock ? "text-green-600 " : "text-red-600"}`}>
          {stock ? <span>In Stock</span> : <span>Sold Out</span>}
        </p>
      </div>

      <div className=" flex justify-end">
        <button
          onClick={() => handleCart(id, productDetails)}
          className=" btn "
        >
          Add To Cart
        </button>
        <button onClick={handleNavigate} className=" btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;

// {
//     "id": 6,
//     "name": "Nature Landscape Frame",
//     "category": "Wall-Art",
//     "price": 85,
//     "material": "Canvas, Wooden Frame",
//     "dimensions": "28 x 36 in",
//     "stock": false,
//     "image": "https://i.ibb.co.com/bMFCPWW4/Nature-Landscape-Frame.jpg",
//     "description": "Scenic nature view framed in premium wood."
// }
