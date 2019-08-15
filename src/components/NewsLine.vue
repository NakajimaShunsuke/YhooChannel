<template>
  <v-timeline>
    <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" small>
      <template v-slot:opposite>
        <span :class="`headline font-weight-bold ${item.color}--text`" v-text="item.year"></span>
      </template>
      <div class="py-4">
        <h3 :class="`headline font-weight-light mb-4 ${item.color}--text`">{{ item.title }}</h3>
        <div>{{item.text}}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
import news_json from "@/assets/news";

export default {
  data: () => ({
    items: news_json
  })
};
</script>