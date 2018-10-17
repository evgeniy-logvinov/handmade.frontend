
<template>
  <v-parallax src="https://res.cloudinary.com/evgeniy-logvinov/image/upload/v1539775891/handmade.frontend/backgrounds/background.jpg" height="300">
    <v-layout
      column
      align-center
      justify-center
    >
      <img src="https://res.cloudinary.com/evgeniy-logvinov/image/upload/v1539775892/handmade.frontend/logo/logoHM.png" height="200">
      <div class="purple--text subheading mb-2 text-xs-center">Сделано с любовью</div>
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
}
</script>
