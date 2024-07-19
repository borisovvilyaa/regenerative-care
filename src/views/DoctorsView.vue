<template>
  <Main />
  <Doctors />
</template>

<script>
import Main from "@/components/Doctors/Main.vue";
import Doctors from "@/components/Doctors/Doctors.vue";

export default {
  name: "HomeView",
  components: {
    Main,
    Doctors,
  },
};
</script>

<!-- <style>
body {
  background: #000 !important;
}
</style> -->
