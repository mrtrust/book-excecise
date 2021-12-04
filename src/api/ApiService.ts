import { BooksService } from "@/api/BooksService";

export default class ApiService {
  private static _instance: ApiService;
  private readonly _booksService: BooksService;

  static get instance(): ApiService {
    if (!ApiService._instance) {
      ApiService._instance = new ApiService();
    }
    return ApiService._instance;
  }

  constructor() {
    this._booksService = new BooksService();
  }

  get books(): BooksService {
    return this._booksService;
  }
}
