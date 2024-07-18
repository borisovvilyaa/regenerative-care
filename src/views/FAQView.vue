<template>
  <Main />
  <FAQ />
  <Contact />
</template>

<script>
import Main from "@/components/FAQ/Main.vue";
import FAQ from "@/components/FAQ/FAQ.vue";

export default {
  name: "HomeView",
  components: {
    Main,
    FAQ,
  },
};
</script>

<style>
body {
  background: #000 !important;
}
</style>
