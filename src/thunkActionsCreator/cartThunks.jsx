import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCart, setNonce } from "../slices/cartSlice";

export const initializeCartThunk = createAsyncThunk(
  "cart/initialize",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/wp-json/wc/store/v1/cart`,
      );
      if (!response.ok) {
        throw new Error("Impossible de récupérer le panier initial.");
      }
      const serverNonce = response.headers.get("Nonce");
      if (serverNonce) {
        thunkAPI.dispatch(setNonce(serverNonce));
      }
      const cartData = await response.json();
      thunkAPI.dispatch(setCart(cartData));
      return cartData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
