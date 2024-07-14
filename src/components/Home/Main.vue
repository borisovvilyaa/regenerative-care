<template>
  <div class="main">
    <div class="container">
      <h2>
        <span class="journey">YOUR JOURNEY TO RECOVERY</span>
        <br />
        <span class="begins-now">BEGINS NOW</span>
      </h2>
      <h3 class="subtitle">
        Regenerative Care: Enhancing Seniors' Quality of Life Nationwide
      </h3>
      <p class="subtext">
        Founded in 2015, Regenerative Care has grown into a dedicated team
        serving seniors across all 50 states. Our mission is to enhance the
        quality of life for elderly patients, ensuring comfort and dignity in
        their later years.
      </p>
      <!-- <button class="cta-button">Learn More</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection",
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
