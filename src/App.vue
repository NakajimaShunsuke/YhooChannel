<template>
  <v-app>
    <app-bar />

    <v-sheet
      color="grey darken-3"
      id="scrolling-techniques-7"
      class="overflow-y-auto sheet"
      max-height="700"
      min-height="700"
      style="border-radius:0"
    >
      <router-view />
    </v-sheet>

    <Footer />
  </v-app>
</template>
<script>
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";

export default {
  components: {
    "app-bar": AppBar,
    Footer
  }
};
</script>