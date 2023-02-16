const clicktocardReducer = (state = false, action) => {
  switch (action.type) {
    case "cardclick": {
      return !state;
    }
    default:
      return state;
  }
};
export default clicktocardReducer;
