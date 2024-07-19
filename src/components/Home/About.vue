<template>
  <div class="container" id="About">
    <div>
      <h2
        class="title-col wow animate__animated animate__fadeInUp animate__fast"
      >
        Excellence in Physician Support
      </h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div
          class="col col-image mb-3 mb-md-0 wow animate__animated animate__fadeInUp animate__fast"
        >
          <img src="@/assets/Home/About/support.png" alt="About Image" />
        </div>
        <div
          class="col col-text-section wow animate__animated animate__fadeInUp animate__fast"
        >
          <p class="text-col">
            Providing physicians with exceptional solutions for their patients
            is our primary mission. Through close partnerships with healthcare
            facilities and distributors, we streamline the ordering process,
            ensure reliable product availability, arrange timely and convenient
            deliveries, maintain optimal inventory levels, and simplify
            invoicing procedures. Regenerative Care offers a wide range of
            allograft processing and preservation techniques to address the
            unique needs of both physicians and patients.
          </p>
        </div>
      </div>
    </div>

    <div>
      <h2
        class="title-col wow animate__animated animate__fadeInUp animate__fast"
      >
        Dedicated Support & Success
      </h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div
          class="col col-text-section wow animate__animated animate__fadeInUp animate__fast"
        >
          <p class="text-col">
            We consistently respond to requests within five minutes, ensuring
            prompt and reliable service. Our commitment to supporting physicians
            and patients has led to the development of a clinically focused
            Customer Success team. The Regenerative Care team understands your
            specific case needs and is dedicated to delivering the correct
            graft, on time, every time. We take pride in offering comprehensive
            support throughout each phase of the allograft order and
            distribution process, using a 360-degree approach to client care.
          </p>
        </div>
        <div
          class="col col-image mb-3 mb-md-0 wow animate__animated animate__fadeInUp animate__fast"
        >
          <img src="@/assets/Home/About/GetItTouch.png" alt="Doctor Image" />
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
      Regenerative Care offers physicians top-quality amniotic membrane
      allografts for chronic wound treatment. Our grafts, which are
      FDA-registered and chorion-free, undergo stringent testing for
      communicable diseases to ensure safety. We adhere to ethical procurement
      standards and provide comprehensive back office support to facilitate
      consistent reimbursement. For more details, please visit our FAQ page.
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
