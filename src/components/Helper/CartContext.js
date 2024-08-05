// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const itemIndex = prevItems.findIndex(i => i.name === item.name);
//       if (itemIndex !== -1) {
//         const updatedItems = [...prevItems];
//         updatedItems[itemIndex].quantity += item.quantity;
//         return updatedItems;
//       }
//       return [...prevItems, item];
//     });
//   };

//   const value = {
//     cartItems,
//     addToCart,
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


