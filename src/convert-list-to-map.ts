export default function convertListToMap<
  T extends { [key: string | number]: U },
  U extends keyof T,
>(list: T[], key: U) {
  const map = {} as Record<T[U], T>;

  list.forEach((ele) => {
    map[ele[key]] = ele;
  });

  return map;
}
