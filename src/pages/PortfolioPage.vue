<template>
  <div class="wrapper q-py-lg">
    <h1 class="text-h6 q-my-none second-font">ПОРТФОЛИО</h1>

    <images-list :images="images" class="q-py-lg" />
  </div>
</template>

<script>
import ImagesList from "src/components/ImagesList.vue";
export default {
  data() {
    return {
      images: [
        {
          name: "house1",
          src: "https://3dm2.ru/wp-content/uploads/2019/04/001_01.jpg",
          class: "col-12 col-sm-8 col-md-6",
        },
        {
          name: "house2",
          src: "https://www.ccnova.ru/images/blog/sovremennye-doma/sovremennyj-dom-4.jpg",
          class: "col-12 col-sm-4 col-md-3",
        },
        {
          name: "house3",
          src: "https://www.gd-home.com/wp-content/uploads/2016/03/derevyannyj-dom-posredi-shvejcarskix-alp-3.jpg",
          class: "col-12 col-sm-4 col-md-3",
        },
        {
          name: "house4",
          src: "https://st.hzcdn.com/simgs/pictures/doma/sovremennyy-dom-v-sliyanii-s-prirodoy-svetlana-gerasimova-img~dab19a4209d1102b_4-2935-1-dd04684.jpg",
          class: "col-12 col-sm-4 col-md-3",
        },
        {
          name: "house5",
          src: "https://www.gd-home.com/wp-content/uploads/2018/08/dvuxetazhnyj-sovremennyj-dom-iz-betona-dereva-i-kamnya-1.jpg",
          class: "col-12 col-sm-4 col-md-3",
        },
        {
          name: "house6",
          src: "https://dekoriko.ru/images/article/croppedtop/718-400/2021/10/proekty-sovremennyh-domov.jpg",
          class: "col-12 col-sm-8 col-md-6",
        },
        {
          name: "house7",
          src: "https://bezgoroda.com//bgfiles/uploaded/2020/10/zhivu-za-gorodom-21-2.jpg",
          class: "col-12 col-sm-4 col-md-4",
        },
        {
          name: "house8",
          src: "https://stroisovety.org/wp-content/uploads/2016/03/osobennosti-domov-v-sovremennom-stile.jpg",
          class: "col-12 col-sm-6 col-md-4",
        },
        {
          name: "house9",
          src: "https://vipplan.ru/cms_files/359/569/1303/vid4.jpg",
          class: "col-12 col-sm-6 col-md-4",
        },
        {
          name: "house10",
          src: "https://www.gd-home.com/wp-content/uploads/2016/03/neobychnyj-dom-v-vide-piramidy-iz-islandii-1.jpg",
          class: "col-12 col-md-6",
        },
        {
          name: "house11",
          src: "https://www.gd-home.com/wp-content/uploads/2016/03/stilnyj-fasad-interer-doma-iz-texasa-2.jpg",
          class: "col-12 col-sm-6 col-md-3",
        },
        {
          name: "house12",
          src: "https://www.gd-home.com/wp-content/uploads/2016/03/naberite-polnuyu-grud-vozduxa-dom-posredi-gornyx-vershin-11.jpg",
          class: "col-12 col-sm-6 col-md-3",
        },
      ],
    };
  },
  components: { ImagesList },
};
</script>