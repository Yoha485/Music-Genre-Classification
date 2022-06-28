import create from "zustand";

const useStore = create<AppState>()((set) => ({
  resultGenre: null,
  loading: false,
  setResultGenre: (resultGenre: string | null) => set(() => ({ resultGenre: resultGenre })),
  setLoading: (loading: boolean) => set(() => ({ loading: loading })),
}));

export default useStore;
