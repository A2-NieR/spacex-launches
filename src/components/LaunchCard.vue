<template>
  <div class="card h-100 border-0 shadow">
    <div>
      <img
        v-if="launch.links.flickr_images.length"
        :src="launch.links.flickr_images[0]"
        alt="mission image"
        class="card-img-top"
        style="width: 100%; height: 25vw; object-fit: cover"
      />
      <img
        v-else
        :src="launch.links.mission_patch"
        alt="mission patch"
        class="card-img-top"
        style="width: 100%; height: 25vw; object-fit: contain"
      />
    </div>

    <div class="card-body">
      <div class="row d-flex align-items-center">
        <div class="col-lg-3 d-xl-block d-none">
          <img
            v-if="launch.links.mission_patch_small"
            :src="launch.links.mission_patch_small"
            alt="mission patch small"
            class=""
            style="width: 7.5vh; height: 7.5vh; object-fit: contain"
          />
          <img
            v-else
            :src="launch.links.flickr_images[0]"
            alt="launch image"
            class=""
            style="width: 7.5vh; height: 7.5vh; object-fit: cover"
          />
        </div>
        <div class="col-9">
          <h5 class="card-title">{{ launch.mission_name }}</h5>
          <div class="card-text">Rocket: {{ launch.rocket.rocket_name }}</div>
          <div class="card-text text-muted">
            Launch Date: {{ launch.launch_date_utc }}
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
  }
};
</script>

<style></style>
