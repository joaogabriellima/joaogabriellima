import { GameStatus, GamePlatform, GameConclusionLevel } from '~/services/games/types';
import { faTrophy, faStar, faAward, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

export const getPlatformName = (platform: GamePlatform): string => {
  switch (platform) {
    case GamePlatform.PC:
      return 'PC';
    case GamePlatform.PS5:
      return 'PS5';
    case GamePlatform.SWITCH:
      return 'Nintendo Switch';
    default:
      return 'Não decidido';
  }
};

export const getStatusName = (status: GameStatus): string => {
  switch (status) {
    case GameStatus.NOT_STARTED:
      return 'Não iniciado';
    case GameStatus.IN_PROGRESS:
      return 'Em progresso';
    case GameStatus.PAUSED:
      return 'Pausado';
    case GameStatus.DROPPED:
      return 'Dropado';
    case GameStatus.CONCLUDED:
      return 'Concluído';
    default:
      return 'N/A';
  }
};

export const getConclusionLevelIcon = (conclusionLevel?: GameConclusionLevel): IconDefinition => {
  if (!conclusionLevel) return faStar;

  if (conclusionLevel === GameConclusionLevel.HUNDRED) return faAward;
  if (conclusionLevel === GameConclusionLevel.STORY) return faStar;
  if (conclusionLevel === GameConclusionLevel.PLATINUM) return faTrophy;
  if (conclusionLevel === GameConclusionLevel.NA) return faStar;

  return faStar;
};
