<template>
  <div class="main wow animate__animated animate__fadeIn">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Get in Touch</h3>
        </div>
        <div class="col-md-6">
          <ul class="contact-list">
            <li>833-Regenerative Care</li>
            <li>
              NEW CUSTOMERS:
              <a href="mailto:ORDERS@RegenerativeCare.COM"
                >ORDERS@RegenerativeCare.COM</a
              >
            </li>
            <li>
              CURRENT CUSTOMERS:
              <a href="mailto:SUPPORT@RegenerativeCare.COM"
                >SUPPORT@RegenerativeCare.COM</a
              >
            </li>
            <li>
              DISTRIBUTOR INQUIRIES:
              <a href="mailto:DISTRIBUTOR@RegenerativeCare.COM"
                >DISTRIBUTOR@RegenerativeCare.COM</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";

export default {
  name: "ContactSection",
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 50px;
  background: white;

  h3 {
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #333;
  }

  .contact-list {
    list-style: none;
    padding: 0;
    font-size: 16px;
    color: #555;

    li {
      margin-bottom: 10px;
    }

    a {
      color: #007bff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #0056b3;
      }
    }
  }

  @media (max-width: 767px) {
    .row {
      flex-direction: column;

      .col-md-6 {
        margin-bottom: 20px;
      }

      h3 {
        font-size: 30px;
      }

      .contact-list {
        font-size: 14px;
      }
    }
  }
}
</style>
