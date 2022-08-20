<template>
  <div class="row">
    <div class="col">
      <div class="row q-col-gutter-lg">
        <div
          v-for="image of images"
          :key="image.src"
          :class="image.class"
          class="cursor-pointer"
          @click="$refs.viewer.open(images, image.name)"
        >
          <q-img class="img" :alt="image.name" :src="image.src" />
        </div>
      </div>
    </div>

    <image-viewer ref="viewer" />
  </div>
</template>

<script>
import ImageViewer from "src/components/ImageViewer.vue";
export default {
  components: { ImageViewer },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>