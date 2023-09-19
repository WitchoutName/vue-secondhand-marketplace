import { SupabaseClient } from "@supabase/supabase-js";
import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { FETCH_LISTINGS } from "../actions.type";
import { SET_LISTINGS } from "../mutations.type";
import { IRootState } from "./../index";

interface IListingsState {
  listings: Tables<"listings">[] | null;
}

const state: IListingsState = {
  listings: null,
};

const getters: GetterTree<IListingsState, IRootState> = {
  listings: (state) => state.listings,
};

const mutations: MutationTree<IListingsState> = {
  [SET_LISTINGS](state, payload) {
    state.listings = payload;
  },
};

const actions: ActionTree<IListingsState, IRootState> = {
  async [FETCH_LISTINGS]({ commit, rootGetters }) {
    const supabase = rootGetters["db/supabase"] as SupabaseClient;

    const { data: listings, error } = await supabase.from("listings").select();
    if (!error) commit("setListings", listings);

    console.log(listings, error);
  },
};

const listingsModule: Module<IListingsState, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default listingsModule;
