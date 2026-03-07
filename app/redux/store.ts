import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/base.api';
import authSlice from './features/auth/authSlice';
import wishListSlice from './features/wishlist/wishListSlice';
import cartSlice from './features/cart/cartSlice';
import modalSlice from './features/modal/modalSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configs for each reducer
const authPersistConfig = {
  key: "auth",
  storage,
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

// Wrap reducers with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistedWishlistReducer = persistReducer(wishlistPersistConfig, wishListSlice);
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    wishList: persistedWishlistReducer,
    cart: persistedCartReducer,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
  devTools: process.env.NEXT_MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
