
const CartProduct = ({ product , handleRemove}) => {
  const {id, name, price, image, category, dimensions } =
    product;

    
  return (
    <div className=" p-4 bg-base-300 rounded-lg flex items-center justify-center gap-5 mb-5">
      <figure>
        <img src={image} className=" w-22 rounded-md" />
      </figure>
      <div className=" space-y-3 flex justify-between items-center w-full">
        <div>
          <h2 className=" text-xl font-semibold">{name}</h2>
          <p>{category}</p>
          <p>{dimensions}</p>
        </div>

        <div className=" flex gap-3 items-center">
          <p>${price}</p>
          <button onClick={()=> handleRemove(id)} className=" btn">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

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
