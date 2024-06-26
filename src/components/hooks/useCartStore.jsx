import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  
  addToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  decrementFromCart: (productId) =>
    set((state) => {
      const index = state.cart.findIndex((product) => product.id === productId);
      if (index !== -1) {
        const updatedCart = [...state.cart];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem('cart');
      return { cart: [] };
    }),
}));
