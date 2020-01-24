export const getNumberWithSpaces = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const getWordsFromCamelcase = (camelcase) => camelcase.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2');

export const getTotalValue = (data) => data.reduce((prev, next) => {
  const prevValue = prev ? parseFloat(prev) : 0;
  const nextValue = next ? parseFloat(next) : 0;

  return (prevValue + nextValue).toFixed(2);
}, 0);

export const getAverageValue = (data) => {
  const averageValue = getTotalValue(data) / data.length;

  return averageValue.toFixed(2);
};

export const getLastMonthTotalValue = (data) => {
  const lastMonthValues = data.filter((row) => {
    const dataMonth = (new Date(row.date)).getMonth();
    let lastMonth = (new Date()).getMonth() - 1;
    lastMonth = lastMonth === -1 ? 11 : lastMonth;

    return dataMonth === lastMonth;
  }).map((row) => row.value);

  return getTotalValue(lastMonthValues);
};
