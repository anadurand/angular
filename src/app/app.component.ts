import {Component, OnChanges, OnInit} from '@angular/core';
import {GamesService} from "./games.service";
import {GameStatus} from "./game";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Game Cadaver exquisito';
  gameStatus: GameStatus;

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.getGameStatus();
    this.getId();
  }

  getGameStatus(): void {
    this.gamesService.getGameStatus()
      .subscribe(gameStatus => this.gameStatus = gameStatus);

  }
  getId(): void {
    this.gamesService.getGameId();
  }
}
