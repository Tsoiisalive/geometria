<template>
  <div class="row wrapper" v-if="service">
    <div class="col q-my-lg">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <q-img class="img" :alt="service.name" :src="service.src" />
        </div>
        <div class="col-12 col-md-6 text-grey">
          <h1
            class="
              text-h6 text-weight-bold
              q-mt-none
              second-font
              text-uppercase
            "
          >
            {{ service.name }}
          </h1>
          <p>{{ service.fullDescription }}</p>
        </div>
        <div class="col-12">
          <h2
            class="text-subtitle1 q-mt-none q-mb-lg second-font text-uppercase"
          >
            ПРАЙС
          </h2>

          <PricesTable :rows="service.prices" />
        </div>
        <div class="col-12">
          <h2
            class="text-subtitle1 q-mt-none q-mb-lg second-font text-uppercase"
          >
            ФОТО
          </h2>

          <images-list :images="service.images" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from "@/data/services";
import ImagesList from "@/components/ImagesList.vue";
import PricesTable from "@/components/PricesTable.vue";
export default {
  data() {
    return {
      service: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.service = services.find((service) => service.id === +id);
  },
  components: { ImagesList, PricesTable },
};
</script>

<style>
</style>