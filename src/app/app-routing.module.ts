import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GamesComponent} from "./games/games.component";
import {GameDetailComponent} from "./game-detail/game-detail.component";
import {NewGameComponent} from "./new-game/new-game.component";

const routes: Routes = [
  {path: '', redirectTo: '/gamesList', pathMatch: 'full'},
  {path: 'gamesList', component: GamesComponent },
  {path: 'detail/:id', component: GameDetailComponent},
  {path: 'newGame', component: NewGameComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
