const periods = [31536000000, 2678400000, 86400000, 3600000, 60000, 1000];
const smallPeriodsWords = ['y', 'm', 'd', 'h', 'min', 's', 'never'];
const bigPeriodsWords = [
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'never',
];

function calculateDiff(
  creationTimestamp: Date,
  currentTimestamp: Date,
): { total: number; index: number } {
  const delta = currentTimestamp.getTime() - creationTimestamp.getTime();

  // eslint-disable-next-line no-restricted-syntax
  for (const period of periods) {
    const total = Math.round(delta / period);

    if (total > 0) {
      return { total, index: periods.indexOf(period) };
    }
  }

  return { total: 0, index: 6 };
}

export function ago(
  creationTimestamp: Date,
  currentTimestamp: Date,
) {
  const { total, index } = calculateDiff(creationTimestamp, currentTimestamp);

  if (index === 6) {
    return bigPeriodsWords[index];
  }

  return `${total} ${bigPeriodsWords[index]}${total > 1 ? 's' : ''} ago`;
}

export function agoInitials(
  creationTimestamp: Date,
  currentTimestamp: Date,
) {
  const { total, index } = calculateDiff(creationTimestamp, currentTimestamp);

  if (index === 6) {
    return smallPeriodsWords[index];
  }

  return `${total}${smallPeriodsWords[index]}`;
}
