import {Component, Input, OnInit} from '@angular/core';
import {GameStatus} from "../game";
import {GamesService} from "../games.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  gameStatus: GameStatus;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGameStatus();
    this.newGame();

  }

  newGame(): void {
    this.gamesService.newGame();
    this.gamesService.changeStatus();

  }
  getGameStatus(): void {
    this.gamesService.getGameStatus()
      .subscribe(gameStatus => this.gameStatus = gameStatus);

  }












}
