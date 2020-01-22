export const fetchData = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

export const fetchAllData = async (ids) => {
  let fetchedData = [];
  const requests = ids.map((id) => fetchData(`https://recruitment.hal.skygate.io/incomes/${id}`));

  await Promise.all(requests)
    // eslint-disable-next-line no-return-assign
    .then((data) => fetchedData = data);

  return fetchedData;
};
