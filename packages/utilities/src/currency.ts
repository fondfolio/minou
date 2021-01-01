const convertCurrency = (currency: number) => currency / 100;

export function formatCurrency(currency: number) {
  const result = convertCurrency(currency);
  return `$${result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`;
}

export function formatCurrencyPerContributor(
  price: number,
  contributorCount = 0,
) {
  if (contributorCount === 0) {
    return 0;
  }
  const amount = price / contributorCount;

  return formatCurrency(amount);
}
