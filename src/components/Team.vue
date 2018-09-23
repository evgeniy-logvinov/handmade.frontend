<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md8
        align-center
        justify-center
        layout
        text-xs-center
      >
        <v-avatar
          :size="86"
          color="grey lighten-4"
        >
          <img src="/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Team extends Vue {}
</script>
