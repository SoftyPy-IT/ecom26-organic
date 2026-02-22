import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  selectedImage: string | null;
  images: string[];
}

const initialState: ProductState = {
  selectedImage: null,
  images: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
      if (!state.selectedImage && action.payload.length > 0) {
        state.selectedImage = action.payload[0];
      }
    },
    selectImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { setImages, selectImage } = productSlice.actions;
export default productSlice.reducer;
