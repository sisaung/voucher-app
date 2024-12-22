import { create } from "zustand";

export type User = {
  id: number;
  name: string;
  email: string;
  profile_image: string;
};
type UserStore = {
  userStore: User | null;
  setUserStore: (user: User) => void;
};

const useUserStore = create<UserStore>()((set) => ({
  userStore: null,
  setUserStore: (user) => set({ userStore: user }),
}));

export default useUserStore;
