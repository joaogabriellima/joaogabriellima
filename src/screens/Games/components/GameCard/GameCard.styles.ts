import styled from 'styled-components'

export const GameCardContainer = styled.div`
  width: 200px;
  height: 450px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  margin: 10px;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const GameImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const GameInfoContainer = styled.div`
  padding: 16px;
`;

export const GameTitle = styled.h3`
  font-size: 18px;
  margin: 8px 0;
  color: #fff;
`;

export const GameStatus = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;

export const ConclusionLevel = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;
