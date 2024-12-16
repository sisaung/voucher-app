import { create } from "zustand";

type Token = {
  tokenState: string | null;
  setTokenState: (token: string) => void;
};

const useTokenStore = create<Token>()((set) => ({
  tokenState: null,
  setTokenState: (token) => set({ tokenState: token }),
}));

export default useTokenStore;
