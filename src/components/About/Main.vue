<template>
  <div class="main">
    <div class="container">
      <h2>
        <h2>
          <span class="journey wow animate__animated animate__fadeInLeft"
            >ABOUT US</span
          >
          <br />
        </h2>
      </h2>

      <p class="subtext wow animate__animated animate__fadeInUp mt-3">
        Welcome to Regenerative Care, where we are committed to transforming
        healthcare through cutting-edge innovations in allograft tissue. Our
        mission is to harness the power of regenerative medicine to enhance the
        quality of life for patients worldwide. With a focus on pioneering
        treatments and therapies, we aim to redefine standards in healing and
        recovery. Join us in advancing the future of healthcare with
        compassionate care and groundbreaking solutions.
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
.main {
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
    max-width: 700px;
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
