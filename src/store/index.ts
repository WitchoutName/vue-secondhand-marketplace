import { createStore } from "vuex";
import listingsModule from "./modules/listings";
import supabaseModule from "./modules/supabase";

export interface IRootState {
  authToken: string | null;
  refreshToken: string | null;
  userId: number | null;
}

export default createStore<IRootState>({
  modules: {
    listings: listingsModule,
    db: supabaseModule,
  },
  state: {
    authToken: null,
    refreshToken: null,
    userId: null,
  },
  getters: {},
  mutations: {},
  actions: {},
});
