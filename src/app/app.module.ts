import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { NewGameComponent } from './new-game/new-game.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamesService } from './games.service';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { ShowGameComponent } from './show-game/show-game.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameDetailComponent,
    NewGameComponent,
    ShowGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
