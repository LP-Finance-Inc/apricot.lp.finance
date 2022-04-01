import { combineReducers } from "redux";
import SnackbarReducer from "./SnackbarReducer";
import PoolAssetsReducer from "./lp_Reducers/PoolAssetsReducer";

const rootReducer = combineReducers({
  SnackbarReducer,
  PoolAssetsReducer,
});

export default rootReducer;
