const ProductForm = ({ handleAddProduct }) => {
  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const productName = e.target.product.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(productName,price,quantity)
    const newProduct = {
      productName,
      price,
      quantity,
    };
    handleAddProduct(newProduct);
    console.log(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleSubmitProduct}>
        <input type="text" name="product" placeholder="Product" />
        <br />
        <input type="text" name="quantity" placeholder="Quantity" />
        <br />
        <input type="text" name="price" placeholder="Price" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
