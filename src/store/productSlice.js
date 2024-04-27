import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    prodsList: [
      { id: 1, price: 1000, title: 'prod1', descr: 'descr 1', img: 'img/img1.jpg', publish: true },
      { id: 2, price: 2000, title: 'prod2', descr: 'descr 2', img: 'img/img2.jpg', publish: true },
      { id: 3, price: 3000, title: 'prod3', descr: 'descr 3', img: 'img/img3.jpg', publish: true },
    ],

    cartProdsList: [],
  },

  reducers: {
    addProduct(state, action) {
      const product = action.payload.product;

      state.prodsList.push(product);
    },

    delProduct(state, action) {
      const productId = action.payload;      
      state.prodsList = state.prodsList.filter(product => product.id !== productId);
    },

    addToCart(state, action) {
      const { id } = action.payload.product;
      const existingProductIndex = state.cartProdsList.findIndex(product => product.id === id);
      
      if (existingProductIndex !== -1) {
        state.cartProdsList[existingProductIndex].quantity += 1;
      } else {
        state.cartProdsList.push({ ...action.payload.product, quantity: 1 });
      }
    },

    increaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.cartProdsList.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.cartProdsList.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    removeFromCart(state, action) {
      const productId = action.payload;
      console.log('Removing product with ID:', productId);
      state.cartProdsList = state.cartProdsList.filter(product => product.id !== productId);
    },
  }
});

export const { addProduct, delProduct, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;