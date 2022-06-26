import { configureStore } from "@reduxjs/toolkit";
import counterUp from "./countUpSlice";
import countDown from "./countDownSlice";
const store = configureStore({
  reducer: {
    countUp: counterUp.reducer,
    countDown: countDown.reducer
  }
});
export default store;
