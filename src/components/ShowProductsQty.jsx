import { useSelector } from "react-redux";

export const ShowProductsQty = () => {
  const prodsList = useSelector(state => state.products.prodsList);

  return (
    <div className="product-qty">
      <span>Product quantity:</span>
      <span>{ prodsList.length }</span>
    </div>
  );
};