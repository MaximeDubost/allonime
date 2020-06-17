import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningComponent } from './opening/opening.component';
import { EndingComponent } from './ending/ending.component';
import { GifComponent } from './gif/gif.component';
import { AnimeComponent } from './anime/anime.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'anime', component: AnimeComponent },
  { path: 'detail/:id', component: AnimeDetailComponent },
  { path: 'opening', component: OpeningComponent },
  { path: 'ending', component: EndingComponent },
  { path: 'gif', component: GifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }