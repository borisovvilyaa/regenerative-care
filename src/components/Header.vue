<template>
  <header
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    :class="{ 'header-hidden': !showHeader }"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="d-inline-block align-text-top"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <!-- Customize toggler icon for right-to-left animation -->
        <span class="navbar-toggler-icon toggler-right"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: isMenuOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about-company" class="nav-link" @click="closeMenu"
              >About Company</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/regenerative-care"
              class="nav-link"
              @click="closeMenu"
              >What we do</router-link
            >
          </li>
          <!---
          <li class="nav-item">
            <router-link to="/doctors" class="nav-link" @click="closeMenu"
              >Doctors</router-link
            >
          </li>     
          -->

          <li class="nav-item">
            <router-link to="/faq" class="nav-link" @click="closeMenu"
              >FAQ</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contacts" class="nav-link" @click="closeMenu"
              >Contacts</router-link
            >
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
      isMenuOpen: false,
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
      if (st > this.lastScrollTop && st > 100) {
        // Adjust the scroll distance as needed
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Toggle body class to prevent scrolling
      if (this.isMenuOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.classList.remove("overflow-hidden");
    },
  },
  beforeRouteUpdate(to, from, next) {
    // Scroll to top of the page when route changes
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<style scoped>
header {
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: transform 0.3s ease, opacity 0.3s ease; /* Updated transition properties */
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #054052 !important;
}

.navbar img {
  height: 50px;
}

.header-hidden {
  transform: translateY(-100%);
  opacity: 0;
}

.navbar-toggler {
  border-color: transparent;
  outline: none;
  &:focus {
    box-shadow: none;
  }
}

/* Custom style for toggler icon */
.navbar-toggler .toggler-right {
  transform: rotate(180deg);
}

/* Adjust dropdown direction */
.dropdown-menu-end {
  right: 0;
  left: auto;
}

/* Make all nav links white */
.navbar-dark .navbar-nav .nav-link {
  color: white;
  padding: 0.5rem 1rem; /* Add padding for easier clicking */
}

/* Improve mobile menu links */
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem; /* Add padding if necessary */
  }

  .navbar-nav .nav-item {
    margin-bottom: 1rem; /* Margin between menu items */
  }

  .navbar-nav .nav-link {
    color: white;
    font-size: 1.2rem; /* Increase font size for better visibility */
    padding: 0.5rem 0; /* Reduce vertical padding */
    display: block;
    border-bottom: 1px solid #fff;
  }

  .navbar-nav .nav-link:hover {
    color: #ddd; /* Change color on hover */
  }
}

/* Custom class to disable body scrolling */
.overflow-hidden {
  overflow: hidden;
}
</style>
