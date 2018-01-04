import { Injectable } from '@angular/core';
import {Game} from "./game";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class GamesService {
  games: Game[];
  gamestatus: any;

  constructor(private db: AngularFirestore) {
    this.db.collection('games').valueChanges().subscribe((games: any)=> this.games = games);
    this.db.collection('gamestatus').valueChanges().subscribe((gamestatus: any)=> this.gamestatus = gamestatus);

  }
  getGames(): Observable<Game[]> {
    return of (this.games);
  }
  getGame(id: number): Observable<Game> {
    return of (this.games.find(game => game.id === id));
  }



}
