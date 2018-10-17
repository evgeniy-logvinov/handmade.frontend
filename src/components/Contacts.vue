<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-center class="my-2">
      <v-flex xs12 sm4>
        <v-card class="elevation-0 transparent">
          <v-card-title primary-title class="layout justify-center">
            <div class="headline">О нас</div>
          </v-card-title>
          <v-card-text>
            Мы Выпускаем уникльные подарки handmade долгий период времени. 
            Все наши продукты явлются уникальными предметами ручной работы. 
            Мы делаем уклон на качество и индивидуальный подход к клиентам. 
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card class="elevation-0 transparent">
          <v-card-title primary-title class="layout justify-center">
            <div class="headline">Свяжитесь с нами</div>
          </v-card-title>
          <v-card-text>
            Позвоните или напишите Нам и мы поможем с выбором подарка. Индивидульный подбор продукта к конкретному празднику.
          </v-card-text>
          <v-list class="transparent">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="blue--text text--lighten-2">phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>8-888-88-88-888</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="blue--text text--lighten-2">place</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Челябинск, РФ</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="blue--text text--lighten-2">email</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Contacts extends Vue {}
</script>
