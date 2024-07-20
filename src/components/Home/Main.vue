<template>
  <div class="main" id="Home">
    <div class="container">
      <h2>
        <span class="journey wow animate__animated animate__fadeInLeft"
          >Recovery Is Right</span
        >
        <br />
        <span class="begins-now wow animate__animated animate__fadeInRight"
          >Around The Corner</span
        >
      </h2>
      <h3 class="subtitle wow animate__animated animate__fadeInUp">
        Regenerative Care: Enhancing Seniors' Quality of Life Nationwide
      </h3>
      <p class="subtext wow animate__animated animate__fadeInUp">
        Regenerative Care is transforming wound healing with advanced solutions
        and top amniotic allografting products. Partnering with leading experts,
        we ensure precise application through our network of certified
        physicians, enhancing patient outcomes. Committed to innovation, we
        bring hope and recovery to many.
      </p>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";

export default {
  name: "MainSection",
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.main {
  font-family: "Roboto", sans-serif !important;

  background-image: url("@/assets/Home/Home.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: left;

  .container {
    padding-left: 20px;
  }

  h2 {
    max-width: 750px;
    color: #ffffff;
    font-size: 112px;
    text-decoration: none;
    text-align: left;
    letter-spacing: -0.02em;
    line-height: 0.8;

    .journey {
      font-size: 90px;
      font-weight: lighter;
    }

    .begins-now {
      font-size: 90px;
      font-weight: bold;
    }

    @media (max-width: 1200px) {
      font-size: 90px;
      .journey {
        font-size: 72px;
      }
      .begins-now {
        font-size: 48px;
      }
    }
    @media (max-width: 992px) {
      line-height: 0.5;

      font-size: 90px;
      .journey {
        font-size: 52px;
      }
      .begins-now {
        font-size: 48px;
      }
    }
  }
  .subtitle {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
  }

  .subtext {
    color: #ffffff;
    font-size: 18px;
    max-width: 800px;
    font-weight: 100;
  }

  .cta-button {
    margin-top: 30px;
    padding: 15px 30px;
    font-size: 18px;
    color: #ffffff;
    background-color: #007bff; /* Приятный синий цвет */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #0056b3; /* Более темный оттенок синего при наведении */
  }

  @media (max-width: 576px) {
    .subtext {
      font-size: 14px;
    }

    .cta-button {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
}
</style>
