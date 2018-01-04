import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../game';
import { GamesService } from "../games.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() game: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getGame();
  }
  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }
  goBack(): void {
    this.location.back();
  }

}
