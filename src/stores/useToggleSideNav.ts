import { create } from "zustand";

type ToggleSide = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const useToggleSideNav = create<ToggleSide>((set) => ({
  isOpen: true,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useToggleSideNav;
