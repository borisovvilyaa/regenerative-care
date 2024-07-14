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
        @click="toggleMenu"
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
      isMenuOpen: false, // Track the state of the menu
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Toggle body class to prevent scrolling
      if (this.isMenuOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
};
</script>

<style scoped>
header {
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
  background-color: black !important;
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
  padding: 0.5rem 1rem; /* Добавим отступы для удобства нажатия */
}

/* Improve mobile menu links */
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem; /* При необходимости, добавьте отступы */
  }

  .navbar-nav .nav-item {
    margin-bottom: 1rem; /* Отступ между элементами меню */
  }

  .navbar-nav .nav-link {
    color: white;
    font-size: 1.2rem; /* Увеличим размер шрифта для удобства */
    padding: 0.5rem 0; /* Уменьшим вертикальные отступы */
    display: block;
    border-bottom: 1px solid #fff;
  }

  .navbar-nav .nav-link:hover {
    color: #ddd; /* Изменение цвета при наведении */
  }
}

/* Custom class to disable body scrolling */
.overflow-hidden {
  overflow: hidden;
}
</style>
