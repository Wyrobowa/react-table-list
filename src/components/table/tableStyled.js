import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  
  &:nth-child(even) {
    background-color: #eee;
  }
`;

const Head = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  color: #fff;
  
  ${Row} {
    padding: 10px 0;
    background-color: #666;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  width: 100%;
`;

export {
  Table,
  Head,
  Body,
  Row,
  Field,
};
