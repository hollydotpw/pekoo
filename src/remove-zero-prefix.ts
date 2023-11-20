export default function removeZeroPrefix(str: string) {
  return str.startsWith('0x') ? str.slice(2) : str;
}
