<template>
  <header
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    :class="{ 'header-hidden': !showHeader }"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- Customize toggler icon for right-to-left animation -->
        <span class="navbar-toggler-icon toggler-right"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
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
            <router-link class="nav-link" to="/contacts">Contacts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      lastScrollTop: 0,
      showHeader: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        // Downscroll code
        this.showHeader = false;
      } else {
        // Upscroll code
        this.showHeader = true;
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Поверх контента */
  transition: transform 0.3s ease, opacity 0.3s ease;
  img {
    height: 50px;
  }
}

.header-hidden {
  transform: translateY(-100%);
  opacity: 0;
}

.navbar-toggler {
  border-color: transparent;
  outline: none;
}

/* Custom style for toggler icon */
.navbar-toggler .toggler-right {
  /* Right to left animation */
  transform: rotate(180deg);
}

/* Adjust dropdown direction */
.dropdown-menu-end {
  right: 0;
  left: auto;
}
</style>
