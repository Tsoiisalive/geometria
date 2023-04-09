<template>
  <div class="wrapper q-py-lg">
    <h1 class="text-h6 q-my-none second-font">УСЛУГИ</h1>

    <div class="row q-py-lg">
      <div class="col">
        <div class="row q-col-gutter-lg">
          <div
            v-for="service of services"
            :key="service.src"
            class="col-12 col-md-6"
          >
            <q-item
              clickable
              class="q-pa-none"
              :to="{
                name: 'Service',
                params: { id: service.id },
              }"
            >
              <q-card
                flat
                class="bg-primary text-secondary full-width"
                v-ripple
              >
                <q-card-section class="q-pa-none">
                  <q-img class="img" :alt="service.name" :src="service.src" />
                </q-card-section>
                <q-card-section>
                  <div class="text-h6">{{ service.name }}</div>
                  <div class="text-subtitle2">{{ service.description }}</div>
                </q-card-section>
              </q-card>
            </q-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { services } from "@/data/services";
export default {
  data() {
    return {
      services: services,
    };
  },
};
</script>

<style>
</style>