import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
  isSearchOpen: boolean
  isCartOpen: boolean
  isDropdownOpen: boolean
  updateProfileModalOpen: boolean
}

const initialState: ModalState = {
  isSearchOpen: false,
  isCartOpen: false,
  isDropdownOpen: false,
  updateProfileModalOpen: false
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
    },
    setUpdateProfileModal: (state, action: PayloadAction<boolean>) => {
      state.updateProfileModalOpen = action.payload
    }
  }
})

export const { setSearchModal, setCartModal, setDropdownModal, setUpdateProfileModal } = modalSlice.actions
export default modalSlice.reducer

