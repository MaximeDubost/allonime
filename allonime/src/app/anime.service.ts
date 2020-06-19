import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Anime } from './anime';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private urlAnime = "api/animes/"

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.urlAnime).pipe(
      tap(_ => console.log("fetched Animes")),
      catchError(this.handleError<Anime[]>("getAnimes", []))
    )
  }

  getAnimeDetail(id: string): Observable<Anime> {
    return this.http.get<Anime>(this.urlAnime + id).pipe(
      tap(_ => console.log("fetched Anime's details")),
      catchError(this.handleError<Anime>("getAnimeDetail")))
  }

  searchAnime(term: string): Observable<Anime[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Anime[]>(`${this.urlAnime}?name=${term}`).pipe(
      tap(x => x.length ? console.log("Anime found") : console.log("Anime not found")),
      catchError(this.handleError<Anime[]>('searchAnime', [])))
  }

}
