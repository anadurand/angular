import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Game} from "../game";
import {GamesService} from "../games.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }
}
