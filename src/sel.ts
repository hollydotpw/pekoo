function sel(...args: string[]): string {
  return args.filter(Boolean).join(' ');
}

export default sel;
