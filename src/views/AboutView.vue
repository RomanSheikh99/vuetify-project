<template>
  <div class="about">

  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <h1 class="mb-10 display-4 text-capitalize text-center text-black">about us</h1>
    <h3 class="headline text-capitalize text-center text-black">welcome to nextive solution todo app</h3>
  </v-parallax>

  <v-card class="my-10 mx-6">
    <v-toolbar
      color="cyan"
      dark
    >
      <template>
        <v-tabs
           class="d-flex justify-center"
          v-model="tab"
          align-with-title
        >

            <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
