export default class DateHelper {
  static localDateTime(value: Date | string): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!value || (value instanceof Date && !isNaN(value))) {
      return null;
    }
    return new Date(value).toLocaleString();
  }
}
