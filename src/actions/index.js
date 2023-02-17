export const addToCard = (payload) => {
  return {
    type: "addtocard",
    payload: payload,
  };
};
export const deletefrombasket = (payload) => {
  return {
    type: "deletefrombasket",
    payload: payload,
  };
};
export const cardClick = () => {
  return {
    type: "cardclick",
  };
};
