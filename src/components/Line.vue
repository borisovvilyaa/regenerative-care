<template>
  <div class="container">
    <div
      class="line-colon wow animate__animated animate__fadeIn"
      :class="{
        'dark-theme': theme === 'dark',
        'light-theme': theme === 'light',
      }"
    >
      <div class="line-container">
        <div class="line"></div>
      </div>
      <h4
        :class="{
          'text-dark': theme === 'dark',
          'text-light': theme === 'light',
        }"
      >
        {{ message }}
      </h4>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";

export default {
  name: "LineSection",
  props: {
    message: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style scoped>
.line-colon {
  h4 {
    color: #fff;
    margin-top: 30px;
    font-weight: 100;
    font-size: 26px;
  }
}

.line-container {
  height: 1px;
  width: 100%;
  background-color: #00000000; /* Default line color */
}

.line {
  height: 1px;
  width: 20%;
  background-color: #000; /* Default line color */
}

.text-dark {
  color: #000; /* Text color for light theme */
}

.text-light {
  color: #fff; /* Text color for dark theme */
}

/* Dark theme styles */
.dark-theme .line-container {
  background-color: #00000041; /* Line color for dark theme */
}
.dark-theme .line {
  background-color: #000;
}

/* Light theme styles */
.light-theme .line-container {
  background-color: #ffffff7a; /* Line color for light theme */
}
.light-theme .line {
  background-color: #fff; /* Line color for light theme */
}
</style>
