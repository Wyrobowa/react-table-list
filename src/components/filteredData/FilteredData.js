/* eslint react/jsx-props-no-spreading: 0 */
import React from 'react';

// Helpers
import { getSortedData, getFilteredData } from '../../helpers/helpers';

// Styles
import { Paginator, PaginationButton } from './filteredDataStyled';

const FilteredData = (WrappedComponent) => ({
  filter,
  data,
  changeFilter,
  selectedPage,
  changeSort,
  sortedColumn,
  sortedColumnType,
  sortDirection,
  ...rest
}) => {
  const allPagesNumber = filter !== 'All' ? data.length / filter : selectedPage;
  const allPagesArray = Array.from(Array(allPagesNumber), (_, index) => index + 1);

  const sortedData = sortedColumn
    ? getSortedData(data, sortedColumn, sortedColumnType, sortDirection)
    : data;
  const filteredData = getFilteredData(sortedData, filter, selectedPage);

  return (
    <>
      <WrappedComponent
        data={filteredData}
        handleSort={changeSort}
        sortDirection={sortDirection}
        sortedColumn={sortedColumn}
        {...rest}
      />
      <Paginator>
        {allPagesArray.map((page) => (
          <PaginationButton
            key={page}
            type="button"
            onClick={changeFilter}
            data-index={page}
          >
            {page}
          </PaginationButton>
        ))}
      </Paginator>
    </>
  );
};

export default FilteredData;
