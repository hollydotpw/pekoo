const map = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": 'apos',
};

export default function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (s) => `&${map[s as keyof typeof map]};`);
}
