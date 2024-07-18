<template>
  <div class="main-section">
    <Line message="Doctors" theme="dark" />

    <div class="container py-5">
      <div class="row wow animate__animated animate__fadeInUp animate__fast">
        <div class="col-12">
          <h2 class="text-center">Regenerative Care</h2>
          <p class="lead text-center">
            Enhancing Quality of Life with Regenerative Care. At Regenerative
            Care, we're committed to pioneering advances in wound care solutions
            that redefine patient outcomes and elevate clinical standards. Our
            comprehensive approach empowers healthcare professionals to
            integrate cutting-edge treatments seamlessly into their practices,
            ensuring superior care and lasting impact.
          </p>
        </div>
      </div>

      <div class="row my-4">
        <div
          class="col-12 col-md-6 wow animate__animated animate__fadeInUp animate__fast"
        >
          <h3>Empowering Healthcare Professionals</h3>
          <p>
            Partner with us to optimize treatment protocols and achieve superior
            patient outcomes. Our team offers ongoing support and education to
            seamlessly integrate our products into your practice.
          </p>
        </div>
        <div
          class="col-12 col-md-6 wow animate__animated animate__fadeInUp animate__fast"
        >
          <h3>Innovative Wound Care Solutions</h3>
          <p>
            Regenerative Care specializes in amniotic tissue grafting products
            for complex wounds, accelerating healing and improving patient
            quality of life.
          </p>
        </div>
      </div>

      <div class="row my-4">
        <div
          class="col-12 col-md-6 wow animate__animated animate__fadeInUp animate__fast"
        >
          <h3>Medicare Coverage and Reimbursement</h3>
          <p>
            Our products are covered by Medicare Part B, ensuring accessibility
            and affordability while facilitating reimbursement for your
            services.
          </p>
        </div>
        <div
          class="col-12 col-md-6 wow animate__animated animate__fadeInUp animate__fast"
        >
          <h3>Join the Regenerative Care Network</h3>
          <p>
            Join healthcare professionals dedicated to advancing wound care
            excellence and transforming patient lives.
          </p>
        </div>
      </div>

      <div class="row my-4">
        <div
          class="col-12 text-center wow animate__animated animate__fadeInUp animate__fast"
        >
          <router-link
            to="/contacts"
            class="btn btn-get wow animate__animated animate__fadeInUp"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";
import Line from "@/components/Line.vue";

export default {
  name: "MainSection",
  components: {
    Line,
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  background-color: #fff;
  padding: 2rem 0;

  h2,
  h3 {
    color: #000;
  }

  p {
    color: #555;
  }

  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
}

.btn-get {
  background-color: #000;
  color: #fff;
  border-radius: 0;
  padding: 10px 120px;
  transition: 0.3s;
  &:hover {
    background-color: #000000c2;
    color: #fff;
    transition: 0.3s;
  }
}

.animate__fast {
  animation-duration: 0.5s !important;
}
</style>
