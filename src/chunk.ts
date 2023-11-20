export default function chunk(value: string, size: number) {
  return value.match(new RegExp(`.{1,${size}}`, 'g'));
}
