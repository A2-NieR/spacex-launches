<template>
  <div class="apollo container-lg">
    <h1 class="fw-bolder text-center p-5 m-5">SpaceX 🤝 GraphQL</h1>
    <LaunchList
      v-if="showList"
      :limit="launchLimit"
      @reLaunch="showList = false"
    />
    <form v-else class="m-4">
      <div class="d-md-flex d-block justify-content-center my-md-5 my-4">
        <p class="display-6 me-md-4 text-muted text-center">Show me the last</p>
        <input
          id="limit"
          v-model="launchLimit"
          type="number"
          placeholder="0"
          class="
            form-control form-control-lg
            text-center
            mx-auto mx-md-2
            mb-md-0 mb-2
          "
          style="max-width: 80px"
        />
        <p class="display-6 ms-md-4 text-muted text-center">SpaceX missions.</p>
      </div>

      <div class="d-flex justify-content-center">
        <button
          class="btn btn-success btn-lg m-3 d-flex align-items-center"
          type="button"
          @click="showList = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-speedometer me-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"
            />
            <path
              fill-rule="evenodd"
              d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
            />
          </svg>
          <span>Launch</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import LaunchList from './components/LaunchList.vue';

export default {
  components: {
    LaunchList
  },
  setup() {
    const showList = ref(false);
    const launchLimit = ref('');

    return { showList, launchLimit };
  }
};
</script>

<style></style>
