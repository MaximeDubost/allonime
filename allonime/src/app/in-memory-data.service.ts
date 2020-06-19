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
              code_musique: "bpF2pvBHklc"
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
          ],
          synopsis: "BTOOOM! est un jeu online au succès mondial. Celui-ci consiste à battre l'équipe adverse avec des bombes pour seules armes.Ryouta Sakamoto, 22 ans et sans emploi, est l'un de ces nombreux joueurs qui passent leur temps dessus. Qui plus est, il peut se targuer d'apparemment faire partie des meilleurs. Mais lorsqu'il se réveille sur une île inconnue, loin du confort de sa chambre, la réalité le rattrape vite quand il se rend compte qu'il va devoir jouer à BTOOOM! en vrai, sous peine d'y laisser sa vie."
      },
      {
        id: 2,
        name: "Code Geass",
        image: "../../assets/img/code_geass.png",
        synopsis: "Le 10 juin 2010 du calendrier impérial, le Nouvel Empire de Britannia a écrasé les forces japonaises et a conquis le pays en moins d'un mois grâce à ses mechas nommés Knightmare. Le Japon a perdu sa liberté et a été renommé Zone 11 tandis que les japonais ont perdu leur identité et sont appelés 'Elevens'. Ces derniers sont forcés de vivre dans des ghettos tandis que les colons britanniens occupent la majeure partie du territoire. Pourtant, des mouvements rebelles naissent et les nationalistes japonais continuent la lutte pour l'indépendance. Un jeune homme nommé Lelouch s'est juré de détruire l'empire de Britannia depuis que son père, l'empereur lui-même, n'a rien fait pour pourchasser les terroristes qui ont tué sa mère et estropié sa jeune sœur. Sept ans plus tard, lors d'une altercation entre les deux camps, il rencontre un groupe de rebelles Elevens qui ont volé un secret militaire : une mystérieuse jeune fille. En entrant en contact avec elle, Lelouch obtient le Geass, un pouvoir qui lui permet de contrôler la pensée de toutes les personnes qui croisent son regard, mais qui ne fonctionne qu'une seule fois sur chacune d'elles. Grâce à ce pouvoir, Lelouch va pouvoir mener le combat qu'il a toujours voulu contre Brittania et poursuivre ses deux rêves : venger sa mère et créer un monde où sa sœur pourra vivre en paix.",
        openings:
          [
            {
              id: 1,
              artiste: "FLOW",
              nom_musique: "COLORS",
              code_musique: "cZ7zQbMxm28"
            },
            {
              id: 2,
              artiste: "Jinn",
              nom_musique: "Kaidoku Funou",
              code_musique: "YBhsDtFUgdM"
            },
            {
              id: 3,
              artiste: "",
              nom_musique: "",
              code_musique: "zp3jvJkv5fo"
            },
            {
              id: 4,
              artiste: "Access",
              nom_musique: "Hitomi no Tsubasa",
              code_musique: "bTU9RfI8WBk"
            },
            {
              id: 5,
              artiste: "FLOW",
              nom_musique: "WORLD END",
              code_musique: "mvFWDUhzrSo"
            }
          ],
        endings:
          [
            {
              id: 1,
              artiste: "Ali Project",
              nom_musique: "Yuukyou Seishunka",
              code_musique: "J7DP9wivIOg"
            },
            {
              id: 2,
              artiste: "Sunset Swish",
              nom_musique: "Mozaiku Kakera",
              code_musique: "SdCXy3sw0uE"
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
        synopsis : "Light Yagami, un jeune étudiant surdoué, ramasse un jour le \"Death Note\", un carnet tenu auparavant par un shinigami (Dieu de la mort), Ryuk, qui apparemment s'ennuyait dans son monde. Il suffit d'écrire le nom d'une personne dans ce carnet, et celle-ci meurt (selon certaines conditions que le shinigami expliquera à Light lors de leur rencontre). C'est ainsi qu'avec le \"Death Note\" entre les mains, Light décide de débarrasser la planète de tous les criminels pour en faire un monde juste, un monde parfait.Cependant, qui est-il pour juger les gens ? Il devient donc le pire criminel recherché de toute la planète...",
        openings:
          [
            {
              id: 1,
              artiste: "Nightmare",
              nom_musique: "The World",
              code_musique: "8QE9cmfxx4s"
            },
            {
              id: 2,
              artiste: "Maximum The Hormone",
              nom_musique: "What’s up, people ?",
              code_musique: "Cnc319FOsNE"
            }
          ],
        endings:
          [
            {
              id: 1,
              artiste: "Nightmare",
              nom_musique: "Alumina",
              code_musique: "SKWU3tyWnwA"
            },
            {
              id: 2,
              artiste: "Maximum The Hormone",
              nom_musique: "Zetsubou Billy",
              code_musique: "q-TfovUbqgQ"
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
        id: 4, name: "Kimetsu No Yaiba", image: "../../assets/img/demon_slayer.png", openings: [
          { artiste: "LiSA", nom_musique: "Gurenge", code_musique: "pmanD_s7G3U" }
        ],
        endings: [
          { artiste: "FictionJunction feat LiSA", nom_musique: "From the Edge", code_musique: "7kdhPXfYkYM" },
        ],
        synopsis : "Basé sur le manga Kimetsu no Yaiba de Gotoge Koyoharu. Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirou, ces rumeurs vont bientôt devenir sa dure réalité ...  Depuis la mort de son père, Tanjirou a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.    Cependant, ce peu de bonheur se retrouve détruit le jour où Tanjirou découvre que sa famille s'est fait massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirou, celle de combattre les démons et de faire redevenir sa sœur humaine."
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
              code_musique: "2uq34TeWEdQ"
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
              code_musique: "YtU0qbPXnag"
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
          ],
          synopsis : "Cette version est une seconde adaptation du manga de Hiromu Arakawa. Elle est bien plus fidèle au manga que la précédente version, et le design change quelque peu. Edward Elric et son frère Alphonse Elric sont de jeunes Alchimistes. En tentant de ramener leur mère à la vie, ils ont payé un lourd tribut, et ils tentent désormais de récupérer ce qu'ils ont perdu. Pour cela, Edward est devenu Alchimiste d'État : le Fullmetal Alchemist. Mais au cours de leurs recherches, bien des épreuves attendent les deux frères et des êtres étranges : les Homonculus, les poursuivent."
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
              code_musique: "Y9Y0XkSvQSI"
            },
            {
              id: 2,
              artiste: "Oe Senri",
              nom_musique: "Shizuku",
              code_musique: "TdZjdGN5TSo"
            }
          ],
          synopsis : "Ancien voyou, chef de gang, Eikichi Onizuka décide un jour de devenir prof. Sa vocation n'a rien de pédagogique. Ce qu'il veut, c'est pouvoir sortir avec les étudiantes du lycée où il travaille. Pourtant, au fil des chapitres, on se rend compte que le sens de la justice et de l'honneur de notre héros vont l'amener à devenir un véritable enseignant. Cette série de Tôru Fujisawa a connu un tel succès au Japon qu'elle fut adaptée en feuilleton \"live\" à la télé et au cinéma. Drôle et \"vrai\", plein de rebondissements et doté d'une psychologie rare dans ce domaine, GTO met en scène des adolescents en quête d'identité comme il en existe partout.",
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
        ],
        synopsis: "Ippo Makunouchi est un jeune garçon de 16 ans tout ce qu'il y a de plus ordinaire. Il passe son temps libre à aider sa mère à tenir son affaire de pêche, de ce fait il n'a pas d'amis. Un jour, alors qu'il se fait maltraiter par une bande de jeunes plus âgés que lui, Takamura, un des plus grands boxeurs lui vient en aide et l'emmène dans son club de boxe pour le soigner.Une fois remis sur pieds, Ippo s'essaye à la boxe suite à une proposition de Takamura et il se révèle posséder une force incroyable. Takamura, subjugué par la force du jeune garçon lui propose de venir s'entraîner dans son club. Ippo découvre alors en lui une véritable passion pour la boxe. De plus, il est extrêmement heureux d'être aux cotés de Takamura qu'il voit comme son modèle. C'est alors le début d'une longue aventure semée d'embûches pour le jeune Ippo."
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
        ],
        synopsis : "Gon Freeks est un jeune garçon provenant d'un petit village aimé des animaux. Il rêve de devenir Hunter afin de retrouver son père, le plus grand Hunter de tous, qu'il n'a jamais vu qu'en photo. Mais pour devenir Hunter professionnel, il faut passer plusieurs épreuves et tests très difficiles. Pendant les épreuves, Gon fait la connaissance d'amis tel que Kirua, Kurapica, Leorio mais de très dangereux combattants sont également présent afin de passer le test de Hunter.        "
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
              artiste: "Karen Aoki & Daisuke Hasegawa",
              nom_musique: "Great Days",
              code_musique: "oBiVN5T7dv8"
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
              code_musique: "vsq4S8cpD_k"
            }
          ],
        endings:
          [
            {
              id: 1,
              artiste: "Yes",
              nom_musique: "Roundabout",
              code_musique: "RLsOEC1fZWU"
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
              artiste: "Jodeci",
              nom_musique: "Freek'n You",
              code_musique: "bD23aJzKbzQ"
            },
            {
              id: 10,
              artiste: "Enigma",
              nom_musique: "Modern Crusaders",
              code_musique: "dOYkT3o57lg"
            }
          ],
          synopsis : "Cette longue série nous raconte le destin de la lignée Joestar. Tout commence avec Jonathan Joestar, fils d'un aristocrate anglais, qui vit une existence bien ordinaire. Tout change lorsque Lord Joestar prend sous son aile Dio Brando, jeune homme égocentrique et vaniteux, dont le père vient de décéder. Une rivalité entre les deux garçon s'installe alors, et Dio décide de tout faire pour mettre Jonathan plus bas que terre et s'emparer de l'héritage de Lord Joestar. La lutte entre les deux jeunes hommes atteint son paroxysme lorsque Dio enfile un mystérieux masque de pierre Aztèque le changeant en une créature sanguinaire et invincible. Pour Jonathan, il ne fait aucun doute qu'il doit se débarrasser de ce redoutable adversaire, et la bataille qui commence s'étendra jusqu'aux générations futures de la famille Joestar..."
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
              code_musique: "fgMuOlhLtEQ"
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
          ],
          synopsis : "Dans un futur proche suite à une mutation génétique, 80% de la population mondiale possède des super-pouvoirs appelés \"Alters\". Les super-héros protègent la population mondiale face aux super-vilains qui utilisent leur Alter à des fins maléfiques. Le plus célèbre des super-héro se nomme All Might. Izuku Midoriya en est fan, et rêve d'intégrer la filière super-héroïque du lycée Yuei pour suivre les traces de son idole ainsi devenir le plus grand des super-héros. Malheureusement, Izuku ne possède pas de pouvoir."
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
        ], synopsis : "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois. Il est craint du fait qu'il détient en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, le quatrième Hokage, Minato Namikaze, réussit à sceller ce démon dans le corps de Naruto. Malheureusement il y laissa la vie. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue et Naruto sera confronté à un bon nombre d'épreuves et devra affronter de nombreux ennemis pour atteindre son but !"
      },
      {
        id: 12, name: "One Piece", image: "../../assets/img/one_piece.png", openings: [
          { artiste: "Hiroshi Kitadani", nom_musique: "We Are! (eps 1-47)", code_musique: "107yRkr2qNo" },
          { artiste: "Folder5", nom_musique: "Believe (eps 48-115)", code_musique: "2U3o7AdHcEY" },
          { artiste: "Hikari E", nom_musique: "The Babystars (eps 116-168)", code_musique: "xpl6KQVHTeM" },
          { artiste: "Bon-Bon Blanco", nom_musique: "Bon Voyage! (eps 169-206)", code_musique: "81Wye190I78" },
          { artiste: "BOYSTYLE", nom_musique: "Kokoro no Chizu (eps 207-263)", code_musique: "cURxThkrckQ" },
          { artiste: "D-51", nom_musique: "Brand New World (eps 264-278)", code_musique: "s5ThzR0Ii8A" },
          { artiste: "The Straw Hat Pirates", nom_musique: "We Are! (eps 279-283)", code_musique: "U-1rNzn1w6o" },
          { artiste: "Tackey & Tsubasa", nom_musique: "Crazy Rainbow (eps 284-325)", code_musique: "ITng--rGaUk" },
          { artiste: "TVXQ", nom_musique: "We Are (ウィーアー! 〜10周年Ver.〜) (eps 373-394)", code_musique: "qMmFKWa33T4" },
          { artiste: "TVXQ", nom_musique: "Share the World (eps 395-425)", code_musique: "Y3g7YEdYlw0" },
          { artiste: "Straw Hat Crew and Mari Yaguchi", nom_musique: "Kaze wo Sagashite (風をさがして) (eps 426-458)", code_musique: "Y3g7YEdYlw0" },
          { artiste: "The Rootless", nom_musique: "One Day (eps 426-458)", code_musique: "avhTGd_OkOM" },
          { artiste: "Namie Amuro", nom_musique: "Fight Together (eps 493-516)", code_musique: "88KgwiSzBDU" },
          { artiste: "Hiroshi Kitadani", nom_musique: "We go! (ウィーゴー!) (eps 517-541, 543-589)", code_musique: "3MMEwRnfF-0" },
          { artiste: "Kouta Shinzato", nom_musique: "Hands Up! (eps 591-628)", code_musique: "3u3mWh5VbJA" },
          { artiste: "AAA", nom_musique: "Wake up! (eps 629-686)", code_musique: "JKf7E-JXLXQ" },
          { artiste: "GENERATIONS from EXILE TRIBE", nom_musique: "Hard Knock Days (eps 687-746)", code_musique: "wwCDFIuT6AY" },
          { artiste: "Hiroshi Kitadani", nom_musique: "We can! (ウィーキャン!) (eps 747-806)", code_musique: "CVkPX9tx8vQ" },
          { artiste: "Namie Amuro", nom_musique: "Hope (eps 807-855)", code_musique: "gw2hvQ6ayqo" },
          { artiste: "V6", nom_musique: "Super Powers (eps 856-891)", code_musique: "t7xHamn5inQ" },
          { artiste: "Hiroshi Kitadani", nom_musique: "OVER THE TOP (eps 892-)", code_musique: "uUNj7naB0xQ" },
        ],
        endings: [
          { artiste: "Maki Otsuki", nom_musique: "memories (eps 1-30)", code_musique: "FOFxhhNkpJc" },
          { artiste: "Maki Otsuki", nom_musique: "RUN! RUN! RUN! (eps 31-63)", code_musique: "HlOI6q21H2s" },
          { artiste: "TOMATO CUBE", nom_musique: "watashi ga iru yo (eps 64-73)", code_musique: "zqgTcab6UJQ" },
          { artiste: "Suitei-Shoujo", nom_musique: "Suitei-Shoujo (eps 74-81)", code_musique: "52zgl3_cNwE" },
          { artiste: "AI-SACHI", nom_musique: "BEFORE DAWN (eps 82-94)", code_musique: "vcwFlUP9JI8" },
          { artiste: "The Kaleidoscope", nom_musique: "'fish' (eps 95-106)", code_musique: "vRFJNVi_Lpc" },
          { artiste: "Takako Uehara", nom_musique: "GLORY -Kimi ga iru Kara- (GLORY-君がいるから-) (eps 107-118)", code_musique: "uzyBebvSj4Y" },
          { artiste: "Janne da Arc", nom_musique: "Shining ray (eps 119-127, 129-132)", code_musique: "Iq9tfHhUFV0" },
          { artiste: "Straw Hat Pirates", nom_musique: "Family (ep 128)", code_musique: "azVfXTBO9II" },
          { artiste: "The Straw Hat Pirates", nom_musique: "Family (ep 128)", code_musique: "phPdJyLnXuc" },
          { artiste: "Ruppina", nom_musique: "Free Will (eps 133-156)", code_musique: "CNQv2Hj3lUA" },
          { artiste: "Ruppina", nom_musique: "FAITH (eps 157-168)", code_musique: "y2dLcTVRQDo" },
          { artiste: "shela", nom_musique: "Tsuki to Taiyou (月と太陽) (eps 182-195)", code_musique: "_6KAqkicRLg" },
          { artiste: "Aiko Ikuta", nom_musique: "DREAMSHIP (eps 196-206)", code_musique: "2jAvhMkzfFk" },
          { artiste: "Tackey & Tsubasa", nom_musique: "Mirai Koukai (未来航海) (eps 207-230)", code_musique: "gB9WsqntGjA" },
          { artiste: "Asia Engineer", nom_musique: "Eternal Pose (エターナルポーズ) (eps 231-245)", code_musique: "qN6TYEk_jcg" },
          { artiste: "TRIPLANE", nom_musique: "Dear friends (eps 246-255)", code_musique: "pRMGgtFZXw8" },
          { artiste: "TVXQ", nom_musique: "Asu wa Kurukara (明日は来るから) (eps 256-263)", code_musique: "7i8IOEK0on0" },
          { artiste: "Delicatessen", nom_musique: "ADVENTURE WORLD (eps 264-278)", code_musique: "Zpc9hSmlJbw" },
          { artiste: "The Rootless", nom_musique: "One Day (ep 492)", code_musique: "hJgJTTIbMDI" },
          { artiste: "Maki Otsuki", nom_musique: "Memories ~17 years later", code_musique: "LZjLvJknAtw" }
        ],
        synopsis : "Il fut un temps où Gold Roger était le plus grand de tous les pirates, le \"Roi des Pirates\" était son surnom. A sa mort, son trésor d'une valeur inestimable connu sous le nom de \"One Piece\" fut caché quelque part sur \"Grand Line\". De nombreux pirates sont partis à la recherche de ce trésor mais tous sont morts avant même de l'atteindre. Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau \"Roi des Pirates\". Après avoir mangé un fruit du démon, il possède un pouvoir lui permettant de réaliser son rêve. Il lui faut maintenant trouver un équipage pour partir à l'aventure !"
      },
      {
        id: 13,
        name: "One Punch Man",
        image: "../../assets/img/opm.png",
        openings: [],
        endings: [],
        synopsis : "Saitama est un homme tout ce qu'il y a de plus banal, du moins, en apparence. En effet, malgré sa carrure, plutôt frêle, c'est un super-héros redoutablement efficace puisqu'il terrasse tous ses ennemis en un seul coup ! Malheureusement, cette puissance colossale est un problème pour Saitama, qui s'ennuie, et cherche désespérément un adversaire à sa mesure."
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
              code_musique: "PbWFpzi8C94"
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
              code_musique: "swwUoExDIng"
            },
            {
              id: 5,
              artiste: "Linked Horizon",
              nom_musique: "Shoukei to Shikabane no Michi",
              code_musique: "0dK7JgKivQM"
            }
          ],
        endings:
          [
            {
              id: 1,
              artiste: "Yoko Hikasa",
              nom_musique: "Utsukushiki Zankoku na Sekai",
              code_musique: "O4wezNlsxB0"
            },
            {
              id: 2,
              artiste: "Cinema Staff",
              nom_musique: "Great Escape",
              code_musique: "sFdzNhJAdco"
            },
            {
              id: 3,
              artiste: "Shinsei Kamattechan",
              nom_musique: "Yuugure no Tori",
              code_musique: "rbfHY8mkhT8"
            },
            {
              id: 4,
              artiste: "Linked Horizon",
              nom_musique: "Akatsuki no Chinkonka",
              code_musique: "mHeHzy1S4D8"
            },
            {
              id: 5,
              artiste: "Cinema Staff",
              nom_musique: "Name of Love",
              code_musique: "hQuG-PdVJDc"
            }
          ],
          synopsis : "Il y a 107 ans, les Titans ont presque exterminé la race humaine. Ces Titans mesurent principalement une dizaine de mètres et ils se nourrissent d'humains. Les humains ayant survécus à cette extermination ont construit une cité fortifiée avec des murs d'enceinte de 50 mètres de haut pour pouvoir se protéger des Titans. Pendant 100 ans les humains ont connu la paix. Eren est un jeune garçon qui rêve de sortir de la ville pour explorer le monde extérieur. Il mène une vie paisible avec ses parents et sa sœur Mikasa dans le district de Shiganshina. Mais un jour de l'année 845, un Titan de plus de 60 mètres de haut apparaît. Il démolit une partie du mur du district de Shiganshina et provoque une invasion de Titans. Eren verra sa mère se faire dévorer sous ses yeux sans rien pouvoir faire. Il décidera après ces événements traumatisants de s'engager dans les forces militaires de la ville avec pour but d'exterminer tous les Titans qui existent."
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
        ],
        synopsis : "Dans un quartier d'Otaku à Akihabara, un groupe d'amis modifient leurs micro-ondes de manière à en faire un dispositif qui leur permet d'envoyer des messages écrits vers le passé. Une organisation, CERN, a mené différentes recherches à propos des voyages temporels. À présent, le groupe, ayant effectué plusieurs expériences diverses, doit absolument éviter de se faire capturer par cette organisation qui les perturbent en les traquant..."
      },
      {
        id: 16, name: "Vinland Saga", image: "../../assets/img/vinland_saga.png", openings: [
          { artiste: "Survive Said The Prophet", nom_musique: "MUKANJYO", code_musique: "xEVcTStgA4A" },
          { artiste: "MAN WITH A MISSION", nom_musique: "Dark Crow", code_musique: "2e1t5VM9jTk" }
        ],
        endings: [
          { artiste: "Aimer", nom_musique: "Torches", code_musique: "rHSpaWRNBS0" },
          { artiste: "milet", nom_musique: "Drown", code_musique: "iXjvemy6H9w" }
        ],
        synopsis: "Basé sur le manga Vinland Saga de Yukimura Makoto. Thorfinn est le fils de l'un des plus grands guerriers Vikings, mais quand son père est tué au combat par le chef mercenaire Askeladd, il jure de se venger. Thorfinn rejoint alors le groupe d'Askeladd pour le défier en duel. Cependant, il se retrouve pris au milieu d'une guerre pour la couronne d'Angleterre."
      }
    ]
    return { animes }
  }

  genId(animes: Anime[]): number {
    return animes.length > 0 ? Math.max(...animes.map(animes => animes.id)) + 1 : 11;
  }
}
