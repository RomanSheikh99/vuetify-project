<template>
    <v-row class="ma-8 pa-2" justify="center">
      <v-expansion-panels inset>
        <v-expansion-panel
          v-for="(faq,i) in faqs"
          :key="i"
        >
          <v-expansion-panel-header class="blue--text text-capitalize" color=" darken-2">{{faq.q}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{faq.a}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </template>

<script>
  
    export default {
      name: 'FAQ',
      data(){
        return {
            faqs: [
            {
                q: "what is vue",
                a: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
            },
            {
                q: "what is vuex",
                a: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
            },
            {
                q: "what is vuetify",
                a: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
            },
            {
                q: "what is sass",
                a: "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
            },
      ]
        }
      }
    }

  </script>}