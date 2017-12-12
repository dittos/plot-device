export interface ICardContent {
  ko: string;
  kanji: string;
}

export interface ICard {
  content: ICardContent;
  isReverse: boolean;
}
