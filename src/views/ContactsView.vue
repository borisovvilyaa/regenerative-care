<template>
  <Main />
  <Contact />
</template>

<script>
import Main from "@/components/Contact/Main.vue";
import Contact from "@/components/Contact/Contact.vue";

export default {
  name: "HomeView",
  components: {
    Main,
    Contact,
  },
};
</script>

<!-- <style>
body {
  background: #000 !important;
}
</style> -->
