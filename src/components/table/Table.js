import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './tableStyled';

const Table = ({ columns, data }) => (
  <Styled.Table>
    <Styled.Head>
      <Styled.Row>
        {columns.map((column) => (
          <Styled.Field key={column}>{column}</Styled.Field>
        ))}
      </Styled.Row>
    </Styled.Head>

    <Styled.Body>
      {data.map((row) => (
        <Styled.Row key={row.id}>
          <Styled.Field>{row.id}</Styled.Field>
          <Styled.Field>{row.name}</Styled.Field>
          <Styled.Field>{row.city}</Styled.Field>
          <Styled.Field>1000</Styled.Field>
          <Styled.Field>2000</Styled.Field>
          <Styled.Field>3000</Styled.Field>
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
