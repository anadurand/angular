import { Component, OnInit } from '@angular/core';
import {GameStatus} from "../game";
import {GamesService} from "../games.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  gameStatus: any;

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.newGame();

  }



  getGameStatus(): void {
    this.gamesService.getGameStatus()
      .subscribe(gameStatus => this.gameStatus = gameStatus);
  }
  changeGameStatus(): void {
    if(this.gameStatus.active == false) {
      console.log(this.gameStatus)
      this.gamesService.changeGameStatus(!this.gameStatus.active)
        .subscribe(gameStatus => this.gameStatus = gameStatus);
    }
  }

  newGame(): void {
    this.getGameStatus()
      

  }
}
