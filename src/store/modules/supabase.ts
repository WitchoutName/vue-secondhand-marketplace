import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { IRootState } from "./../index";
import { ADD_CALLBACK, INITIALIZE_SUPABASE } from "./../actions.type";

interface ISupabaseState {
  supabase: SupabaseClient | null;
  callbacks: (() => void)[];
}

const state: ISupabaseState = {
  supabase: null,
  callbacks: [],
};

const getters: GetterTree<ISupabaseState, IRootState> = {
  supabase: (state) => state.supabase,
};

const mutations: MutationTree<ISupabaseState> = {
  initSupabase(state, { client }: { client: SupabaseClient }) {
    state.supabase = client;
    console.log(state.supabase);
    state.callbacks.forEach((fn) => {
      fn();
    });
  },
  addCallback(state, payload) {
    state.callbacks.push(payload);
  },
};

const actions: ActionTree<ISupabaseState, IRootState> = {
  async [INITIALIZE_SUPABASE]({ commit }) {
    // Initialize your Supabase instance here, and replace the placeholders with your actual Supabase URL and API key.
    const supabase = await createClient(
      import.meta.env.VITE_SUPABASE_URL || "",
      import.meta.env.VITE_SUPABASE_KEY || ""
    );

    commit("initSupabase", {
      client: supabase,
    });
  },
  [ADD_CALLBACK]({ commit }, payload) {
    commit("addCallback", payload);
  },
};

const supabaseModule: Module<ISupabaseState, IRootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default supabaseModule;
