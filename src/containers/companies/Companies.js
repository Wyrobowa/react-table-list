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
  const [sortedColumnType, setSortedColumnType] = useState('int');
  const [sortDirection, setSortDirection] = useState(null);

  const columns = [
    {
      id: 'id',
      type: 'int',
    },
    {
      id: 'name',
      type: 'string',
    },
    {
      id: 'city',
      type: 'string',
    },
    {
      id: 'totalIncome',
      type: 'int',
    },
    {
      id: 'averageIncome',
      type: 'int',
    },
    {
      id: 'lastMonthIncome',
      type: 'int',
    },
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
    const pageNumber = parseInt(target.getAttribute('data-index'), 10);
    setSelectedPage(pageNumber);
  };

  const handleChangeSort = ({ currentTarget }) => {
    setSortedColumn(currentTarget.getAttribute('data-column'));
    setSortedColumnType(currentTarget.getAttribute('data-type'));
    setFilter('All');

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
          columns={columns}
          data={companies}
          changeFilter={handleChangeFilter}
          setFilter={setFilter}
          selectedPage={selectedPage}
          changeSort={handleChangeSort}
          sortedColumn={sortedColumn}
          sortedColumnType={sortedColumnType}
          sortDirection={sortDirection}
        />
      </Styled.Body>
    </Loader>
  );
};

export default Companies;
