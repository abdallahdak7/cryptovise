/** Formats currency to custom locale string
 *
 * @param currency
 */
export const formatCurrency = (currency: number) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
    currency: 'USD',
    style: 'currency',
  };

  return currency.toLocaleString('en-US', options);
};

export const setClassColor = (value: number) => {
  if (value > 0) return 'color-green';
  if (value < 0) return 'color-red';

  return '';
};
