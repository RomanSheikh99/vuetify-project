<template>
  <div>
    <BannerView />
    <FAQ></FAQ>
    <template>
  <div class="text-center mb-6">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    ></v-pagination>
  </div>
</template>
    <hello-world />
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import BannerView from '../components/BannerView';
  import FAQ from '@/components/FAQ.vue';

  export default {
    name: 'Home',
    components: {
    HelloWorld,
    BannerView,
    FAQ
},
data () {
      return {
        page: 1,
      }
    },
  }
</script>
