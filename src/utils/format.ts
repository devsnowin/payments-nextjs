export function formatCurrency(amount: number): string {
  const formatedCurrency = new Intl.NumberFormat('en-IN', {
    currency: 'INR',
    style: 'currency',
  }).format(amount);
  return formatedCurrency;
}
