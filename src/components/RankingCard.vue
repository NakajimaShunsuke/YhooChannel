<template>
  <v-card class="mx-auto" color="grey darken-2" dark style="color:#FF9800">
    <v-card-text style="padding:5px 16px;">{{ ranking_data.rank }}位</v-card-text>
    <v-card-title>{{ ranking_data.title }}</v-card-title>
    <v-card-text>{{ ranking_data.overview }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="notice_dialog" />
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    ranking_data: {
      type: Object
    }
  }
};
</script>
