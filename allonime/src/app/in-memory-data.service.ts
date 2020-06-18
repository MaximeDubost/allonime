import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api"
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let animes = [
      {
        id: 1, name: "Btoom", image: "../../assets/img/btooom.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },

        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },

        ]
      },
      {
        id: 2, name: "Code Geass", image: "../../assets/img/code_geass.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },

        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 3, name: "Death Note", image: "../../assets/img/death_note.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },

        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },

        ]
      },
      {
        id: 4, name: "Kimetsu No Yaiba", image: "../../assets/img/demon_slayer.png", openings: [
          { artiste: "LiSA", nom_musique: "Gurenge", code_musique: "pmanD_s7G3U" }
        ],
        endings: [
          { artiste: "FictionJunction feat LiSA", nom_musique: "From the Edge", code_musique: "7kdhPXfYkYM" },
        ]
      },
      {
        id: 5, name: "Full Metal Alchimist Brotherhood", image: "../../assets/img/fmab.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },

        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 6, name: "GTO", image: "../../assets/img/gto.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "Je ne sais plus" }
        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 7, name: "Hajime No Ippo", image: "../../assets/img/hni.png", openings: [
          { artiste: "Shocking Lemons", nom_musique: "Under Star", code_musique: "9S50a4rStNA" },
          { artiste: "Shocking Lemons", nom_musique: "Inner Light", code_musique: "NI4OwLYF1pM" },
          { artiste: "Tsuneo Imahori", nom_musique: "Tumbling Dice", code_musique: "GM_6OTP6XPQ" }
        ],
        endings: [
          { artiste: "Naoya Mori", nom_musique: "Yuuzora no Kamihikouki", code_musique: "rapewtS7bcE" },
          { artiste: "Naoya Mori", nom_musique: "360°", code_musique: "8SEnXoco6Kk" },
          { artiste: "Saber Tiger", nom_musique: "Eternal Loop", code_musique: "JYntzDOe1BM" }
        ]
      },
      {
        id: 8, name: "Hunter X Hunter", image: "../../assets/img/hxh.png", openings: [
          { artiste: "Ono Masatoshi", nom_musique: "Departure!", code_musique: "faqmNf_fZlE" }
        ],
        endings: [
          { artiste: "Fear, and Loathing in Las Vegas", nom_musique: "Just Awake", code_musique: "ELuVDnlB8PE" },
          { artiste: "Galneryus", nom_musique: "HUNTING FOR YOUR DREAM", code_musique: "tK-d2LJlaaQ" },
          { artiste: "Yoshihisa Hirano", nom_musique: "Riot", code_musique: "QWOQbcvK-fg" },
          { artiste: "YUZU", nom_musique: "REASON", code_musique: "tK-wnOGkmMDMuM" },
          { artiste: "YUZU", nom_musique: "Nagareboshi Kirari", code_musique: "kc6MHszfb2I" },
          { artiste: "YUZU", nom_musique: "Hyouriittai", code_musique: "waW3LjX-y4E" },
          { artiste: "Yoshihisa Hirano", nom_musique: "Understanding", code_musique: "wHr5O5QLTVc" }
        ]
      },
      {
        id: 9, name: "Jojo Bizarre Adventure", image: "../../assets/img/jojo.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "Je ne sais plus" }
        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 10, name: "Boku No Hero Academia", image: "../../assets/img/mha.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "Je ne sais plus" }
        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 11, name: "Naruto", image: "../../assets/img/naruto.png", openings: [
          { artiste: "Hound Dog", nom_musique: "R★O★C★K★", code_musique: "4t__wczfpRI" },
          { artiste: "Asian Kung-fu Generation", nom_musique: "Haruka Kanata", code_musique: "SRn99oN1p_c" },
          { artiste: "Little by little", nom_musique: "Kanashimi wo Yasashisa ni", code_musique: "XwJEFzsqNoY" },
          { artiste: "FLOW", nom_musique: "GO!!!", code_musique: "xjBTNbEXbAA" },
          { artiste: "Sambomaster", nom_musique: "Seishun Kyosokyoku", code_musique: "lilv4MvBY6E" },
          { artiste: "Stance Punks", nom_musique: "No Boy, No Cry", code_musique: "pWyoHrMzAZQ" },
          { artiste: "Snowkel", nom_musique: "Namikaze Satellite", code_musique: "pY15k20Hqq0" },
          { artiste: "FLOW", nom_musique: "Re:member", code_musique: "yB2g22359Fg" },
          { artiste: "Hearts Grow", nom_musique: "YURA YURA", code_musique: "m8kR0FQ7Wk" }
        ],
        endings: [
          { artiste: "Akeboshi", nom_musique: "Wind", code_musique: "Oyhpwyrq1N0" },
          { artiste: "Rythem", nom_musique: "Harmonia", code_musique: "VTIK1gBhzXk" },
          { artiste: "Orange Range", nom_musique: "Viva Rock ~Japanese Side~", code_musique: "pZaRs2bvy4U" },
          { artiste: "Raiko", nom_musique: "ALIVE", code_musique: "kGGgOb61LP0" },
          { artiste: "Mass Missile", nom_musique: "Ima made Nando mo", code_musique: "ZKd5C6w7UvA" },
          { artiste: "Tia", nom_musique: "Ryusei", code_musique: "qN0qEnisTCA" },
          { artiste: "Captain Straydum", nom_musique: "Mountain A Go Go Too", code_musique: "kjd_3viXu0" },
          { artiste: "GagagaSP", nom_musique: "Hajimete Kimi to Shabetta", code_musique: "0NuKUzjXu2s" },
          { artiste: "No Regret Life", nom_musique: "Nakushita Kotoba", code_musique: "7PG4N8tL6Pw" },
          { artiste: "Analogfish", nom_musique: "Speed", code_musique: "A7pi4-Et5lY" }
        ]
      },
      {
        id: 12, name: "One Piece", image: "../../assets/img/one_piece.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "Je ne sais plus" }
        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 13, name: "One Punch Man", image: "../../assets/img/opm.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "Je ne sais plus" }
        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 14, name: "Shingeki No Kyojin", image: "../../assets/img/snk.png", openings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "Je ne sais plus" }
        ],
        endings: [
          { artiste: "Nano", nom_musique: "No pain no gain" },
          { artiste: "Nano", nom_musique: "No pain no gain" }
        ]
      },
      {
        id: 15, name: "Steins Gate", image: "../../assets/img/steins_gate.png", openings: [
          { artiste: "Kanako Itou", nom_musique: "Hacking to the Gate", code_musique: "dd7BILZcYAY" }
        ],
        endings: [
          { artiste: "Yui Sakakibara", nom_musique: "Toki Tsukasadoru Juuni no Meiyaku", code_musique: "NdlqgWbCuIU" },
          { artiste: "Takeshi Abo", nom_musique: "Fake Verthandi", code_musique: "hW_t0875Gk" },
          { artiste: "Kanako Itou", nom_musique: "Sky Clad no Kansokusha", code_musique: "MfCWTRYWIsg" },
          { artiste: "Kanako Itou", nom_musique: "Another Heaven", code_musique: "EyJXl8CNBk4" }
        ]
      },
      {
        id: 16, name: "Vinland Saga", image: "../../assets/img/vinland_saga.png", openings: [
          { artiste: "Survive Said The Prophet", nom_musique: "MUKANJYO", code_musique: "xEVcTStgA4A" },
          { artiste: "MAN WITH A MISSION", nom_musique: "Dark Crow", code_musique: "2e1t5VM9jTk" }
        ],
        endings: [
          { artiste: "Aimer", nom_musique: "Torches", code_musique: "rHSpaWRNBS0" },
          { artiste: "milet", nom_musique: "Drown", code_musique: "iXjvemy6H9w" }
        ]
      }
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
