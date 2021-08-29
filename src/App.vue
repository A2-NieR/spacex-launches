<template>
  <div class="apollo container-lg">
    <h1 class="fw-bolder text-center m-5">SpaceX 🤝 GraphQL</h1>
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
import { PAST_LAUNCHES } from './graphql/queries';
import { watch } from 'vue-demi';
import LaunchCard from './components/LaunchCard.vue';

export default {
  components: {
    LaunchCard
  },
  setup() {
    const { result, loading, error } = useQuery(PAST_LAUNCHES, { limit: 21 });

    watch(result, (value) => console.log(value));
    return { result, loading, error };
  }
};
</script>

<style></style>
