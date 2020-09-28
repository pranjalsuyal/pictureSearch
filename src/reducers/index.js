import { combineReducers } from "redux";
import searchTerm from "./searchTerm";
import imageArray from "./imageArray";

const allReducers = combineReducers({
  term: searchTerm,
  images: imageArray,
});

export default allReducers;
