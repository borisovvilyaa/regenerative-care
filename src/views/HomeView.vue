<template>
  <Main></Main>
  <Line message="About Company" theme="light"></Line>
  <About></About>
  <RegenerativeCare></RegenerativeCare>
  <FAQ></FAQ>
  <Contact></Contact>
</template>

<script>
import Main from "@/components/Home/Main.vue";
import About from "@/components/Home/About.vue";
import Line from "@/components/Line.vue";
import RegenerativeCare from "@/components/Home/RegenerativeCare.vue";
import FAQ from "@/components/Home/FAQ.vue";
import Contact from "@/components/Home/Contact.vue";

export default {
  name: "HomeView",
  components: {
    Main,
    About,
    Line,
    RegenerativeCare,
    FAQ,
    Contact,
  },
};
</script>

<style>
body {
  background: #000 !important;
}
</style>
