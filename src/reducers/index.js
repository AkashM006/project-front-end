import userReducer from "./UserReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, userReducer),
});

export default rootReducer;
