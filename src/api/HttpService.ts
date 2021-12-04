import Axios, { AxiosInstance } from "axios";

export default class HTTPService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create({ withCredentials: false });
  }

  get(url: string, config?: Record<string, unknown>): Promise<any> {
    return this.axios.get(url, config);
  }

  post(
    url: string,
    data?: Record<string, unknown>,
    config?: Record<string, unknown>
  ): Promise<any> {
    return this.axios.post(url, data, config);
  }
}
