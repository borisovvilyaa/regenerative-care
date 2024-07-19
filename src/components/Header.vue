<template>
  <header
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    :class="{ 'header-hidden': !showHeader }"
  >
    <div class="container-fluid">
      <a href="/" class="navbar-brand">
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
        @click="toggleMenu"
      >
        <!-- Customize toggler icon for right-to-left animation -->
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: isMenuOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="/#Home" class="nav-link" @click="closeMenu">Home</a>
          </li>
          <li class="nav-item">
            <a href="/#About" class="nav-link" @click="closeMenu"
              >About Company</a
            >
          </li>
          <li class="nav-item">
            <a href="/#WhatWeDo" class="nav-link" @click="closeMenu"
              >What we do</a
            >
          </li>
          <li class="nav-item">
            <a href="/#FAQ" class="nav-link" @click="closeMenu">FAQ</a>
          </li>
          <li class="nav-item">
            <a href="/#Contacts" class="nav-link" @click="closeMenu"
              >Contacts</a
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
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
    window.scrollTo(0, 0);
    next();
  },
};
</script>

<style scoped>
header {
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: transform 0.3s ease, opacity 0.3s ease;
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
}

.navbar-toggler-icon {
  /* Customize toggler icon if needed */
}

/* Adjust dropdown direction */
.dropdown-menu-end {
  right: 0;
  left: auto;
}

/* Make all nav links white */
.navbar-dark .navbar-nav .nav-link {
  color: white;
  padding: 0.5rem 1rem;
}

/* Improve mobile menu links */
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem;
  }

  .navbar-nav .nav-item {
    margin-bottom: 1rem;
  }

  .navbar-nav .nav-link {
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    display: block;
    border-bottom: 1px solid #fff;
  }

  .navbar-nav .nav-link:hover {
    color: #ddd;
  }
}

/* Class to disable body scrolling */
.overflow-hidden {
  overflow: hidden;
}
</style>
