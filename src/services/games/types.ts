export enum GameStatus {
  NOT_STARTED = 1,
  IN_PROGRESS,
  PAUSED,
  DROPPED,
  CONCLUDED,
}

export enum GamePlatform {
  PC = 1,
  PS5,
  SWITCH,
}

export enum GameConclusionLevel {
  PLATINUM = 1,
  HUNDRED,
  STORY,
  NA,
}

export interface Game {
  id: number;
  name: string;
  status: GameStatus;
  platform: GamePlatform;
  dropReason?: string;
  conclusionLevel?: GameConclusionLevel;
  conclusionDate?: string;
  imageUrl?: string;
}
