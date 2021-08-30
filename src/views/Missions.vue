<template>
  <div class="apollo container-lg">
    <h1 class="fw-bolder text-center p-5 m-5">
      SpaceX Past {{ limit }} Missions
    </h1>

    <div class="d-flex justify-content-center">
      <button
        class="btn btn-warning btn-lg mb-5 d-flex align-items-center"
        @click="toHome"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-reply-fill me-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"
          />
        </svg>
        <span>Re-Launch</span>
      </button>
    </div>

    <LaunchList v-if="limit" :limit="limit" />
  </div>
</template>

<script>
import { ref } from 'vue';
import LaunchList from '../components/LaunchList.vue';

export default {
  components: { LaunchList },
  setup() {
    const limit = ref(parseInt(localStorage.limit));

    return { limit };
  },
  methods: {
    toHome() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style></style>
