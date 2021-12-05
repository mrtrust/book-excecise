import Vue from "vue";
import Vuex from "vuex";
import { booksModule, BooksState } from "@/store/booksModule";

Vue.use(Vuex);

export interface RootState {
  booksStore: BooksState;
}

export default new Vuex.Store<RootState>({
  modules: {
    booksStore: booksModule,
  },
});
