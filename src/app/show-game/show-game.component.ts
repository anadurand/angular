import { Component, OnInit } from '@angular/core';
import {Game, GameStatus} from "../game";
import {GamesService} from "../games.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-game',
  templateUrl: './show-game.component.html',
  styleUrls: ['./show-game.component.css']
})
export class ShowGameComponent implements OnInit {

  gameStatus: GameStatus;
  actualGame: Game;


  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getGameStatus();
    this.getGame();

  }
  getGameStatus(): void {
    this.gamesService.getGameStatus()
      .subscribe(gameStatus => this.gameStatus = gameStatus);

  }
  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gamesService.getGame(id)
      .subscribe( game => this.actualGame = game);
  }
  sendMessage(message): void {
    
    this.actualGame[0].messages.push(message);
  }


}
