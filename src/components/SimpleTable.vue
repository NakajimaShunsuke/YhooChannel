<template>
  <v-simple-table dark style="color:orange;">
    <thead>
      <tr>
        <th class="text-left">番組名</th>
        <th class="text-left">時間帯</th>
        <th class="text-left">放送局</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.date }}</td>
        <td style="min-width:75px">{{ item.tvStation }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    desserts: {
      type: Array
    }
  }
};
</script>