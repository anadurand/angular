export interface Game {
  id: number;
  messages: string[];
}
export interface  GameStatus {
  active: boolean;
  nextgameid: number;
}
