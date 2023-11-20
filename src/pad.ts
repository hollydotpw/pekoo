export default function pad(padding: string, str: string, count: number): string {
  return padding.repeat(count - str.length) + str;
}
