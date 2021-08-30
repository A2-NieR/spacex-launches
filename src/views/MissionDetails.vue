<template>
  <div class="container">
    <h1 class="fw-bold text-center m-lg-5 m-3">
      {{ result.launch.mission_name }}
    </h1>
    <div class="d-flex flex-column align-items-center">
      <img
        v-if="result.launch.links.mission_patch"
        :src="result.launch.links.mission_patch"
        alt="mission patch"
        class="h-25 w-25 m-3"
      />
      <img
        v-else
        :src="result.launch.links.flickr_images[0]"
        alt="mission photo"
        class="h-25 w-25 m-3"
      />
      <h6 class="m-2 mt-4">Rocket: {{ result.launch.rocket.rocket_name }}</h6>
      <h6 class="m-2">
        Launch site: {{ result.launch.launch_site.site_name_long }}
      </h6>
      <h6 class="text-muted m-2">
        Launch date: {{ result.launch.launch_date_utc }}
      </h6>
    </div>

    <p class="m-4">{{ result.launch.details }}</p>
    <div class="d-flex justify-content-center m-3">
      <a :href="result.launch.links.wikipedia">Wikipedia Link</a>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mx-2">
      <div
        v-for="image in result.launch.links.flickr_images"
        :key="image"
        class="row g-md-3 g-2"
      >
        <img
          :src="image"
          alt="flickr image"
          style="height: 25vw; object-fit: contain"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center m-3 mt-5">
      <button
        class="btn btn-primary btn-lg mb-5 d-flex align-items-center"
        @click="toMissions"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-grid-fill me-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"
          />
        </svg>
        <span>Go Back</span>
      </button>
    </div>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { LAUNCH_DETAILS } from '../graphql/queries';

export default {
  props: {
    id: {
      type: String,
      default: '0'
    }
  },
  setup(props) {
    const { result, loading, error } = useQuery(LAUNCH_DETAILS, {
      id: props.id
    });

    return { result, loading, error };
  },
  methods: {
    toMissions() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
