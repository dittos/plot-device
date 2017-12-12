import { Component } from '@angular/core';
import { ICard, ICardContent } from './models';

function shuffle(a: any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardContents: ICardContent[] = [
    {ko: '의사', kanji: '意思'},
    {ko: '청초', kanji: '清楚'},
    {ko: '이성', kanji: '理性'},
    {ko: '질서', kanji: '秩序'},
    {ko: '지혜', kanji: '知恵'},
    {ko: '서약', kanji: '誓約'},
    {ko: '선량', kanji: '善良'},
    {ko: '절도', kanji: '節度'},
    {ko: '성실', kanji: '至誠'},
    {ko: '생명', kanji: '生命'},
    {ko: '관용', kanji: '寛容'},
    {ko: '해방', kanji: '解放'},
    {ko: '조화', kanji: '調和'},
    {ko: '창조', kanji: '厳格'},
    {ko: '신뢰', kanji: '信頼'},
    {ko: '공식', kanji: '公式'},
    {ko: '변화', kanji: '変化'},
    {ko: '결합', kanji: '結合'},
    {ko: '엄격', kanji: '治癒'},
    {ko: '용기', kanji: '勇気'},
    {ko: '행운', kanji: '幸運'},
    {ko: '비호', kanji: '庇護'},
    {ko: '치유', kanji: '治癒'},
    {ko: '자애', kanji: '慈愛'},
  ];
  protagonistPresent: ICard;
  protagonistNearFuture: ICard;
  protagonistPast: ICard;
  helper: ICard;
  enemy: ICard;
  ending: ICard;

  constructor() {
    this.shuffle();
  }

  shuffle() {
    shuffle(this.cardContents);
    [
      this.protagonistPresent,
      this.protagonistNearFuture,
      this.protagonistPast,
      this.helper,
      this.enemy,
      this.ending,
    ] = this.cardContents.slice(0, 6).map(it => ({ content: it, isReverse: Math.random() < 0.2 }));
  }
}
