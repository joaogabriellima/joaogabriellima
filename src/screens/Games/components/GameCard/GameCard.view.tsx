import React from 'react'
import {
  ConclusionLevel,
  GameCardContainer,
  GameImage,
  GameInfoContainer,
  GameStatusDisplay,
  GameTitle,
  StatusAndConclusionContainer
} from './GameCard.styles'
import { GameStatus, type Game, type GameConclusionLevel } from '~/services/games/types'

import * as GamesUtils from '~/utils/games';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface GameCardProps {
  game: Game;
}

interface ConclusionLevelProps {
  status: GameStatus;
  conclusionLevel?: GameConclusionLevel;
}

const ConclusionLevelDisplayer = ({ status, conclusionLevel }: ConclusionLevelProps): JSX.Element | null => {
  if (status !== GameStatus.CONCLUDED) return null;

  const icon = GamesUtils.getConclusionLevelIcon(conclusionLevel);

  return (
    <ConclusionLevel status={status} conclusionLevel={conclusionLevel}>
      <FontAwesomeIcon icon={icon} />
    </ConclusionLevel>
  )
}

const GameCardView = ({ game }: GameCardProps): JSX.Element => {
  return (
    <GameCardContainer>
      <GameImage src={game.imageUrl} alt={game.name} status={game.status} />
      <GameInfoContainer>
        <GameTitle>{game.name}</GameTitle>
        <StatusAndConclusionContainer>
          <GameStatusDisplay status={game.status}>{GamesUtils.getStatusName(game.status)}</GameStatusDisplay>
          <ConclusionLevelDisplayer status={game.status} conclusionLevel={game.conclusionLevel} />
        </StatusAndConclusionContainer>
      </GameInfoContainer>
    </GameCardContainer>
  )
}

export default GameCardView;
