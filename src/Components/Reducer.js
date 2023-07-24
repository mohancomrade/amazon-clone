export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to add basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM-BASKET":
      // Logic for Removing Item Basket

      // we clone basket
      let newBasket = [...state.basket];

      // check product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          ` Cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
