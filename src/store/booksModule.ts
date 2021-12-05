import { getStoreAccessors } from "vuex-typescript";
import { RootState } from "./index";
import { ActionContext } from "vuex";
import ApiService from "@/api/ApiService";
import { Book } from "@/api/BooksService";

type BooksContext = ActionContext<BooksState, RootState>;

export interface BooksState {
  loading: boolean;
  books: Book[];
}

const state: BooksState = {
  loading: false,
  books: [],
};

export const booksModule = {
  namespaced: true,
  state,
  getters: {
    books: (state: BooksState): Book[] => state.books,
    loading: (state: BooksState): boolean => state.loading,
  },
  mutations: {
    setBooks: (state: BooksState, value: Book[]): void => {
      state.books = value;
    },
    setLoading: (state: BooksState, value: boolean): void => {
      state.loading = value;
    },
  },
  actions: {
    doRequestBooks: (ctx: BooksContext): Promise<any> => {
      ctx.commit("setLoading", true);
      return ApiService.instance.books.getBooks().then((r: Book[]) => {
        ctx.commit("setBooks", r);
      }).catch((e: Error) => {
        console.error(e.message);
      }).finally(() => {
        ctx.commit("setLoading", false);
      });
    },
  },
};

const { read, dispatch } = getStoreAccessors<BooksState, RootState>(
  "booksStore"
);

const getters = booksModule.getters;

export const readBooks = read(getters.books);

export const readLoading = read(getters.loading);

const actions = booksModule.actions;

export const doRequestBooks = dispatch(actions.doRequestBooks);
