import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface CartState {
  items: CartItem[];
  itemsCount: number;
  subTotal: number;
  totalPrice: number;
  shippingCharge: number;
}

//  Local Storage:

const CART_STORAGE_KEY = "cart";

const loadFromLocalStorage = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};

const saveToLocalStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
};

// Initial State:
const initialState: CartState = {
  items: loadFromLocalStorage(),
  itemsCount: loadFromLocalStorage().length,
  shippingCharge: 50,
  subTotal: loadFromLocalStorage().reduce((acc, item) => acc + item.price * item.quantity, 0),
  totalPrice: loadFromLocalStorage().reduce((acc, item) => acc + item.price * item.quantity, 0) + 50,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      saveToLocalStorage(state.items);
      state.itemsCount = state.items.length;
      state.subTotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0) + state.shippingCharge;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.items);
      state.itemsCount = state.items.length;
      state.subTotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0) + state.shippingCharge;
    },

    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage([]);
      state.itemsCount = 0;
      state.subTotal = 0;
      state.totalPrice = 0;
    },
  },
});


export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
