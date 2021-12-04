<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-row class="align-center text-center">
        <v-col>
          <h1 class="display-2 font-weight-bold my-2">Book listing Exercise </h1>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
