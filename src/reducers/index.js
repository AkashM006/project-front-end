import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
import storage from "redux-persist/lib/storage";
import reducer from "./userReducer";

const persistConfig = {
  key: "auth",
  storage: storage,
  // stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
