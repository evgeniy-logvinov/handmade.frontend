
<template>
  <v-parallax src="assets/hero-flowers-our-team.jpg" height="300">
    <v-layout
      column
      align-center
      justify-center
    >
      <img src="assets/logoHM.png" alt="Vuetify.js" height="200">
      <h1 class="white--text mb-2 display-1 text-xs-center">HandMade</h1>
      <div class="white--text subheading mb-3 text-xs-center">Сделано с любовью</div>
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
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ];
}
</script>
