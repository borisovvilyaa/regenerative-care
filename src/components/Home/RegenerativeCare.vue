<template>
  <div class="main">
    <Line message="Regenerative Care" theme="dark"></Line>

    <div class="container">
      <div class="title-col">Regenerative Care</div>
      <div class="text-col text-start">
        <span class="fw-bold">- Welcome to Regenerative Care</span>, your
        trusted partner in comprehensive wound care solutions. At Regenerative
        Care, we understand the challenges and complexities associated with
        wound management. That's why we are dedicated to offering advanced
        products and resources to support optimal healing outcomes.
      </div>

      <!-- Podiatrists Section -->
      <h2 class="title-col">Insurance Verification Request</h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div class="col col-image mb-3 mb-md-0">
          <img src="@/assets/Home/RC/Insurance.jpg" alt="About Image" />
        </div>
        <div class="col col-text-section">
          <p class="text-col">
            Identify your patient or patients with a chronic wound. In order for
            our Insurance Verification Request to get approved, the patient
            needs medical notes proving treatment has been attempted to heal the
            chronic wound for over 30 days. After IVR is approved, we will ship
            you your Amniotic Tissue on net pay 60 terms.
          </p>
        </div>
      </div>

      <!-- Dermatologists Section -->
      <h2 class="title-col">Healing</h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div class="col col-text-section">
          <p class="text-col">
            Once you receive your Amniotic Tissue you're ready to apply it to
            the chronic wound. Take pictures before each application with the
            ruler included in your shipment. This will prove medical necessity
            as you reapply your Amniotic Tissue each week to show the wound is
            healing and that the proper size patch was used during treatment.
          </p>
        </div>
        <div class="col col-image mb-3 mb-md-0">
          <img src="@/assets/Home/RC/Healing.jpg" alt="Doctor Image" />
        </div>
      </div>

      <!-- Surgeons Section -->
      <h2 class="title-col">Clawbacks</h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div class="col col-image mb-3 mb-md-0">
          <img src="@/assets/Home/RC/Clawbacks.jpg" alt="Baby Image" />
        </div>
        <div class="col col-text-section">
          <p class="text-col">
            Our wound billing specialists will comb through your medical notes
            in your EMR to make sure the proper verbiage is used to avoid any
            future clawbacks. This is the #1 reason physicians and NP's receive
            clawbacks from Medicare by improperly documenting the patient's
            progress, current state, and diagnosis codes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Line from "../Line.vue";

export default {
  name: "RegenerativeCare",
  components: {
    Line,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #fff;
  color: #000;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.title-col {
  font-weight: 100;
  font-size: 6.5vh; /* Responsive font size */
  letter-spacing: -0.05em;
  line-height: 1.1;
  margin-top: 5vw; /* Responsive margin */
  margin-bottom: 3vw; /* Responsive margin */

  &:first-of-type {
    margin-top: 3vw; /* Responsive margin */
  }
}

.text-col {
  text-align: center;
  letter-spacing: 0em;
  line-height: 1.4;
  font-size: 18px;
  width: 90%;
  margin: auto; /* Center align on smaller screens */

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for smaller screens */
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
</style>
