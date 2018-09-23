<template>
   <v-parallax src="assets/section.jpg" height="380">
    <v-layout column align-center justify-center>
      <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
      <em>Kick-start your application today</em>
      <v-btn
        class="blue lighten-2 mt-5"
        dark
        large
        href="/pre-made-themes"
      >
        Get Started
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Remark extends Vue {
  private cardText: string =  'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.';
}
</script>
