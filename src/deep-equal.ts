// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function deepEqual(a: Record<any, any>, b: Record<any, any>): boolean {
  const typeofA = typeof a;
  const typeofB = typeof b;

  return a && b && typeofA === 'object' && typeofA === typeofB
    ? (
      Object.keys(a).length === Object.keys(b).length
       // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
       && Object.keys(a).every((key) => deepEqual(a[key], b[key]))
    )
    : (a === b);
}
