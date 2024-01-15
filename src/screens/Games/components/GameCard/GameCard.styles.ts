import styled from 'styled-components';
import { GameConclusionLevel, GameStatus } from '~/services/games/types';

interface GameImageProps {
  status: GameStatus;
}

interface GameConclusionLevelDisplayProps {
  status: GameStatus;
}

interface GameConclusionLevelProps {
  status: GameStatus;
  conclusionLevel?: GameConclusionLevel;
}

export const GameCardContainer = styled.div`
  width: 200px;
  padding-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: #363636;
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;

  &:hover {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const GameImage = styled.img<GameImageProps>`
  width: 100%;
  height: 300px;
  object-fit: cover;

  ${({ status }) => status === GameStatus.NOT_STARTED && `
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
  `}

  ${({ status }) => status === GameStatus.PAUSED && `
    filter: grayscale(50%);
    -webkit-filter: grayscale(50%);
  `}

    &:hover {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
  }
`;

export const GameInfoContainer = styled.div`
  padding: 0 16px;
`;

export const GameTitle = styled.h3`
  font-size: 18px;
  margin: 8px 0;
  color: #fff;
`;

export const GameStatusDisplay = styled.div<GameConclusionLevelDisplayProps>`
  font-size: 14px;
  color: #fff;
  margin: 4px 0;
  font-weight: bold;
  padding: 7px;
  width: fit-content;
  border-radius: 3px;

  ${({ status }) => status === GameStatus.NOT_STARTED && `
    background-color: #7f8c8d;
  `}

  ${({ status }) => status === GameStatus.IN_PROGRESS && `
    background-color: #3498db;
  `}

  ${({ status }) => status === GameStatus.PAUSED && `
    background-color: #f1c40f;
    color: #000;
  `}

  ${({ status }) => status === GameStatus.DROPPED && `
    background-color: #e74c3c;
    color: #000;
  `}

  ${({ status }) => status === GameStatus.CONCLUDED && `
    background-color: #27ae60;
  `}
`;

export const ConclusionLevel = styled.p<GameConclusionLevelProps>`
  font-size: 14px;
  color: #fff;
  margin: 4px 4px;
  font-weight: bold;
  padding: 7px;
  width: fit-content;
  border-radius: 3px;

  ${({ conclusionLevel }) => conclusionLevel === GameConclusionLevel.HUNDRED && `
    color: #f1c40f;
    background-color: #bf55ec;
  `}

  ${({ conclusionLevel }) => conclusionLevel === GameConclusionLevel.NA && `
    color: #000;
    background-color: #7f8c8d;
  `}

  ${({ conclusionLevel }) => conclusionLevel === GameConclusionLevel.PLATINUM && `
    color: #aeb5c6;
    background-color: #0e2a71;
  `}

  ${({ conclusionLevel }) => conclusionLevel === GameConclusionLevel.STORY && `
    color: #f1c40f;
    background-color: #7f8c8d;
  `}
`;

export const StatusAndConclusionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
