
<template>
  <!-- <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel> -->
  <v-parallax src="assets/hero.jpeg" height="600">
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    >
      <img src="assets/vuetify.png" alt="Vuetify.js" height="200">
      <h1 class="white--text mb-2 display-1 text-xs-center">HandMade</h1>
      <!-- <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div> -->
      <!-- <v-btn
        class="blue lighten-2 mt-5"
        dark
        large
        href="/pre-made-themes"
      >
        Get Started
      </v-btn> -->
    </v-layout>
  </v-parallax>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Main extends Vue {
  private items: any[] = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    }
  ]
}
</script>
