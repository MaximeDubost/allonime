import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { ActivatedRoute } from '@angular/router';
import videoLauncher from './videoLauncher';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  anime: Anime
  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {
    videoLauncher.tabSwitchingSystm();
    this.getAnimeDetail();
  }

  getAnimeDetail(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.animeService.getAnimeDetail(id).subscribe(anime => this.anime = anime)
  }

}
