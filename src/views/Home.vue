<template>
  <div class="vh-100 vw-100 d-flex align-items-center">
    <div class="container d-flex flex-column justify-content-center">
      <h1 class="fw-bolder text-center p-5 mb-3">SpaceX 🤝 GraphQL</h1>
      <div class="fs-5 text-muted text-center">
        Request and display information about past SpaceX missions from their
        publicly available GraphQL API. <br />
        To start, simply enter the number of missions you want do view below.
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-arrow-down-square-fill w-100 mt-5"
        viewBox="0 0 16 16"
      >
        <path
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"
        />
      </svg>
      <form>
        <div class="d-md-flex d-block justify-content-center my-md-5 my-4">
          <p class="display-6 me-md-4 text-muted text-center">
            Show me the last
          </p>
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
          <p class="display-6 ms-md-4 text-muted text-center">
            SpaceX missions.
          </p>
        </div>

        <div class="d-flex justify-content-center">
          <button
            class="btn btn-success btn-lg m-3 d-flex align-items-center"
            type="button"
            @click="toMissions(launchLimit)"
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
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const launchLimit = ref(0)

    return { launchLimit }
  },
  methods: {
    toMissions(value) {
      localStorage.limit = limit.value
      this.$router.push({ name: 'Missions', params: { limit: value } })
    }
  }
}
</script>

<style></style>
