import { Injectable } from '@angular/core';
import {Game, GameStatus} from "./game";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class GamesService {


  constructor(private db: AngularFirestore) {

  }
  getGames(): Observable<any> {
    return this.db.collection('games', ref => ref.orderBy('id')).valueChanges();
  }
  getGame(id: number): Observable<any> {
    return this.db.collection('games', ref => ref.where('id' , '==' , id)).valueChanges();
  }
  getGameStatus(): Observable<any> {

    return this.db.collection('gamestatus').valueChanges();

  }

  addGame() {
    //this.db.collection('games').add('id': gameId, 'messages': []);
  }







}
