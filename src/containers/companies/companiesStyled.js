import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.span`
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
