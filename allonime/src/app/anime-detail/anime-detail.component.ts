import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { ActivatedRoute } from '@angular/router';
import videoLauncher from './videoLauncher';
import { Location } from '@angular/common';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit, OnChanges {
  anime: Anime
  constructor(private route: ActivatedRoute, private animeService: AnimeService, private location: Location) {
    console.log("On constructor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges : ", changes)
  }

  ngOnInit(): void {
    videoLauncher.tabSwitchingSystm();
    this.getAnimeDetail();
  }

  getAnimeDetail(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.animeService.getAnimeDetail(id).subscribe(anime => this.anime = anime)
    console.log("On getAnimeDetail")
  }

}
