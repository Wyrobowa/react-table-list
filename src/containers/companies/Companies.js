import React, { useState, useEffect } from 'react';

// Components
import Table from '../../components/table/Table';

// Services
import { fetchData, fetchAllData } from '../../services/requestService';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  const columnsNames = [
    'id',
    'name',
    'city',
    'total income',
    'average income',
    'last month income',
  ];

  useEffect(() => {
    const getData = async () => {
      const companiesData = await fetchData('https://recruitment.hal.skygate.io/companies');
      const companiesIds = companiesData.map((companyData) => companyData.id);

      const incomesData = await fetchAllData(companiesIds);
      const incomesObject = incomesData.reduce((prev, next) => ({
        ...prev,
        [next.id]: next.incomes,
      }), {});

      const companiesWithIncome = companiesData.map((companyData) => ({
        ...companyData,
        incomes: incomesObject[companyData.id],
      }));

      setCompanies(companiesWithIncome);
    };

    getData();
  }, []);

  return (
    <>
      <p>Companies Incomes List</p>
      <Table columns={columnsNames} data={companies} />
    </>
  );
};

export default Companies;
