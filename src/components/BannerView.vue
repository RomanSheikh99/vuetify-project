<template>
    <v-carousel
      cycle
      height="400"
      
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="images[i]"
      >

      <div class="pa-15 img-div">
        <h1>hello world {{slide}}</h1>
      </div>
        <!-- <v-sheet
          height="100%"
          class="pa-15"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
  </template>


<script>
    export default {
      data () {
        return {
          colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
          ],
          slides: [
            'First',
            'Second',
            'Third',
            'Fourth',
          ],
          images: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        }
      },
    }
  </script>

  <style>
    .img-div{
        background: #0000006b;
        height: 100%;
        width: 100%;
        text-transform: uppercase;
        text-align: center;
        color: white;
    }
  </style>