import create from "zustand";
import { devtools } from "zustand/middleware";
import AuthStore from "./AuthStore";
import ProductStore from "./ProductStore";

const useBoundStore = create()(
  devtools((...a) => ({
    ...ProductStore(...a),
    ...AuthStore(...a),
  }))
);
export default useBoundStore;
