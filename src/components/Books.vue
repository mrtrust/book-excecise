<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Books</h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="fa-search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :sort-by="'title'"
          :loading="loading"
          :items="books"
          :search="search"
          :custom-filter="filter"
          loading-text="Loading your books"
        >
          <template #item.publishDate="{ item }">
            {{ item.publishDate | dateTime }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Book } from "@/api/BooksService";
import { doRequestBooks, readBooks, readLoading } from "@/store/booksModule";
import DateHelper from "@/helpers/DateHelper";

export default Vue.extend({
  name: "Books",

  data: () => ({
    search: "",
    headers: [
      {
        text: "Title",
        value: "title",
        width: "10%",
      },
      {
        text: "Description",
        value: "description",
      },
      {
        text: "Publish Date",
        value: "publishDate",
      },
    ],
  }),
  created(): void {
    doRequestBooks(this.$store);
  },

  computed: {
    books(): Book[] {
      return readBooks(this.$store) || [];
    },
    loading(): boolean {
      return readLoading(this.$store);
    },
  },

  methods: {
    filter(value: any, search: string, item: Book): boolean {
      if (!search) {
        return true;
      }

      const searchLowerCase = search.toLocaleLowerCase();

      if (item.title.toLocaleLowerCase().includes(searchLowerCase)) {
        return true;
      }
      const dateTime = DateHelper.localDateTime(item.publishDate);
      if (dateTime) {
        return dateTime.includes(searchLowerCase);
      }
      return false;
    },
  },
});
</script>
