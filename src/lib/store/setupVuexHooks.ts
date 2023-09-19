/* eslint-disable */
import { computed } from "vue";
import { useStore } from "vuex";

const mapState = (module: string | undefined) => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(module !== undefined ? store.state[module] : store.state).map(
      (key) =>
        module !== undefined
          ? [key, computed(() => store.state[module][key])]
          : [key, computed(() => store.state[key])]
    )
  );
};

const mapGetters = (module: string | undefined) => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store.getters).map((getter) =>
      module !== undefined && getter.startsWith(module)
        ? [
            getter.substring(module.length + 1),
            computed(() => store.getters[getter]),
          ]
        : [getter, computed(() => store.getters[getter])]
    )
  );
};

const mapMutations = (module: string | undefined) => {
  const store: any = useStore();
  return Object.fromEntries(
    Object.keys(store._mutations).map((mutation) =>
      module !== undefined && mutation.startsWith(module)
        ? [
            mutation.substring(module.length + 1),
            (value: any) => store.commit(mutation, value),
          ]
        : [mutation, (value: any) => store.commit(mutation, value)]
    )
  );
};

const mapActions = (module: string | undefined) => {
  const store: any = useStore();
  return Object.fromEntries(
    Object.keys(store._actions).map((action) =>
      module !== undefined && action.startsWith(module)
        ? [
            action.substring(module.length + 1),
            (value?: any) => store.dispatch(action, value),
          ]
        : [action, (value: any) => store.dispatch(action, value)]
    )
  );
};

export { mapState, mapGetters, mapMutations, mapActions };
