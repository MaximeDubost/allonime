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
        id: 1,
        name: "Btooom!",
        image: "../../assets/img/btooom.png",
        openings: 
        [
          {
            id: 1,
            artiste: "Nano",
            nom_musique: "No pain, No game",
            code_musique: "5GjbLOe_cgw"
          },
          {
            id: 2,
            artiste: "Nano",
            nom_musique: "Exist",
            code_musique: "bpF2pvBHklc "
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "May’n",
            nom_musique: "Aozora",
            code_musique: "FGXms0STHJc"
          }
        ]
      },
      {
        id: 2, 
        name: "Code Geass", 
        image: "../../assets/img/code_geass.png", 
        openings: 
        [
          {
            id: 1,
            artiste: "FLOW",
            nom_musique: "COLORS",
            code_musique: "cZ7zQbMxm28 "
          },
          {
            id: 2,
            artiste: "Jinn",
            nom_musique: "Kaidoku Funou",
            code_musique: "YBhsDtFUgdM "
          },
          {
            id: 3,
            artiste: "",
            nom_musique: "",
            code_musique: "zp3jvJkv5fo "
          },
          {
            id: 4,
            artiste: "Access",
            nom_musique: "Hitomi no Tsubasa",
            code_musique: "bTU9RfI8WBk "
          },
          {
            id: 5,
            artiste: "FLOW",
            nom_musique: "WORLD END",
            code_musique: "mvFWDUhzrSo "
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "Ali Project",
            nom_musique: "Yuukyou Seishunka",
            code_musique: "J7DP9wivIOg "
          },
          {
            id: 2,
            artiste: "Sunset Swish",
            nom_musique: "Mozaiku Kakera",
            code_musique: "SdCXy3sw0uE "
          },
          {
            id: 3,
            artiste: "Orange Range",
            nom_musique: "Shiawase Neiro",
            code_musique: "T03jvnfD-lE"
          },
          {
            id: 4,
            artiste: "Ali Project",
            nom_musique: "Waga Routashi Aku no Hana",
            code_musique: "wg5DcG2KF1o"
          }
        ]
      },
      {
        id: 3, 
        name: "Death Note", 
        image: "../../assets/img/death_note.png", 
        openings: 
        [
          {
            id: 1,
            artiste: "Nightmare",
            nom_musique: "The World",
            code_musique: "8QE9cmfxx4s "
          },
          {
            id: 2,
            artiste: "Maximum The Hormone",
            nom_musique: "What’s up, people ?",
            code_musique: "Cnc319FOsNE "
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "Nightmare",
            nom_musique: "Alumina",
            code_musique: "SKWU3tyWnwA "
          },
          {
            id: 2,
            artiste: "Maximum The Hormone",
            nom_musique: "Zetsubou Billy",
            code_musique: "q-TfovUbqgQ "
          },
          {
            id: 3,
            artiste: "Coda",
            nom_musique: "Yoshihisa Hirano",
            code_musique: "YFf-itMF0e8"
          }
        ]
      },
      {
        id: 4, 
        name: "Kimetsu No Yaiba", 
        image: "../../assets/img/demon_slayer.png", 
        openings: [],
        endings: []
      },
      {
        id: 5, 
        name: "Full Metal Alchimist Brotherhood", 
        image: "../../assets/img/fmab.png", 
        openings: 
        [
          {
            id: 1,
            artiste: "YUI",
            nom_musique: "Again",
            code_musique: "2uq34TeWEdQ "
          },
          {
            id: 2,
            artiste: "Nico Touches the Walls",
            nom_musique: "Hologram",
            code_musique: "iOsN2FP3-l4"
          },
          {
            id: 3,
            artiste: "Sukima Switch",
            nom_musique: "Golden Time Lover",
            code_musique: "et7oxRRkPEo"
          },
          {
            id: 4,
            artiste: "CHEMISTRY",
            nom_musique: "Period",
            code_musique: "KMZBauH47Jo"
          },
          {
            id: 5,
            artiste: "SID",
            nom_musique: "Rain",
            code_musique: "cRA5gsdCf4c"
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "SID",
            nom_musique: "Uso",
            code_musique: "YtU0qbPXnag "
          },
          {
            id: 2,
            artiste: "Miho Fukuhara",
            nom_musique: "Let it Out",
            code_musique: "jhhXlBFpa5w"
          },
          {
            id: 3,
            artiste: "Lil'B",
            nom_musique: "Tsunai Da Te",
            code_musique: "WVqvHWYIzac"
          },
          {
            id: 4,
            artiste: "SCANDAL",
            nom_musique: "Shunkan SENTIMENTAL",
            code_musique: "yxkyElx0pXI"
          },
          {
            id: 5,
            artiste: "Shoko Nakagawa",
            nom_musique: "RAY OF LIGHT",
            code_musique: "7hpfhV9SLx0"
          }
        ]
      },
      {
        id: 6, 
        name: "GTO", 
        image: "../../assets/img/gto.png", 
        openings: 
        [
          {
            id: 1,
            artiste: "L’Arc-en-Ciel",
            nom_musique: "Driver’s High",
            code_musique: "phAoChN1nC4"
          },
          {
            id: 2,
            artiste: "Porno Graffitti",
            nom_musique: "Hitori no Yuro",
            code_musique: "xpAg0spgFJA"
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "Kirari",
            nom_musique: "Last Piece",
            code_musique: "Y9Y0XkSvQSI "
          },
          {
            id: 2,
            artiste: "Oe Senri",
            nom_musique: "Shizuku",
            code_musique: "TdZjdGN5TSo "
          }
        ]
      },
      {
        id: 7, 
        name: "Hajime No Ippo", 
        image: "../../assets/img/hni.png", 
        openings: [],
        endings: []
      },
      {
        id: 8, 
        name: "Hunter X Hunter", 
        image: "../../assets/img/hxh.png", 
        openings: [],
        endings: []
      },
      {
        id: 9, 
        name: "Jojo's Bizarre Adventure", 
        image: "../../assets/img/jojo.png", 
        openings: 
        [
          {
            id: 1,
            artiste: "Hiroaki \"TOMMY\" Tominaga",
            nom_musique: "JoJo ~Sono Chi no Sadame~",
            code_musique: "caM2hEV69ac"
          },
          {
            id: 2,
            artiste: "Coda",
            nom_musique: "BLOODY STREAM",
            code_musique: "KnmH7qQ0AVM"
          },
          {
            id: 3,
            artiste: "Jin Hashimoto",
            nom_musique: "STAND PROUD",
            code_musique: "dxmaTmLTWoU"
          },
          {
            id: 4,
            artiste: "JO☆STARS",
            nom_musique: "JoJo Sono Chi no Kioku",
            code_musique: "Ma-QcboGdM4"
          },
          {
            id: 5,
            artiste: "THE DU",
            nom_musique: "Crazy Noisy Bizarre Town",
            code_musique: "U-ZNfo_NlIU"
          },
          {
            id: 6,
            artiste: "batta",
            nom_musique: "chase",
            code_musique: "7PH_T4rKQ_o"
          },
          {
            id: 7,
            artiste: "Karen Aoki & Daisuke Hasegawa ",
            nom_musique: "Great Days",
            code_musique: "oBiVN5T7dv8 "
          },
          {
            id: 8,
            artiste: "Yugo Kanno",
            nom_musique: "Theme of Thus Spoke Kishibe Rohan",
            code_musique: "MapZ9_JvPkQ"
          },
          {
            id: 9,
            artiste: "Coda",
            nom_musique: "Fighting Gold",
            code_musique: "xBUweu5Ga7o"
          },
          {
            id: 10,
            artiste: "Daisuke Hasegawa",
            nom_musique: "Uragirimono no Requiem",
            code_musique: "vsq4S8cpD_k "
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "Yes",
            nom_musique: "Roundabout",
            code_musique: "RLsOEC1fZWU "
          },
          {
            id: 2,
            artiste: "The Bangles",
            nom_musique: "Walk Like an Egyptian",
            code_musique: "wV_CwCTOOMI"
          },
          {
            id: 3,
            artiste: "Pat Metheny Group",
            nom_musique: "Last Train Home",
            code_musique: "XUbBd4uOFHM"
          },
          {
            id: 4,
            artiste: "Oingo & Boingo",
            nom_musique: "Akuyaku◇Kyōsōkyoku",
            code_musique: "vh_ZK_Rb25s"
          },
          {
            id: 5,
            artiste: "Horse & Boingo",
            nom_musique: "Akuyaku◇Kyōsōkyoku",
            code_musique: "YhIDrA26laA"
          },
          {
            id: 6,
            artiste: "Savage Garden",
            nom_musique: "I Want You",
            code_musique: "R0U1_bnU508"
          },
          {
            id: 7,
            artiste: "JO☆UNITED",
            nom_musique: "Great Days",
            code_musique: "ryLNlTmEdD8"
          },
          {
            id: 8,
            artiste: "Coda",
            nom_musique: "FINDING THE TRUTH",
            code_musique: "BwBJfeJVOBs"
          },
          {
            id: 9,
            artiste: "Jodeci ",
            nom_musique: "Freek'n You",
            code_musique: "bD23aJzKbzQ"
          },
          {
            id: 10,
            artiste: "Enigma",
            nom_musique: "Modern Crusaders ",
            code_musique: "dOYkT3o57lg"
          }
        ]
      },
      {
        id: 10, 
        name: "Boku No Hero Academia", 
        image: "../../assets/img/mha.png", 
        openings: 
        [
          {
            id: 1,
            artiste: "Porno Graffitti",
            nom_musique: "The Day",
            code_musique: "-77UEct0cZM"
          },
          {
            id: 2,
            artiste: "Kenshi Yonezu",
            nom_musique: "Peace Sign",
            code_musique: "Q7w5IMyJ3pM"
          },
          {
            id: 3,
            artiste: "amazarashi",
            nom_musique: "Sora ni Utaeba",
            code_musique: "eaKT0sEYToQ"
          },
          {
            id: 4,
            artiste: "UVERworld",
            nom_musique: "ODD FUTURE",
            code_musique: "v1YojYU5nPQ"
          },
          {
            id: 5,
            artiste: "Lenny code fiction",
            nom_musique: "Make my story",
            code_musique: "XhIA35OAIw4"
          },
          {
            id: 6,
            artiste: "BLUE ENCOUNT",
            nom_musique: "Polaris",
            code_musique: "TeDDeIgGV6A"
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "Brian The Sun",
            nom_musique: "HEROES",
            code_musique: "fgMuOlhLtEQ "
          },
          {
            id: 2,
            artiste: "Little Glee Monster",
            nom_musique: "Dakara, Hitori Janai",
            code_musique: "47-0TH6O3Ec"
          },
          {
            id: 3,
            artiste: "LiSA",
            nom_musique: "Datte Atashi no Hero",
            code_musique: "71aY4XrN0pE"
          },
          {
            id: 4,
            artiste: "miwa",
            nom_musique: "Update",
            code_musique: "_A5vGzbp6Tw"
          },
          {
            id: 5,
            artiste: "Masaki Suda",
            nom_musique: "Long Hope Philia",
            code_musique: "Co06YzyUYTA"
          },
          {
            id: 6,
            artiste: "Sayuri",
            nom_musique: "Kokai no Uta",
            code_musique: "0Dt7acPtzd0"
          }
        ]
      },
      {
        id: 11, 
        name: "Naruto", 
        image: "../../assets/img/naruto.png", 
        openings: [],
        endings: []
      },
      {
        id: 12, 
        name: "One Piece", 
        image: "../../assets/img/one_piece.png", 
        openings: [],
        endings: []
      },
      {
        id: 13, 
        name: "One Punch Man", 
        image: "../../assets/img/opm.png", 
        openings: [],
        endings: []
      },
      {
        id: 14, 
        name: "Shingeki No Kyojin", 
        image: "../../assets/img/snk.png", 
        openings: 
        [
          {
            id: 1,
            artiste: "Linked Horizon",
            nom_musique: "Guren no Yumiya",
            code_musique: "8OkpRK2_gVs"
          },
          {
            id: 2,
            artiste: "Linked Horizon",
            nom_musique: "Jiyuu no Tsubasa",
            code_musique: "PbWFpzi8C94 "
          },
          {
            id: 3,
            artiste: "Linked Horizon",
            nom_musique: "Shinzou wo Sasageyo",
            code_musique: "CID-sYQNCew"
          },
          {
            id: 4,
            artiste: "YOSHIKI, HYDE",
            nom_musique: "Red Swan",
            code_musique: "swwUoExDIng "
          },
          {
            id: 5,
            artiste: "Linked Horizon",
            nom_musique: "Shoukei to Shikabane no Michi",
            code_musique: "0dK7JgKivQM "
          }
        ],
        endings: 
        [
          {
            id: 1,
            artiste: "Yoko Hikasa",
            nom_musique: "Utsukushiki Zankoku na Sekai",
            code_musique: "O4wezNlsxB0 "
          },
          {
            id: 2,
            artiste: "Cinema Staff",
            nom_musique: "Great Escape",
            code_musique: "sFdzNhJAdco "
          },
          {
            id: 3,
            artiste: "Shinsei Kamattechan",
            nom_musique: "Yuugure no Tori",
            code_musique: "rbfHY8mkhT8 "
          },
          {
            id: 4,
            artiste: "Linked Horizon",
            nom_musique: "Akatsuki no Chinkonka",
            code_musique: "mHeHzy1S4D8 "
          },
          {
            id: 5,
            artiste: "Cinema Staff",
            nom_musique: "Name of Love",
            code_musique: "hQuG-PdVJDc"
          }
        ]
      },
      {
        id: 15, 
        name: "Steins Gate", 
        image: "../../assets/img/steins_gate.png", 
        openings: [],
        endings: []
      },
      {
        id: 16, 
        name: "Vinland Saga", 
        image: "../../assets/img/vinland_saga.png", 
        openings: [],
        endings: []
      }
    ]
    return { animes }
  }

  genId(animes: Anime[]): number {
    return animes.length > 0 ? Math.max(...animes.map(animes => animes.id)) + 1 : 11;
  }
}
