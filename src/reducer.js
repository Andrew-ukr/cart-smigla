export const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0),
    };
  }
  
  if (action.type === "UPDATE") {
    let totalSum = 0;
    let totalNum = 0;
    state.cart.forEach((elem) => {
      totalSum += elem.price * elem.amount;
      totalNum += elem.amount;
    });
    
    return {
      ...state,
      total: totalSum,
      amount: totalNum,
    };
  }
  
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  
  if (action.type === "DEFAULT_DISPLAY") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }

  return state;
};
