<template>
  <div class="d-flex justify-content-center">
    <button
      class="btn btn-warning btn-lg mb-5 d-flex align-items-center"
      @click="reLaunch"
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

  <div class="apollo container-lg">
    <div v-if="loading" class="text-center display-6 text-muted">
      Loading...
    </div>
    <div v-else-if="error" class="text-center text-danger">
      Error: {{ error.message }}
    </div>
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mx-2">
      <div v-for="launch in result.launchesPast" :key="launch.id" class="col">
        <LaunchCard :launch="launch" />
      </div>
    </div>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { PAST_LAUNCHES } from '../graphql/queries';
import LaunchCard from './LaunchCard.vue';

export default {
  components: {
    LaunchCard
  },
  props: {
    limit: {
      type: Number,
      default: 3
    }
  },
  emits: { reLaunch: false },
  setup(props) {
    const { result, loading, error } = useQuery(PAST_LAUNCHES, {
      limit: props.limit
    });

    return { result, loading, error };
  },
  methods: {
    reLaunch() {
      this.$emit('reLaunch', true);
    }
  }
};
</script>

<style></style>
