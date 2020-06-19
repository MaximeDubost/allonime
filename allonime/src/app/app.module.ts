import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api"
import { InMemoryDataService } from "./in-memory-data.service"
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimeComponent } from './anime/anime.component';
import { GifComponent } from './gif/gif.component';
import { FooterComponent } from './footer/footer.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { SearchAnimeComponent } from './search-anime/search-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimeComponent,
    GifComponent,
    FooterComponent,
    AnimeDetailComponent,
    SearchAnimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
