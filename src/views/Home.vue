<template>
  <books />
</template>

<script lang="ts">
import Vue from "vue";
import Books from "@/components/Books.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Books,
  },
});
</script>
