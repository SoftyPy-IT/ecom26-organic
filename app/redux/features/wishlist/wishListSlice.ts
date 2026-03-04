import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    thumbnail: string;
    mainCategory: string;
}


export interface WishListState {
    items: Product[];
    itemsCount: number;
}

const WISHLIST_STORAGE_KEY = "wishlist";

const loadFromLocalStorage = (): Product[] => {
    try {
        const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Failed to load wishlist from localStorage:", error);
        return [];
    }
};

const saveToLocalStorage = (items: Product[]) => {
    try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
        console.error("Failed to save wishlist to localStorage:", error);
    }
};


// Initial State

const initialState: WishListState = {
    items: loadFromLocalStorage(),
    itemsCount: loadFromLocalStorage().length,
};

const wishListSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<Product>) => {
            const exists = state.items.some(
                (item) => item.id === action.payload.id
            );

            if (!exists) {
                state.items.push(action.payload);
                saveToLocalStorage(state.items);
                state.itemsCount = state.items.length;
            }
        },

        removeFromWishList: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            saveToLocalStorage(state.items);
            state.itemsCount = state.items.length;
        },

        clearWishList: (state) => {
            state.items = [];
            saveToLocalStorage([]);
            state.itemsCount = 0;
        },
    },
});

export const {
    addToWishList,
    removeFromWishList,
    clearWishList,
} = wishListSlice.actions;

export default wishListSlice.reducer;
