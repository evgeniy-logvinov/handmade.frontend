<template>
  <div class="home">
    <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="home">Home</v-btn>
        <v-btn flat href="features">Features</v-btn>
        <v-btn flat href="works">Works</v-btn>
        <v-btn flat to="team">Team</v-btn>
        <v-btn flat to="contacts">Contacts</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <Main></Main>
      <Features></Features>        
      <Team></Team>
      <Remark></Remark>
      <Contacts></Contacts>
    </v-content>
    <v-footer class="darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <v-spacer></v-spacer>
          <div>&copy; {{ new Date().getFullYear() }}</div>            
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/Main.vue';
import Features from '@/components/Features.vue';
import Works from '@/components/Works.vue';
import Team from '@/components/Team.vue';
import Remark from '@/components/Remark.vue';
import Contacts from '@/components/Contacts.vue';

@Component({
  components: {
    Main,
    Features,
    Works,
    Team,
    Remark,
    Contacts,
  },
})
export default class Home extends Vue {
  private title: string = 'HandMade';
}
</script>
