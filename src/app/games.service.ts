import { Injectable } from '@angular/core';
import {Game, GameStatus} from "./game";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class GamesService {
  gameId;
  gameStatus: any;
  allGamesCollection: AngularFirestoreCollection<Game>;
  allGames: any;

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
  getGameById(id:number): Observable<any> {
    this.allGamesCollection = this.db.collection<Game>('games', ref => ref.where('id', '==', id));
    this.allGames = this.allGamesCollection.snapshotChanges().map( actions => {
              return actions.map( action => {
                const data = action.payload.doc.data();
                const id = action.payload.doc.id;
                return {id, data};
              });
            });
    return this.allGames;
  }
  newGame(): void {
    this.gameId = this.gameStatus[0].nextgameid;
    this.db.collection('games').add({
      id: this.gameId,
      startGame: new Date(),
      messages: []
    });
    this.updatedId(this.gameId);

  }
  getGameId() {
    this.db.collection('gamestatus').valueChanges()
      .subscribe(gameStatus => this.gameStatus = gameStatus);

  }
  updatedId(actualId) {
    this.db.collection('gamestatus').doc('status').update({
      "nextgameid": actualId +1
    })
  }

  changeStatus() {
    this.db.collection('gamestatus').doc('status').update({
      "active": !this.gameStatus[0].active
    })
  }

  saveMessage(array, id): void {
    this.db.collection('games').doc(id).update({
      "messages": array
    })
  }













}
