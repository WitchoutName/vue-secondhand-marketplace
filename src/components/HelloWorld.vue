<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { mapActions } from "../lib/store/setupVuexHooks";
import useSupabase from "../lib/store/useSupabase";
import { FETCH_LISTINGS } from "../store/actions.type";
defineProps<{ msg: string }>();

const store = useStore();
const count = ref(0);
const { [FETCH_LISTINGS]: fetchListings } = mapActions("listings");

const listings = computed(() => {
  return store.getters["listings/listings"];
});

onMounted(() => {
  useSupabase(() => {
    fetchListings();
  });
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p><code>components/HelloWorld.vue</code> to test HMR</p>
  </div>
  <ul>
    <li v-for="listing in listings">{{ listing }}</li>
  </ul>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
