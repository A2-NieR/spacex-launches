<template>
  <div class="apollo container-lg">
    <div v-if="loading" class="text-center display-6 text-muted">
      Loading...
    </div>
    <div v-else-if="error" class="text-center text-danger">
      Error: {{ error.message }}
    </div>
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mx-2">
      <div v-for="launch in result.launchesPast" :key="launch.id" class="col">
        <LaunchCard :launch="launch" style="cursor: pointer" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { PAST_LAUNCHES } from '../graphql/queries';
import LaunchCard from './LaunchCard.vue';

export default {
  components: {
    LaunchCard
  },
  setup() {
    const missionAmount = ref(3);

    if (localStorage.limit) {
      missionAmount.value = parseInt(localStorage.limit);
    }

    const { result, loading, error } = useQuery(PAST_LAUNCHES, {
      limit: missionAmount.value
    });

    return { result, loading, error };
  }
};
</script>

<style></style>
