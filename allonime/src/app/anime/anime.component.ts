import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { Location } from "@angular/common"

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animes: Anime[]

  constructor(private animeService: AnimeService, private location: Location) { }

  ngOnInit(): void {
    this.getAnime()
  }

  getAnime(): void {
    this.animeService.getAnimes().subscribe(animes => this.animes = animes)
  }

}
