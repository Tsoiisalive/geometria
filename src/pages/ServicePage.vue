<template>
  <div class="row wrapper" v-if="service">
    <div class="col q-my-lg">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <q-img
            class="img"
            :alt="service.name"
            :src="require(`@/assets/pages/${service.tag}/${service.tag}.jpg`)"
          />
        </div>
        <div class="col-12 col-md-6 text-grey">
          <h1
            class="text-h6 text-weight-bold q-mt-none second-font text-uppercase"
          >
            {{ service.name }}
          </h1>
          <p>{{ service.fullDescription }}</p>
        </div>

        <div class="col-12">
          <h2
            class="text-subtitle1 q-mt-none q-mb-lg second-font text-uppercase"
          >
            ФОТО
          </h2>

          <images-list :images="images" :total-count="service.imagesCount" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from "@/data/services";
import ImagesList from "@/components/ImagesList.vue";

export default {
  components: { ImagesList },
  data() {
    return {
      service: null,
      imagesCount: 3,
      images: [],
    };
  },
  created() {
    const id = this.$route.params.id;
    this.service = services.find((service) => service.id === +id);

    this.getImages();
  },
  methods: {
    getImages() {
      for (let i = 1; i <= this.service.imagesCount; i++) {
        this.images.push({
          src: require(`@/assets/pages/${this.service.tag}/${this.service.tag + i}.jpg`),
          name: `${this.service.tag} портфолио ${i}`,
        });
      }
    },
  },
};
</script>

<style></style>
