import { ADD_TO_CART, REMOVE, INCREMENT, DECREMENT } from './types';

// Increment and decrement are sharing the same logic so created a function to handle it
const incrementAndDecrement = (operator, items, product) => {
  const operate = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };
  return items.map(item => {
    if (item.id !== product.id) {
      return item;
    }
    return {
      ...item,
      quantity: operate[operator](item.quantity, 1)
    };
  });
};

const shoppingCart = (
  state = {
    totalPrice: 0,
    items: []
  },
  action
) => {
  const { type, product } = action;

  switch (type) {
    case ADD_TO_CART: {
      // Check if the item is already exists in shopping cart.
      const isProductAlreadyInCart =
        state.items.length && state.items.find(item => item.id === product.id);
      if (isProductAlreadyInCart) {
        // Find the exist product in shopping cart and modify the quantity while returning a new state hence map method is used.
        const items = state.items.map(item => {
          if (item.id !== product.id) {
            return item;
          }
          return {
            ...item,
            quantity: item.quantity + 1
          };
        });
        return {
          totalPrice: state.totalPrice + product.salePrice,
          items
        };
      }
      return {
        totalPrice: state.totalPrice + product.salePrice,
        items: [...state.items, { ...product, quantity: 1 }]
      };
    }
    case REMOVE: {
      return {
        totalPrice: state.totalPrice - product.quantity * product.salePrice,
        items: state.items.filter(item => item.id !== product.id)
      };
    }
    case INCREMENT: {
      return {
        totalPrice: state.totalPrice + product.salePrice,
        items: incrementAndDecrement('+', state.items, product)
      };
    }
    case DECREMENT: {
      return {
        totalPrice: state.totalPrice - product.salePrice,
        items: incrementAndDecrement('-', state.items, product)
      };
    }
    default:
      return state;
  }
};

export default shoppingCart;
