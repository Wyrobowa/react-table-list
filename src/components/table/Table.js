import React from 'react';
import PropTypes from 'prop-types';

// styles
import * as Styled from './tableStyled';

const Table = ({ columns, data }) => (
  <Styled.Table>
    <Styled.Head>
      <Styled.Row>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </Styled.Row>
    </Styled.Head>

    <Styled.Body>
      {data.map((row) => (
        <Styled.Row key={row.id}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.city}</td>
          <td>1000</td>
          <td>2000</td>
          <td>3000</td>
        </Styled.Row>
      ))}
    </Styled.Body>
  </Styled.Table>
);

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
