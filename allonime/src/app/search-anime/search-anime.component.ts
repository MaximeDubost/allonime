import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { $ } from 'protractor';


@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {
  animes$: Observable<Anime[]>;
  private animeInput = new Subject<string>();

  constructor(private animeService: AnimeService) { }

  searchAnime(animeInput: string): void {
    console.log(animeInput)
    this.animeInput.next(animeInput)
  }

  clear() {
    this.animeInput.next("")
  }

  ngOnInit(): void {
    this.animes$ = this.animeInput.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.animeService.searchAnime(term)))
  }


}
