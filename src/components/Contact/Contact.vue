<template>
  <div class="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Get in Touch</h3>
        </div>
        <div class="col-md-8">
          <ul class="contact-list">
            <li>
              <i class="bi bi-telephone-fill"></i>
              Phone: 833-Regenerative Care
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              New Customers:
              <a href="mailto:ORDERS@RegenerativeCare.COM"
                >ORDERS@RegenerativeCare.COM</a
              >
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              Current Customers:
              <a href="mailto:SUPPORT@RegenerativeCare.COM"
                >SUPPORT@RegenerativeCare.COM</a
              >
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              Distributor Inquiries:
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
export default {
  name: "ContactSection",
};
</script>

<style scoped>
.contact-section {
  padding: 50px 0;
  color: #fff;
  h3 {
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .contact-list {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      i {
        margin-right: 10px;
        color: #007bff;
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
  }

  @media (max-width: 767px) {
    .row {
      flex-direction: column;

      .col-md-4,
      .col-md-8 {
        width: 100%;
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
