import { Component, OnInit } from '@angular/core';
import {GameStatus} from "../game";
import {GamesService} from "../games.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {


  constructor(private gamesService: GamesService) { }

  ngOnInit() {


  }







}
