import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

interface Message {
  id: number;
  text: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: any[];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection('games').valueChanges().subscribe((games: any)=> this.games = games);
  }

}
