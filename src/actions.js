export const searchItem = (data) => {
  return { type: "SEARCH", payload: data };
};

export const imageArray = (data) => {
  return { type: "IMG_ARRAY", payload: data };
};
