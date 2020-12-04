<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link
      class="mx-2"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="isLoggedIn" @click="logout" class="mx-2">Logout</button>
    <button v-else @click="openLogin" class="mx-2">
      Login
    </button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const list = ref([
      { title: "Home", to: "/" },
      { title: "Dc Heros", to: "/dc-heros" },
      { title: "Chat", to: "/chat" },
    ]);
    const store = useStore();
    const isLoggedIn = computed(() => store.state.isLoggedIn);

    function logout() {
      console.log("logout");
      firebase.auth().signOut();
    }

    function openLogin() {
      store.commit("setIsLoginOpen", true);
    }

    return { list, logout, isLoggedIn, openLogin };
  },
};
</script>

<style></style>
