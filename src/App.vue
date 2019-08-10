<template>
  <v-app>
    <app-bar />

    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto sheet" max-height="700">
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

<style>
.sheet {
  overflow-x: hidden;
}
</style>
