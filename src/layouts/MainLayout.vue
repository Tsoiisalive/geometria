<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="header"
      :class="[rightDrawerOpen ? 'header-dark' : 'header-light']"
    >
      <q-toolbar class="q-py-md">
        <q-space />
        <q-toolbar-title class="col-auto" :style="{ marginLeft: margin }">
          <router-link to="/" class="second-font">
            <img
              v-if="rightDrawerOpen"
              src="@/assets/logo-white.svg"
              alt=""
              width="100"
              height="61.48"
              style="display: block"
            />
            <img
              v-else
              src="@/assets/logo-black.svg"
              alt=""
              width="100"
              height="61.48"
              style="display: block"
            />
          </router-link>
        </q-toolbar-title>
        <q-space />
        <q-btn
          v-if="!rightDrawerOpen"
          flat
          dense
          icon="menu"
          aria-label="Menu"
          ref="menuButton"
          @click="rightDrawerOpen = true"
        />
        <q-btn
          v-else
          flat
          dense
          icon="close"
          aria-label="close"
          @click="rightDrawerOpen = false"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      overlay
      side="right"
      :width="$q.screen.gt.sm ? $q.screen.width * 0.3 : $q.screen.width"
      class="bg-secondary column justify-between"
      behavior="desktop"
    >
      <q-list class="text-white text-h5">
        <q-item class="q-py-md q-px-xl" clickable :to="{ name: 'Contacts' }">
          КОНТАКТЫ
        </q-item>
        <q-item class="q-py-md q-px-xl" clickable :to="{ name: 'Portfolio' }">
          ФОТОГАЛЕРЕЯ
        </q-item>
        <q-item class="q-py-md q-px-xl" clickable :to="{ name: 'Services' }">
          УСЛУГИ
        </q-item>
      </q-list>
      <div
        class="row q-gutter-lg justify-center text-accent q-pa-xl second-font"
      >
        <div class="col-12 text-center">
          <a href="tel:+79283332390" class="link">+7(928)333-23-90</a>
        </div>

        <div class="col-12 text-center">
          <a href="mailto:9283333390@mail.ru" class="link">
            9283333390@mail.ru
          </a>
        </div>

        <div class="row items-start col-12 justify-center
        ">
          <a href="https://t.me/+79283332390" class="light-hover">
            <img src="@/assets/telegram.svg" width="16" />
          </a>

          <a href="https://wa.me/79283332390" class="q-ml-lg light-hover">
            <img src="@/assets/whatsapp.svg" width="16" />
          </a>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="bg-primary">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      margin: null,
      drawerWidth: null,
      rightDrawerOpen: false,
    };
  },
  mounted() {
    this.margin = this.$refs.menuButton?.$el.clientWidth + "px";
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";
@keyframes color {
  from {
    background: $primary;
    color: $dark;
  }
  to {
    background: $secondary;
    color: $primary;
  }
}

.header {
  background: $primary;
  color: $dark;

  &-dark {
    animation-name: color;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
