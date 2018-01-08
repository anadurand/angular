import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GamesComponent} from "./games/games.component";
import {GameDetailComponent} from "./game-detail/game-detail.component";
import {NewGameComponent} from "./new-game/new-game.component";
import {ShowGameComponent} from "./show-game/show-game.component";

const routes: Routes = [
  {path: '', redirectTo: '/gamesList', pathMatch: 'full'},
  {path: 'gamesList', component: GamesComponent },
  {path: 'detailGame/:id', component: GameDetailComponent},
  {path: 'newGame', component: NewGameComponent},
  {path: 'showGame/:id', component: ShowGameComponent}
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
