const addtocardReducers = (state = [], action) => {
  switch (action.type) {
    case "addtocard": {
      return [...state, action.payload];
    }
    case "deletefrombasket": {
      let copyofBasket = [...state];
      let indeks = copyofBasket.findIndex((item) => item.id === action.payload);
      copyofBasket.splice(indeks, 1);
      state = copyofBasket;
     
      return [...state];
    }
    default:
      return state;
  }
};
export default addtocardReducers;
