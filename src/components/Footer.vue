<template>
  <footer class="footer bg-black text-white">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h5>Regenerative Care</h5>
          <p>833-Regenerative Care</p>
        </div>
        <div class="col-md-6 text-end">
          <ul class="nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about-company"
                >About Company</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/regenerative-care"
                >Regenerative Care</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/results">Results</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/doctors-suppliers"
                >Doctors, Suppliers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/faq">FAQ</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts"
                >Contacts</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
  bottom: 0;
  left: 0;
  width: 100%;
  a {
    color: white;
    font-weight: 100;
  }
}

.bg-black {
  background-color: #000; /* Черный цвет фона */
}
</style>
