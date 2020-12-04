<template>
  <div>
    <AppHeader />
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <LoginModal />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import { onMounted } from "vue";
import { useStore } from "vuex";
import firebase from "./utilities/firebase";

export default {
  components: { AppHeader, LoginModal },
  setup() {
    const store = useStore();

    onMounted(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          store.commit("setIsLoggedIn", true);
          store.commit("setAuthUser", user);
        } else {
          console.log("no user!!!");
          store.commit("setIsLoggedIn", false);
          store.commit("setAuthUser", {});
        }
      });
    });
    return {};
  },
};
</script>

<style></style>
