import pad from './pad';

export default function zeroPad(str: string, count: number): string {
  return pad('0', str, count);
}
