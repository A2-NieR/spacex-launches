<template>
  <div class="card h-100 border-0 shadow" @click="toDetails">
    <div>
      <img
        v-if="launch.links.flickr_images.length"
        :id="launch.links.flickr_images[0]"
        :src="launch.links.flickr_images[0]"
        alt="mission image"
        class="card-img-top"
        style="height: 25vw; object-fit: cover"
      />
      <img
        v-else
        :id="launch.links.mission_patch"
        :src="launch.links.mission_patch"
        alt="mission patch"
        class="card-img-top"
        style="height: 25vw; object-fit: contain"
      />
    </div>

    <div class="card-body bg-dark bg-gradient text-white rounded-bottom">
      <div class="row d-flex align-items-center">
        <div class="col-lg-3 d-xl-block d-none">
          <img
            v-if="launch.links.mission_patch_small"
            :id="launch.links.mission_patch_small"
            :src="launch.links.mission_patch_small"
            alt="mission patch small"
            style="width: 7.5vh; height: 7.5vh; object-fit: contain"
          />
          <img
            v-else
            :id="launch.links.flickr_images[0]"
            :src="launch.links.flickr_images[0]"
            alt="launch image"
            style="width: 7.5vh; height: 7.5vh; object-fit: cover"
          />
        </div>
        <div class="col-9">
          <h5 class="card-title">{{ launch.mission_name }}</h5>
          <div class="card-text">Rocket: {{ launch.rocket.rocket_name }}</div>
          <div class="card-text text-muted">
            Launch Date: {{ convertDate(launch.launch_date_utc) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    launch: {
      type: Object,
      default: null
    }
  },
  methods: {
    convertDate(dateString) {
      const dt = new Date(dateString);
      return dt.toLocaleString();
    },
    toDetails() {
      this.$router.push({
        name: 'MissionDetails',
        params: { id: this.launch.id }
      });
    }
  }
};
</script>

<style></style>
