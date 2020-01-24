import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.5em;
`;

const Body = styled.div`
  margin-bottom: 36px;
`;

export {
  Header,
  Title,
  Body,
};
