<template>
  <section>Chat!!!</section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.authUser);
    return { user };
  },
};
</script>

<style></style>
