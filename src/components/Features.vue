<template>
  <v-layout
      column
      wrap
      class="my-5"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="headline">Оригинальность - лучший подарок</h2>
          <span class="subheading">
            Оригинальные подарки для вашего праздника 
          </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Индивидуальный подход</div>
                </v-card-title>
                <v-card-text>
                 С каждым клиентом работаем индивидуально. 
                 Можете предоставить нам изображение желаемого продукта из уже имеющегося списка или найденное фото. 
                 Мы сориентируем Вас по цене и срокам изготовления.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">thumb_up</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Качественная работа</div>
                </v-card-title>
                <v-card-text>
                  Наши продукты являются результатом ручной наших опытных специалистов.
                  Все наши продукты изготавлиюватся с любовью из качественнных материалов.
                  К каждому продукту мы относимся с любовью. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">fingerprint</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Оригинальность</div>
                </v-card-title>
                <v-card-text>
                  Все работы являются оригинальными проудктами. 
                  Вы можете заказать подарок - сюрприз. 
                  Вы называете праздник - мы делаем подарок в закрытой коробке, который будет сюрпризом для человека, который получает подарок.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Features extends Vue {
}
</script>
