type FloatfyOptions = {
  readonly commify?: boolean;
  readonly pad?: boolean;
};

export default function floatfy(
  wei: bigint,
  baseLength: bigint,
  options?: FloatfyOptions,
): string {
  const base = 10n ** baseLength;

  let fraction = (wei % base).toString(10);
  while (fraction.length < baseLength) {
    fraction = `0${fraction}`;
  }

  if (!options?.pad) {
    [fraction] = fraction.match(/^([0-9]*[1-9]|0)(0*)/)!;
  }

  let whole = (wei / base).toString(10);
  if (options?.commify) {
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const value = `${whole}${fraction === '0' ? '' : `.${fraction}`}`;
  return value;
}
