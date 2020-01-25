import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 0;
  
  &:nth-child(even) {
    background-color: #eee;
  }
  
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Field = styled.div`
  width: 100%;
`;

const Head = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  color: #fff;
  
  ${Row} {
    padding: 10px 0;
    background-color: #666;
  }
  
  ${Field} {
    position: relative;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Arrow = styled.div`
  position: absolute;
  top: calc(50% - 5px);
  right: 0;
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  
  ${({ direction }) => direction && direction === 'asc' && `
    border-bottom: 10px solid #222;
  `}
  
  ${({ direction }) => direction && direction === 'desc' && `
    border-top: 10px solid #222;
  `}
`;

export {
  Table,
  Head,
  Body,
  Row,
  Field,
  Arrow,
};
