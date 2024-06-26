import React from 'react';

const CartSummary = ({ totalPrice, onPlaceOrder, cartEmpty }) => (
  <div>
    <div className="mt-6 flex items-center justify-between">
      <p className="text-sm font-medium text-gray-900">Total</p>
      <p className="text-2xl font-semibold text-gray-900">${totalPrice}</p>
    </div>
    <button className={`mt-4 mb-8 w-full rounded-md ${cartEmpty ? 'bg-gray-300' : 'bg-green-700'} px-6 py-3 font-medium text-white`} onClick={cartEmpty ? null : onPlaceOrder} disabled={cartEmpty}>
      Place Order
    </button>
  </div>
);

export default CartSummary;
