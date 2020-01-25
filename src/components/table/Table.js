import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { getNumberWithSpaces, getWordsFromCamelcase } from '../../helpers/helpers';

// Styles
import * as Styled from './tableStyled';

const Table = ({
 columns, data, handleSort, sortDirection, sortedColumn,
}) => (
  <>
    <Styled.Table>
      <Styled.Head>
        <Styled.Row>
          {columns.map((column) => (
            <Styled.Field
              key={column.id}
              onClick={handleSort}
              data-column={column.id}
              data-type={column.type}
            >
              <span>{getWordsFromCamelcase(column.id)}</span>
              {sortedColumn && sortedColumn === column.id && (
                <Styled.Arrow direction={sortDirection} />
              )}
            </Styled.Field>
          ))}
        </Styled.Row>
      </Styled.Head>

      <Styled.Body>
        {data.map(({
          id, name, city, totalIncome, averageIncome, lastMonthIncome,
        }) => (
          <Styled.Row key={id}>
            <Styled.Field>{id}</Styled.Field>
            <Styled.Field>{name}</Styled.Field>
            <Styled.Field>{city}</Styled.Field>
            <Styled.Field>{getNumberWithSpaces(totalIncome)}</Styled.Field>
            <Styled.Field>{getNumberWithSpaces(averageIncome)}</Styled.Field>
            <Styled.Field>{getNumberWithSpaces(lastMonthIncome)}</Styled.Field>
          </Styled.Row>
        ))}
      </Styled.Body>
    </Styled.Table>
  </>
);

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  handleSort: PropTypes.func,
  sortDirection: PropTypes.string,
  sortedColumn: PropTypes.string,
};

Table.defaultProps = {
  handleSort: null,
  sortDirection: null,
  sortedColumn: null,
};

export default Table;
