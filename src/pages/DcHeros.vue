<template>
  <div class="m-auto">
    <h1 class="text-center text-3xl my-4">
      Dc Heros!!!
    </h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        {{ hero.name }}
        <button @click="removeHero(index)">X</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded mx-1"
        v-model="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const dcHeros = ref([
      { name: "SuperGirl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arrow" },
      { name: "SuperMan" },
    ]);
    const newHero = ref("");
    const newHeroRef = ref("");

    function removeHero(index) {
      dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    }

    function addHero() {
      if (newHero.value !== "") {
        dcHeros.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }

    onMounted(() => {
      newHeroRef.value.focus();
    });

    return { dcHeros, removeHero, newHero, newHeroRef, addHero };
  },
};
</script>

<style></style>
