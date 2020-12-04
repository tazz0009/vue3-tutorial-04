<template>
  <section>
    <div>Home!!!!</div>
    <div v-if="authUser.email !== ''">{{ authUser.email }}</div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const authUser = computed(() => store.state.authUser);
    return { store, authUser };
  },
};
</script>

<style></style>
