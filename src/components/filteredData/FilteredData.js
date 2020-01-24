/* eslint react/jsx-props-no-spreading: 0 */
import React from 'react';

// Styles
import { Paginator, PaginationButton } from './filteredDataStyled';

const FilteredData = (WrappedComponent) => ({
  filter, data, changeFilter, selectedPage, changeSort, sortedColumn, sortDirection, ...rest
}) => {
  const allPagesNumber = filter !== 'All' ? data.length / filter : selectedPage;
  const allPagesArray = Array.from(Array(allPagesNumber), (_, index) => index + 1);

  const filteredData = data
    .filter((item, index) => {
      if (filter === 'All') {
        return true;
      }

      if (
        (selectedPage === 1)
        && (index <= (filter * selectedPage) - 1)
      ) {
        return true;
      }

      if (
        (selectedPage > 1)
        && (index > (filter * (selectedPage - 1)) - 1)
        && (index <= (filter * selectedPage) - 1)
      ) {
        return true;
      }
    });

  const sortedData = filteredData
    .sort((a, b) => {
      switch (sortDirection) {
        case 'asc':
          return a[sortedColumn] - b[sortedColumn];
        case 'desc':
          return b[sortedColumn] - a[sortedColumn];
        default:
          return true;
      }
    });

  return (
    <>
      <WrappedComponent data={sortedData} handleSort={changeSort} {...rest} />
      <Paginator>
        {allPagesArray.map((page) => (
          <PaginationButton key={page} type="button" onClick={changeFilter} data-index={page}>{page}</PaginationButton>
        ))}
      </Paginator>
    </>
  );
};

export default FilteredData;
