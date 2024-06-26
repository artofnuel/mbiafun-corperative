import { create } from "zustand";

const initialState = {
  isOpen: false, // Initial state for navbar visibility
  toggleNavbar: () => {}, // Placeholder function for toggling
};

export const useNavbarStore = create((set) => ({
  ...initialState,
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
