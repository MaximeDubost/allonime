import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api"
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let animes = [
      { id: 1, name: "Btoom", image: "../../assets/img/btooom.png" },
      { id: 2, name: "Code Geass", image: "../../assets/img/code_geass.png" },
      { id: 3, name: "Death Note", image: "../../assets/img/death_note.png" },
      { id: 4, name: "Kimetsu No Yaiba", image: "../../assets/img/demon_slayer.png" },
      { id: 5, name: "Full Metal Alchimist Brotherhood", image: "../../assets/img/fmab.png" },
      { id: 6, name: "GTO", image: "../../assets/img/gto.png" },
      { id: 7, name: "Hajime No Ippo", image: "../../assets/img/hni.png" },
      { id: 8, name: "Hunter X Hunter", image: "../../assets/img/hxh.png" },
      { id: 9, name: "Jojo Bizarre Adventure", image: "../../assets/img/jojo.png" },
      { id: 10, name: "Boku No Hero Academia", image: "../../assets/img/mha.png" },
      { id: 11, name: "Naruto", image: "../../assets/img/naruto.png" },
      { id: 12, name: "One Piece", image: "../../assets/img/one_piece.png" },
      { id: 13, name: "One Punch Man", image: "../../assets/img/opm.png" },
      { id: 14, name: "Shingeki No Kyojin", image: "../../assets/img/snk.png" },
      { id: 15, name: "Steins Gate", image: "../../assets/img/steins_gate.png" },
      { id: 16, name: "Vinland Saga", image: "../../assets/img/vinland_saga.png" }
    ]
    return { animes }
  }


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(animes: Anime[]): number {
    return animes.length > 0 ? Math.max(...animes.map(animes => animes.id)) + 1 : 11;
  }
}
