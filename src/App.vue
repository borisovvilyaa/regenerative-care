<template>
  <div>
    <!-- Показываем прелоадер только если isLoading равно true -->
    <transition name="fade">
      <div v-if="isLoading" class="preloader">
        <!-- Анимированный прелоадер -->
        <div class="loader"></div>
      </div>
    </transition>

    <!-- Рендерим заголовок и контент только если isLoading равно false -->
    <Header v-if="!isLoading"></Header>
    <router-view v-if="!isLoading" />

    <!-- Добавляем футер после загрузки данных -->
    <Footer v-if="!isLoading"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isLoading: true, // Начальное состояние загрузки
    };
  },
  mounted() {
    // Имитация загрузки данных (можно заменить на реальный код загрузки данных)
    setTimeout(() => {
      this.isLoading = false; // Устанавливаем isLoading в false после загрузки данных
    }, 1000); // Пример задержки загрузки (2 секунды)
  },
};
</script>

<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Черный фон с прозрачностью 90% */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Поверх других элементов */
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#ffffff 0 0);
  --r1: radial-gradient(farthest-side at bottom, #ffffff 93%, #ffffff);
  --r2: radial-gradient(farthest-side at top, #ffffff 93%, #ffffff);
  background: var(--c), var(--r1), var(--r2), var(--c), var(--r1), var(--r2),
    var(--c), var(--r1), var(--r2);
  background-repeat: no-repeat;
  animation: l2 1s infinite alternate;
}

@keyframes l2 {
  0%,
  25% {
    background-size: 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px, 8px 0,
      8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(50% - 2px), 0 calc(50% + 2px), 50% 50%,
      50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px),
      100% calc(50% + 2px);
  }
  50% {
    background-size: 8px 100%, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px, 8px 0,
      8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%,
      50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px),
      100% calc(50% + 2px);
  }
  75% {
    background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px,
      8px 0, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%,
      50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%, 100% calc(50% - 2px),
      100% calc(50% + 2px);
  }
  95%,
  100% {
    background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px,
      8px 100%, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%,
      50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%, 100% calc(0% - 2px),
      100% calc(100% + 2px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
