<template>
  <v-parallax src="https://res.cloudinary.com/evgeniy-logvinov/image/upload/v1539775891/handmade.frontend/backgrounds/background.jpg" height="300">
    <v-container grid-list-md class="">
      <v-layout
        column
        align-center
        justify-center
      >
      <v-layout 
        xs3 
        column
        align-center
        justify-center
        class="purple--text"
        >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Рукодельница</h2>            
          </div>
        </v-flex>
        <v-layout wrap>
          <v-flex
            align-center
            justify-center
            layout
            column
            text-xs-center
          >
            <v-avatar
              :size="120"
              color="grey lighten-4"
            >
              <img src="https://res.cloudinary.com/evgeniy-logvinov/image/upload/v1539779152/handmade.frontend/avatars/avatar_olga.jpg" alt="avatar">
            </v-avatar>
            <div class="subheading mb-3 text-xs-center">Оличка</div>
          </v-flex>
      </v-layout>        
        </v-layout>
      </v-layout>    
    </v-container>
  </v-parallax>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Team extends Vue {}
</script>
