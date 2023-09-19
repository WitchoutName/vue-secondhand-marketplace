import { useStore } from "vuex";

const useSupabase = (callback: () => void) => {
  const store = useStore();
  if (store.getters["db/supabase"]) {
    callback();
  } else {
    store.dispatch("db/addCallback", callback);
  }
};

export default useSupabase;
