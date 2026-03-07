import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
  isSearchOpen: boolean
  isCartOpen: boolean
  isDropdownOpen: boolean
}

const initialState: ModalState = {
  isSearchOpen: false,
  isCartOpen: false,
  isDropdownOpen: false
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
    setDropdownModal: (state, action: PayloadAction<boolean>) => {
      state.isDropdownOpen = action.payload
    }
  }
})

export const { setSearchModal, setCartModal, setDropdownModal } = modalSlice.actions
export default modalSlice.reducer

