<template>
  <section class="mt-5 text-center">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      Login With Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";

export default {
  setup(_, { emit }) {
    function loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          emit("close-login-from-google");
        })
        .catch(() => {});
    }

    return { loginWithGoogle };
  },
};
</script>

<style></style>
