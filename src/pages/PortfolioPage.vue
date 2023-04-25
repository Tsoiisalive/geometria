<template>
  <div class="wrapper q-py-lg">
    <h1 class="text-h6 q-my-none second-font">ПОРТФОЛИО</h1>

    <images-list :images="images" :total-count="totalCount" class="q-py-lg" />
  </div>
</template>

<script>
import ImagesList from "@/components/ImagesList.vue";
import { services } from "@/data/services";
export default {
  components: { ImagesList },
  data() {
    return {
      services: services,
      totalCount: 0,
      images: [],
    };
  },
  created() {
    for (let service of this.services) {
      this.getImages(service);
      console.log(service);
    }
  },
  methods: {
    getImages(service) {
      this.totalCount = this.totalCount + service.imagesCount;

      for (let i = 1; i <= service.imagesCount; i++) {
        this.images.push({
          src: require(`@/assets/pages/${service.tag}/${service.tag + i}.jpg`),
          name: `${service.tag} портфолио ${i}`,
        });
      }
    },
  },
};
</script>
