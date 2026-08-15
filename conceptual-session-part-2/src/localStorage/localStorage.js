const getFromLs = () => {
  const data = localStorage.getItem("cart");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const addToLS = (product) => {
  const data = getFromLs();
  const exist = data.some((d) => d === product.id);
  
  if (!exist) {
    data.push(product);
    setToLs(data);
  }
};

const setToLs = (data) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem("cart", jsonData);
};

const removeToLs = (id)=>{
const products = getFromLs()
const updatedProducts = products.filter(product => product.id !== id)
setToLs(updatedProducts)
}
export { getFromLs, addToLS , removeToLs};
