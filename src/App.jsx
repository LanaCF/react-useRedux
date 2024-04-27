import { useState } from "react";
import { AddProductForm } from "./components/AddProductForm";
import { Products } from "./components/Products";
import { ShowProductsQty } from "./components/ShowProductsQty";
import { BasketProducts } from "./components/BasketProducts";
import { CartQty } from "./components/CartQty";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  const toggleBasket = () => {
    setShowBasket(prev => !prev);
  };

  const handleOverlayClick = () => {
    setShowBasket(false);
  };

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <div className="container">

      <header className="header">
        <div className="logo">SHOP</div>
        <div className="action-block">
          <div className="manage">
          <button
            onClick={toggleForm}
            className="manage__add-prod-form"
          >
            Add new product
          </button>
          </div>
          <div className="cart-img-box" onClick={ toggleBasket } >
            <img src="img/cart.png" alt="" className="cart-img" />
          </div>
          <CartQty />
        </div>
      </header>

      <main className="main">

        { showBasket && <div className="overlay" onClick={ handleOverlayClick }></div> }
        <BasketProducts isOpen={ showBasket } onClose={ () => setShowBasket(false) } />

        <ShowProductsQty />

        <Products />

      </main>

      <footer className="footer"></footer>
      
      {
        showForm &&
          <AddProductForm toggleForm={ toggleForm } /> 
      }

    </div>
  );
}

export default App;