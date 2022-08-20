<template>
  <q-dialog v-model="visible" maximized>
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      infinite
      class="bg-transparent carousel fit"
      control-color="primary"
    >
      <q-carousel-slide
        v-for="image of images"
        :key="image"
        :name="image.name"
        :img-src="image.src"
        class="carousel-slide"
      />

      <template v-slot:control>
        <q-carousel-control position="top-right" :offset="[18, 18]">
          <q-btn
            round
            dense
            unelevated
            color="secondary"
            icon="close"
            v-close-popup
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      images: null,
      slide: null,
    };
  },
  methods: {
    open(images, name) {
      this.images = images;
      this.slide = name;
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-slide {
  background-size: contain;
  background-repeat: no-repeat;
}

.carousel {
  max-width: 100%;
  max-height: 100%;
  box-shadow: none;
  border: 0;
}
</style>
