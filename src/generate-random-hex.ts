export default function generateRandomHex(size: number): string {
  return Array.from({ length: size }, () => '0123456789abcdef'.charAt(Math.floor(Math.random() * 16))).join('');
}
