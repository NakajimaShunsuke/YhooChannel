<template>
  <v-container grid-list-xl style="min-height: 700px; color: #FF9800;">
    <h1 style="text-align:center;">更新履歴</h1>
    <news-line />
  </v-container>
</template>

<script>
import NewsLine from "@/components/NewsLine";
export default {
  components: {
    "news-line": NewsLine
  }
};
</script>
