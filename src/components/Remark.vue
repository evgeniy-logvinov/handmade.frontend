<template>
   <v-parallax src="assets/hero-flowers.jpg" height="380">
    <v-layout column align-center justify-center>
      <div class="headline mb-3 text-xs-center">Удивите всех вашим подарком</div>
      <em>все будут поражены</em>
      <v-btn
        class="blue lighten-2 mt-5"
        dark
        large
        @click="$emit('contactUsClick')"
      >
        Свзяаться с нами
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Remark extends Vue {}
</script>
