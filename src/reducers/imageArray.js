const imageReducer = (state = [], action) => {
  switch (action.type) {
    case "IMG_ARRAY":
      return action.payload;
    default:
      return state;
  }
};

export default imageReducer;
