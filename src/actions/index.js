export const addtocard = (payload) => {
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
export const cardclick = () => {
  return {
    type: "cardclick",
  };
};
