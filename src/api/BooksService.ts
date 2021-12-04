import HTTPService from "@/api/HttpService";

export interface Book {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
}

export class BooksService {
  private readonly _httpService: HTTPService;
  constructor() {
    this._httpService = new HTTPService();
  }

  getBooks(): Promise<Book[]> {
    return this._httpService
      .get("https://fakerestapi.azurewebsites.net/api/v1/Books")
      .then((response: any) => response.data as Book[]);
  }
}
