interface AppState {
  resultGenre: string | null;
  loading: boolean;
  setResultGenre: (resultGenre: string | null) => void;
  setLoading: (newLoading: boolean) => void;
}
