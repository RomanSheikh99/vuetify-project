<template>
  <v-app id="inspire">
    
    <NavDrawer :drawer='drawer'/>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="cngDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Nextive Solution</v-toolbar-title>
      <div class="ms-auto">
        <v-btn
          color="red lighten-2"
          dark
          @click="cngDialog"
        >
        <v-icon style="cursor: pointer;">mdi-calendar-account</v-icon>
        </v-btn>

        <!-- text fild --------------------- -->
        <v-card class="mt-0 dialog-card" v-if="dialog">
        <CalenderView></CalenderView>
        <v-divider></v-divider>
      </v-card>
        <!-- text fild --------------------- -->
        
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import NavDrawer from './components/NavDrawer';
import CalenderView from './components/CalenderView.vue';
export default {
  components:{
    NavDrawer,
    CalenderView
},
  data: () => ({}),
  computed:{
    drawer(){
      return this.$store.getters.getDrawer
    },
    dialog(){
      return this.$store.getters.getDialog
    }
  },
  methods:{
    cngDrawer(){
      this.$store.commit("changeDrawer");
    },
    cngDialog(){
      this.$store.commit("changeDialog");
    }
  },
  watch: {},
};
</script>



<style>
  .dialog-card{
    position: absolute;
    top: 10px;
    right: 10px;
    max-width: 400px;
  }
</style>