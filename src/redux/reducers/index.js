import { combineReducers } from "redux";
import SnackbarReducer from "./SnackbarReducer";
import getAssetsMarketReducer from "./lp_Reducers/getAssetsMarketReducer";
import getTokenPriceReducer from "./lp_Reducers/getTokenPriceReducer";

const rootReducer = combineReducers({
  SnackbarReducer,
  getAssetsMarketReducer,
  getTokenPriceReducer,
});

export default rootReducer;
