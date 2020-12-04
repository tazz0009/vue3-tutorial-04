<template>
  <div v-if="isLoginOpen">
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
          <div class="p-2 border">
            <h1 class="text-xl text-center">Login</h1>
            <GoogleLogin @close-login-from-google="close" />
            <p class="m-5 text-center">Or</p>
            <form class="p-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label>Email or Username</label>
                <input
                  v-model="email"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter your email or username"
                  ref="emailRef"
                />
              </div>
              <div class="my-4">
                <label>Password</label>
                <input
                  v-model="password"
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full rounded shadow bg-gradient-to-r from-blue-800 to-indigo-800 text-white p-2"
                >
                  <span v-if="isLoading">
                    Loading...
                  </span>
                  <span v-else>
                    Login
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "./Login/GoogleLogin";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { GoogleLogin },
  setup() {
    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const emailRef = ref("");
    const store = useStore();
    const isLoginOpen = computed(() => store.state.isLoginOpen);

    function close() {
      store.commit("setIsLoginOpen", false);
    }

    function submit() {
      isLoading.value = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          email.value = "";
          password.value = "";
          close();
          isLoading.value = false;
        })
        .catch(() => {
          isLoading.value = false;
        });
    }

    onMounted(() => {
      // if (isLoginOpen) {
      //   emailRef.value.focus();
      // }
    });

    return { email, password, isLoading, close, submit, emailRef, isLoginOpen };
  },
};
</script>

<style></style>
