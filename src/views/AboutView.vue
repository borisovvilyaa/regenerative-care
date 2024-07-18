<template>
  <Main />
  <Line message="About Company" theme="light" />
  <About />
</template>

<script>
import Main from "@/components/About/Main.vue";
import Line from "@/components/Line.vue";
import About from "@/components/About/About.vue";

export default {
  name: "HomeView",
  components: {
    Main,
    Line,
    About,
  },
};
</script>

<style>
body {
  background: #000 !important;
}
</style>
