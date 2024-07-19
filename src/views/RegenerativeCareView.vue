<template>
  <Main />
  <RegenerativeCare />
</template>

<script>
import Main from "@/components/Regenerative/Main.vue";
import RegenerativeCare from "@/components/Regenerative/RegenerativeCare.vue";

export default {
  name: "HomeView",
  components: {
    Main,
    RegenerativeCare,
  },
};
</script>

<!-- <style>
body {
  background: #000 !important;
}
</style> -->
