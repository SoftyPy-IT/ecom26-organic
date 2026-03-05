import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/base.api';
import authSlice from './features/auth/authSlice';
import wishListSlice from './features/wishlist/wishListSlice';
import cartSlice from './features/cart/cartSlice';
import modalSlice from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
    wishList: wishListSlice,
    cart: cartSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
