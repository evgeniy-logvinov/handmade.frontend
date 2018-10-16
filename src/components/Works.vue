<template>
  <v-layout
    row
    wrap
    class="my-2"
    align-center>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout row align-center>
            <v-flex v-for="work in works" v-bind:key="work.id" xs3>
              <v-card>
                <v-img
                  :src="work.src"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h2 class="mb-0">{{work.title}}</h2>
                    <div>{{work.about}}</div>
                  </div>
                </v-card-title>

                <!-- <v-card-actions>
                  <v-btn flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions> -->
              </v-card>
            </v-flex>
        </v-layout>        
        <v-layout 
          xs12
          column
          align-center>         
            <v-btn
              class="blue lighten-2 mt-1"
              dark
              large
              xs12
              @click="$emit('contactUsClick')"
            >
              Увидеть больше продуктов
            </v-btn>
        </v-layout>
      </v-container>        
    </v-flex>    
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Works extends Vue {
  private works = [
    {
      id: '1',
      src: 'assets/works/work_1.jpg',
      title: 'Kangaroo Valley Safari',
      about: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...',
    },
    {
      id: '2',
      src: 'assets/works/work_2.jpg',
      title: 'Kangaroo Valley Safari',
      about: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...',
    },
    {
      id: '3',
      src: 'assets/works/work_3.jpg',
      title: 'Kangaroo Valley Safari',
      about: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...',
    },
    {
      id: '4',
      src: 'assets/works/work_4.jpg',
      title: 'Шапка "Мишка Тедди"',
      about: 'Изготовлена из натуральной шерсти. Согреет вашего малыша в холодную зиму.',
    },
  ];

}
</script>
