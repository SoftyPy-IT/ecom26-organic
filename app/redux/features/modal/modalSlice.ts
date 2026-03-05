import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
  isSearchOpen: boolean
  isCartOpen: boolean
}

const initialState: ModalState = {
  isSearchOpen: false,
  isCartOpen: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setSearchModal: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpen = action.payload
    },
    setCartModal: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload
    },
  }
})

export const { setSearchModal, setCartModal } = modalSlice.actions
export default modalSlice.reducer

