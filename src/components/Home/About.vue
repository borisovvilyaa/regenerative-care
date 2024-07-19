<template>
  <div class="container">
    <div>
      <h2
        class="title-col wow animate__animated animate__fadeInUp animate__fast"
      >
        Driving a Healthier Future
      </h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div
          class="col col-image mb-3 mb-md-0 wow animate__animated animate__fadeInUp animate__fast"
        >
          <img src="@/assets/Home/About/Holding.webp" alt="About Image" />
        </div>
        <div
          class="col col-text-section wow animate__animated animate__fadeInUp animate__fast"
        >
          <p class="text-col">
            Our mission is to provide physicians with the best solutions for
            their patients. We collaborate closely with facilities and
            distributor partners to simplify the ordering process, ensure
            product supply, arrange convenient and timely delivery, maintain
            inventory levels, and streamline invoicing. Regenerative Care offers
            nearly every allograft processing and preservation technique
            available today to meet the unique needs of physicians and patients.
          </p>
        </div>
      </div>
    </div>

    <div>
      <h2
        class="title-col wow animate__animated animate__fadeInUp animate__fast"
      >
        Customer Success
      </h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div
          class="col col-text-section wow animate__animated animate__fadeInUp animate__fast"
        >
          <p class="text-col">
            Historically, we fulfill over 98% of orders placed, responding to
            requests in five minutes or less. Through our efforts to support
            physicians and patients, we have developed a clinically minded
            Customer Success support team. The Regenerative Care team
            understands your specific case needs and is dedicated to ensuring
            you get the correct graft, on time, every time. We pride ourselves
            on supporting our clients with a comprehensive 360-degree approach
            through each phase of the allograft order and distribution process.
          </p>
        </div>
        <div
          class="col col-image mb-3 mb-md-0 wow animate__animated animate__fadeInUp animate__fast"
        >
          <img src="@/assets/Home/About/Doctor.webp" alt="Doctor Image" />
        </div>
      </div>
    </div>
    <div
      class="title-col wow animate__animated animate__fadeInUp animate__fast"
    >
      What We Provide
    </div>
    <div
      class="text-col w-100 text-start wow animate__animated animate__fadeInUp animate__fast pb-5"
    >
      At Regenerative Care, we supply physicians with amniotic membrane
      allografts for the treatment of chronic wounds. Our grafts are
      FDA-registered, safe, chorion-free, and tested for communicable diseases.
      We ensure ethical procurement and provide back office support to guarantee
      consistent reimbursement. For more information, visit our FAQ page.
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";

export default {
  name: "AboutSection",
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
.title-col {
  font-weight: 100;
  font-size: 6.5vh; /* Responsive font size */
  color: #fff;
  letter-spacing: -0.05em;
  line-height: 1.1;
  margin-top: 5vw; /* Responsive margin */
  margin-bottom: 3vw; /* Responsive margin */

  &:first-of-type {
    margin-top: 3vw; /* Responsive margin */
  }
}

.text-col {
  color: #fff;
  text-align: center;
  letter-spacing: 0em;
  line-height: 1.4;
  font-size: 18px;
  text-align: center;
  width: 90%;
  @media (max-width: 992px) {
    font-size: 100%;
  }
}

.col-text-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-image {
  img {
    border-radius: 15px;
    max-width: 100%;
    height: auto;
  }
}

@media (min-width: 768px) {
  .d-flex.flex-column-reverse.flex-md-row {
    flex-direction: row-reverse;
  }

  .title-col {
    font-size: 3rem;
    margin-top: 100px;
    margin-bottom: 30px;
  }
}

.animate__fast {
  animation-duration: 0.5s !important;
}
</style>
