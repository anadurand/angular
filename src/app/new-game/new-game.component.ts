import {Component, Input, OnInit} from '@angular/core';
import {Game, GameStatus} from "../game";
import {GamesService} from "../games.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  gameStatus: GameStatus;
  realGame: Game;
  post: string;

  constructor(
    private gamesService: GamesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getGameStatus();
    this.newGame();


  }

  newGame(): void {
    this.gamesService.newGame();
    this.gamesService.changeStatus();
    this.getGameNew();
  }
  getGameStatus(): void {
    this.gamesService.getGameStatus()
      .subscribe(gameStatus => this.gameStatus = gameStatus);

  }
  getGameNew(): void {
    this.gamesService.getGameById(this.gameStatus[0].nextgameid -1)
      .subscribe(game => this.realGame = game);
  }
  sendMessage(docId): void {
    this.realGame[0].data.messages.push(this.post);
    this.post = "";
    this.gamesService.saveMessage(this.realGame[0].data.messages, docId);
  }
  endGame(): void {
    this.gamesService.changeStatus();
    this.backToList();
  }
  backToList() {
    this.router.navigate(['/gamesList']);
  }












}
