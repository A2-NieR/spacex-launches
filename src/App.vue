<template>
  <div class="apollo">
    <h1>SpaceX Launches</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>{{ result.launchesPast[0] }}</div>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { PAST_LAUNCHES } from './graphql/queries';
import { watch } from 'vue-demi';

export default {
  setup() {
    const { result, loading, error } = useQuery(PAST_LAUNCHES, { limit: 20 });

    watch(result, (value) => console.log(value));
    return { result, loading, error };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
