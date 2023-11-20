import zeroPad from './zero-pad';
import removeZeroPrefix from './remove-zero-prefix';

// TODO: move this to crypto lib

function convertToHex(str: string | number | bigint): string {
  if (typeof str === 'string') {
    return str;
  }

  return str.toString(16);
}

export default function abify(...strs: (string | number | bigint)[]) {
  return strs
    .map((_) => zeroPad(removeZeroPrefix(convertToHex(_)), 64))
    .join('');
}
