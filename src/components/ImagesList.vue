<template>
  <div class="row">
    <div class="col">
      <div class="row q-col-gutter-lg">
        <div
          v-for="n of count"
          :key="images[n - 1].name"
          :class="classes[(n % 12 || 12) - 1]"
          class="cursor-pointer"
          @click="$refs.viewer.open(images.slice(0, count), images[n - 1].name)"
        >
          <q-img
            class="img"
            :alt="images[n - 1].name"
            :src="images[n - 1].src"
          />
        </div>
      </div>
      <div class="text-center q-mt-md" v-if="count < totalCount">
        <q-btn
          label="Загрузить еще"
          color="grey"
          no-caps
          flat
          class="second-font"
          @click="onCountUp"
        />
      </div>
    </div>

    <image-viewer ref="viewer" />
  </div>
</template>

<script>
import ImageViewer from "@/components/ImageViewer.vue";
export default {
  components: { ImageViewer },
  props: {
    totalCount: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      count: 12,
      classes: [
        "col-12 col-sm-8 col-md-6",
        "col-12 col-sm-4 col-md-3",
        "col-12 col-sm-4 col-md-3",
        "col-12 col-sm-4 col-md-3",
        "col-12 col-sm-4 col-md-3",
        "col-12 col-sm-8 col-md-6",
        "col-12 col-sm-4 col-md-4",
        "col-12 col-sm-4 col-md-4",
        "col-12 col-sm-4 col-md-4",
        "col-12 col-md-6",
        "col-12 col-sm-6 col-md-3",
        "col-12 col-sm-6 col-md-3",
      ],
    };
  },
  methods: {
    onCountUp() {
      const diff = this.totalCount - this.count;
      this.count = diff >= 15 ? this.count + 15 : this.count + diff;
    },
  },
};
</script>

<style></style>
