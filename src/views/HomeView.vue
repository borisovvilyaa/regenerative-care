<template>
  <Main />
  <Line message="About Company" theme="light" />
  <About />
  <RegenerativeCare />
  <Doctors />
  <FAQ />
  <Contact />
</template>

<script>
import Main from "@/components/Home/Main.vue";
import About from "@/components/Home/About.vue";
import Line from "@/components/Line.vue";
import RegenerativeCare from "@/components/Home/RegenerativeCare.vue";
import Doctors from "@/components/Home/Doctors.vue";
import FAQ from "@/components/Home/FAQ.vue";
import Contact from "@/components/Home/Contact.vue";

export default {
  name: "HomeView",
  components: {
    Main,
    About,
    Line,
    RegenerativeCare,
    Doctors,
    FAQ,
    Contact,
  },
};
</script>

<style>
body {
  background: #054052 !important;
}
</style>
