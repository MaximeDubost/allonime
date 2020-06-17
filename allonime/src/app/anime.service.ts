import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private urlAnime = "api/animes/"

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.urlAnime)
  }

  getAnimeDetail(id: string): Observable<Anime> {
    return this.http.get<Anime>(this.urlAnime + id)
  }

}
