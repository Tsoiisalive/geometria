<template>
  <div class="row container" style="min-height: inherit">
    <q-item
      v-for="service of services"
      :key="service.id"
      class="col-12 col-md-6 q-pa-none filter"
      clickable
      :to="{
        name: 'Service',
        params: { id: service.id },
      }"
    >
      <q-img class="img" :src="service.src" :alt="service.name">
        <div
          class="absolute-full text-h6 flex flex-center text-uppercase"
          style="background: transparent"
        >
          {{ service.name }}
        </div>
      </q-img>
    </q-item>
  </div>
</template>

<script>
import { services } from "src/data/services";
export default {
  data() {
    return {
      services,
    };
  },
};
</script>

<style lang="scss">
@keyframes filter {
  from {
    filter: grayscale(1);
  }
  to {
    filter: grayscale(0);
  }
}
.filter {
  filter: grayscale(1);
  &:hover {
    animation-name: filter;
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }
}
.img {
  height: calc((100vh - 66px) / 2) !important;

  body.screen--xs & {
    height: auto !important;
  }
}
</style>