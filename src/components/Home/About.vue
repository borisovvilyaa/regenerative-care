<template>
  <div class="container">
    <div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
      <h2 class="title-col">Driving a Healthier Future</h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div class="col col-image mb-3 mb-md-0">
          <img src="@/assets/Home/About/Holding.webp" alt="About Image" />
        </div>
        <div class="col col-text-section">
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

    <div
      class="wow animate__animated fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <h2 class="title-col">Customer Success</h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div class="col col-text-section">
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
        <div class="col col-image mb-3 mb-md-0">
          <img src="@/assets/Home/About/Doctor.webp" alt="Doctor Image" />
        </div>
      </div>
    </div>

    <div
      class="wow animate__animated fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <h2 class="title-col">DONOR SCREENING</h2>
      <div class="d-flex flex-column-reverse flex-md-row">
        <div class="col col-image mb-3 mb-md-0">
          <img src="@/assets/Home/About/Baby.webp" alt="Baby Image" />
        </div>
        <div class="col col-text-section">
          <p class="text-col">
            All donors are recovered in the United States and meet FDA, AATB,
            and applicable state requirements. Potential donors are screened for
            risk factors associated with infectious diseases and medical
            conditions that might disqualify them from donation. Historically,
            fewer than seven percent of referred donors pass the screening
            process and are accepted as eligible donors.
          </p>
        </div>
      </div>
    </div>

    <div
      class="title-col wow animate__animated fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      What We Do
    </div>
    <div
      class="text-col w-100 text-start wow animate__animated fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      At Regenerative Care, we supply physicians with amniotic membrane
      allografts for the treatment of chronic wounds. Our grafts are
      FDA-registered, safe, chorion-free, and tested for communicable diseases.
      We ensure ethical procurement and provide back office support to guarantee
      consistent reimbursement. For more information, visit our FAQ page.
    </div>

    <div
      class="title-col wow animate__animated fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      How Do We Compare To Other Tissue Banks?
    </div>
    <div
      class="text-col w-100 text-start wow animate__animated fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      At Regenerative Care, we are proud to be trusted by medical professionals
      across the country. Here’s how we stand out:
    </div>

    <div
      class="table-responsive wow animate__animated fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <table class="table table-bordered table-dark mt-5 mb-5 rounded">
        <thead>
          <tr>
            <th></th>
            <th>Regenerative Care</th>
            <th>Other Tissue Banks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dual Layer Amnion</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-check text-success"></i></td>
          </tr>
          <tr>
            <td>Naturally Adhering</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-check text-success"></i></td>
          </tr>
          <tr>
            <td>Multiple Sizes</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-check text-success"></i></td>
          </tr>
          <tr>
            <td>Net Pay 30</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-check text-success"></i></td>
          </tr>
          <tr>
            <td>Staff, Physician, & Clinical Support</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-x text-danger"></i></td>
          </tr>
          <tr>
            <td>Billing Support</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-x text-danger"></i></td>
          </tr>
          <tr>
            <td>Reliable Reimbursement</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-x text-danger"></i></td>
          </tr>
          <tr>
            <td>Protection From Clawbacks</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-x text-danger"></i></td>
          </tr>
          <tr>
            <td>24/7 Order Support</td>
            <td><i class="bi bi-check text-success"></i></td>
            <td><i class="bi bi-x text-danger"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import "animate.css";
import WOW from "wow.js";

export default {
  name: "AboutSection",
  mounted() {
    // Initialize WOW.js when component is mounted
    const wow = new WOW({
      boxClass: "wow", // Default box class name
      animateClass: "animate__animated", // Default animation class
      offset: 200, // Offset (in px) from the top of the window where the animation starts
      mobile: false, // Whether to detect and animate on mobile devices
      live: true, // Whether to add the animation class to an element only once
    });
    wow.init();
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
</style>
