import styled from 'styled-components'

export const Container = styled.div`
  font-family: Arial !important;
  display: flex;
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 450px);
  grid-gap: 1rem;

`;

export const Title = styled.p`
  color: #ecf0f1;
  font-size: 30px;
  font-weight: 800;
`;

export const Description = styled.p`
  color: #ecf0f1;
`;
