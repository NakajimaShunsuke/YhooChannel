<template>
  <div id="app" style="display: flex; justify-content: center; align-items: center; height:400px;">
    <orbit-spinner :animation-duration="1200" :size="55" color="#2196F3" />
  </div>
</template>

<script>
import { OrbitSpinner } from "epic-spinners";

export default {
  components: {
    OrbitSpinner
  }
};
</script>