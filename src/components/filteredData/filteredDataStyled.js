import styled from 'styled-components';

const Paginator = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #555;
  padding: 5px;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export {
  Paginator,
  PaginationButton,
};
