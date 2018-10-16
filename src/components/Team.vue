<template>
    <v-container grid-list-md class="blue-grey lighten-4">
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
        >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Рукодельница</h2>            
          </div>
        </v-flex>
        <v-layout wrap>
          <v-flex
            xs12
            sm6
            md12
            align-center
            justify-center
            layout
            column
            text-xs-center
          >
            <v-avatar
              :size="86"
              color="grey lighten-4"
            >
              <img src="@/assets/avatar_1.jpg" alt="avatar">
            </v-avatar>
            <div class="subheading mb-3 text-xs-center">Оличка</div>
          </v-flex>
      </v-layout>        
        </v-layout>
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
