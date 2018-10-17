<template>
  <div class="home">
    <v-toolbar class="white" fixed app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menus" v-bind:key="item.name" flat @click="scrollTo('#' + item.name)">{{item.title}}</v-btn>
        <!-- <v-btn flat @click="scrollTo('#features')">Особенности</v-btn>
        <v-btn flat @click="scrollTo('#works')">Работы</v-btn>
        <v-btn flat @click="scrollTo('#team')">Команда</v-btn>
        <v-btn flat @click="scrollTo('#contacts')">Контакты</v-btn> -->
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menus" :key="item.name" @click="scrollTo('#' + item.name)">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <Main id="main"></Main>
      <Features id="features"></Features>        
      <Remark id="remark" @contactUsClick="scrollTo('#contacts')"></Remark>
      <Works id="works"></Works>
      <Team id="team"></Team>
      <Contacts id="contacts"></Contacts>
    </v-content>
    <v-footer class="darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12 justify-end>
          <v-spacer></v-spacer>
          <v-layout align-end justify-end column reverse fill-height>
            &copy; {{ new Date().getFullYear() }} All rights reserved. Powered by {{creator}}
          </v-layout>
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
import VueScrollto from 'vue-scrollto';

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
  private creator: string = 'evgeniy.logvinov.k';
    // <v-btn flat @click="scrollTo('#main')"></v-btn>
    //     <v-btn flat @click="scrollTo('#features')">Особенности</v-btn>
    //     <v-btn flat @click="scrollTo('#works')">Работы</v-btn>
    //     <v-btn flat @click="scrollTo('#team')">Команда</v-btn>
    //     <v-btn flat @click="scrollTo('#contacts')">Контакты</v-btn>
      
  private menus: any = [{
    name: 'main',
    title: 'Главная',
  },
  {
    name: 'features',
    title: 'Особенности',
  },
  {
    name: 'works',
    title: 'Работы',
  },
  {
    name: 'team',
    title: 'Команда',
  },
  {
    name: 'contacts',
    title: 'Контакты',
  },]

  private mounted() {
    const blockId = this.$route.params.id;

    if (blockId) {
      this.scrollTo(blockId);
    }
  }

  private scrollTo(id: string) {
    this.$vuetify.goTo(id,
    {
      duration: 800,
      offset: -60,
    });
  }
}
</script>
