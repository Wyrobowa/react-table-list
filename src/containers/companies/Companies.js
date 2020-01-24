import React, { useState, useEffect } from 'react';

// Components
import FilteredDataHOC from '../../components/filteredData/FilteredData';
import Loader from '../../components/loader/Loader';
import Table from '../../components/table/Table';

// Helpers
import * as Helper from '../../helpers/helpers';

// Services
import { fetchData, fetchAllData } from '../../services/requestService';

// Styles
import * as Styled from './companiesStyled';

const FilteredData = FilteredDataHOC(Table);

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [filter, setFilter] = useState('All');
  const [selectedPage, setSelectedPage] = useState(1);
  const [sortedColumn, setSortedColumn] = useState('');
  const [sortDirection, setSortDirection] = useState(null);

  const columnsNames = [
    'id',
    'name',
    'city',
    'totalIncome',
    'averageIncome',
    'lastMonthIncome',
  ];

  const filterOptions = [
    'All',
    50,
    100,
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

      const companiesWithIncome = companiesData.map((companyData) => {
        const incomesByCompanyId = incomesObject[companyData.id].map((income) => income.value);

        return {
          ...companyData,
          totalIncome: Helper.getTotalValue(incomesByCompanyId),
          averageIncome: Helper.getAverageValue(incomesByCompanyId),
          lastMonthIncome: Helper.getLastMonthTotalValue(incomesObject[companyData.id]),
        };
      });

      setCompanies(companiesWithIncome);
    };

    getData();
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;

    setFilter(value);
  };

  const handleChangeFilter = ({ target }) => {
    setSelectedPage(target.getAttribute('data-index'));
  };

  const handleChangeSort = ({ target }) => {
    setSortedColumn(target.getAttribute('data-column'));

    if (sortDirection === null || sortDirection === 'desc') {
      setSortDirection('asc');
    } else {
      setSortDirection('desc');
    }
  };

  return (
    <Loader loading={!companies.length}>
      <Styled.Header>
        <Styled.Title>Companies Incomes List</Styled.Title>
        <select value={filter} name="filter" onChange={handleChange}>
          {filterOptions.map((option) => (
            <option key={option} value={option} name={option}>{option}</option>
          ))}
        </select>
      </Styled.Header>
      <Styled.Body>
        <FilteredData
          filter={filter}
          columns={columnsNames}
          data={companies}
          changeFilter={handleChangeFilter}
          selectedPage={selectedPage}
          changeSort={handleChangeSort}
          sortedColumn={sortedColumn}
          sortDirection={sortDirection}
        />
      </Styled.Body>
    </Loader>
  );
};

export default Companies;
