import {Component, DoCheck, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Game, GameStatus} from "../game";
import {GamesService} from "../games.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-show-game',
  templateUrl: './show-game.component.html',
  styleUrls: ['./show-game.component.css']
})
export class ShowGameComponent implements OnInit {

  gameStatus: GameStatus;
  realGame: Game;
  post: string;
  remainingTime: number;
  time;

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getGameStatus();
    this.getGameNew();
    this.remainingTime = 120;
    this.showClock();
  }


  getGameStatus(): void {
    this.gamesService.getGameStatus()
      .subscribe(gameStatus => this.gameStatus = gameStatus);

  }

  getGameNew(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gamesService.getGameById(id)
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

  //debería llamar a este codigo de setInterval, pero no reconoce al this.countDown y este no reconoce al this.endGame
  showClock() {
    this.time = setInterval(this.countDown(), 1000);
  }
  countDown() {

    if(this.remainingTime == 0) {
      console.log('game end');
      clearInterval(this.time);
      this.endGame();
    }else {
      this.remainingTime --;
      console.log(this.remainingTime);
      console.log('still game');
    }

  }



}
