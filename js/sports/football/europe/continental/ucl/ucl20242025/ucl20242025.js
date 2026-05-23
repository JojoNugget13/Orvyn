/**
 * UCL 2024/2025 Season Logic
 * Handles data management and rendering for matches, standings, and stats.
 */

let currentStandingsSubTab = 'regular'; // 'regular' or 'knockout'

window.switchStandingsSubTab = function(subTab) {
    currentStandingsSubTab = subTab;
    renderStandings();
};

// Data Structure for the Season
const uclData2425 = {
    standings: [
        // status can be: 'top-8', 'playoff', 'eliminated'
        { rank: 1, team: "<a href='../../../../football/clubs/liverpool-fc.html'>Liverpool FC</a>", badge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp", p: 8, w: 7, d: 0, l: 1, gf: 17, ga: 5, gd: +12, pts: 21, status: "qualified" },
        { rank: 2, team: "<a href='../../../../football/clubs/fc-barcelona.html'>FC Barcelona</a>", badge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp", p: 8, w: 6, d: 1, l: 1, gf: 28, ga: 13, gd: +15, pts: 19, status: "qualified" },
        { rank: 3, team: "<a href='../../../../football/clubs/arsenal-fc.html'>Arsenal FC</a>", badge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp", p: 8, w: 6, d: 1, l: 1, gf: 16, ga: 3, gd: +13, pts: 19, status: "qualified" },
        { rank: 4, team: "<a href='../../../../football/clubs/inter-milan.html'>Inter Milan</a>", badge: "../../../../../../images/sports/football/clubs/inter-milan.webp", p: 8, w: 6, d: 1, l: 1, gf: 11, ga: 1, gd: +10, pts: 19, status: "qualified" },
        { rank: 5, team: "<a href='../../../../football/clubs/atletico-madrid.html'>Atlético Madrid</a>", badge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp", p: 8, w: 6, d: 0, l: 2, gf: 20, ga: 12, gd: +8, pts: 18, status: "qualified" },
        { rank: 6, team: "<a href='../../../../football/clubs/bayer-04-leverkusen.html'>Bayer 04 Leverkusen</a>", badge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp", p: 8, w: 5, d: 1, l: 2, gf: 15, ga: 7, gd: +8, pts: 16, status: "qualified" },
        { rank: 7, team: "<a href='../../../../football/clubs/lille-osc.html'>Lille OSC</a>", badge: "../../../../../../images/sports/football/clubs/lille-osc.webp", p: 8, w: 5, d: 1, l: 2, gf: 17, ga: 10, gd: +7, pts: 16, status: "qualified" },
        { rank: 8, team: "<a href='../../../../football/clubs/aston-villa-fc.html'>Aston Villa FC</a>", badge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp", p: 8, w: 5, d: 1, l: 2, gf: 13, ga: 6, gd: +7, pts: 16, status: "qualified" },
        { rank: 9, team: "<a href='../../../../football/clubs/atalanta-bc.html'>Atalanta BC</a>", badge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp", p: 8, w: 4, d: 3, l: 1, gf: 20, ga: 6, gd: +14, pts: 15, status: "playoffs" },
        { rank: 10, team: "<a href='../../../../football/clubs/borussia-dortmund.html'>Borussia Dortmund</a>", badge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp", p: 8, w: 5, d: 0, l: 3, gf: 22, ga: 12, gd: +10, pts: 15, status: "playoffs" },
        { rank: 11, team: "<a href='../../../../football/clubs/real-madrid-cf.html'>Real Madrid CF</a>", badge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp", p: 8, w: 5, d: 0, l: 3, gf: 20, ga: 12, gd: +8, pts: 15, status: "playoffs" },
        { rank: 12, team: "<a href='../../../../football/clubs/fc-bayern-munich.html'>FC Bayern Munich</a>", badge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp", p: 8, w: 5, d: 0, l: 3, gf: 20, ga: 12, gd: +8, pts: 15, status: "playoffs" },
        { rank: 13, team: "<a href='../../../../football/clubs/ac-milan.html'>AC Milan</a>", badge: "../../../../../../images/sports/football/clubs/ac-milan.webp", p: 8, w: 5, d: 0, l: 3, gf: 14, ga: 11, gd: +3, pts: 15, status: "playoffs" },
        { rank: 14, team: "<a href='../../../../football/clubs/psv-eindhoven.html'>PSV Eindhoven</a>", badge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp", p: 8, w: 4, d: 2, l: 2, gf: 16, ga: 12, gd: +4, pts: 14, status: "playoffs" },
        { rank: 15, team: "<a href='../../../../football/clubs/paris-saint-germain-fc.html'>Paris Saint-Germain FC</a>", badge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp", p: 8, w: 4, d: 1, l: 3, gf: 14, ga: 9, gd: +5, pts: 13, status: "playoffs" },
        { rank: 16, team: "<a href='../../../../football/clubs/sl-benfica.html'>SL Benfica</a>", badge: "../../../../../../images/sports/football/clubs/sl-benfica.webp", p: 8, w: 4, d: 1, l: 3, gf: 16, ga: 12, gd: +4, pts: 13, status: "playoffs" },
        { rank: 17, team: "<a href='../../../../football/clubs/as-monaco-fc.html'>AS Monaco FC</a>", badge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp", p: 8, w: 4, d: 1, l: 3, gf: 13, ga: 13, gd: 0, pts: 13, status: "playoffs" },
        { rank: 18, team: "<a href='../../../../football/clubs/stade-brestois-29.html'>Stade Brestois 29</a>", badge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp", p: 8, w: 4, d: 1, l: 3, gf: 10, ga: 11, gd: -1, pts: 13, status: "playoffs" },
        { rank: 19, team: "<a href='../../../../football/clubs/feyenoord-rotterdam.html'>Feyenoord Rotterdam</a>", badge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp", p: 8, w: 4, d: 1, l: 3, gf: 18, ga: 21, gd: -3, pts: 13, status: "playoffs" },
        { rank: 20, team: "<a href='../../../../football/clubs/juventus-fc.html'>Juventus FC</a>", badge: "../../../../../../images/sports/football/clubs/juventus-fc.webp", p: 8, w: 3, d: 3, l: 2, gf: 9, ga: 7, gd: +2, pts: 12, status: "playoffs" },
        { rank: 21, team: "<a href='../../../../football/clubs/celtic-fc.html'>Celtic FC</a>", badge: "../../../../../../images/sports/football/clubs/celtic-fc.webp", p: 8, w: 3, d: 3, l: 2, gf: 13, ga: 14, gd: -1, pts: 12, status: "playoffs" },
        { rank: 22, team: "<a href='../../../../football/clubs/manchester-city-fc.html'>Manchester City FC</a>", badge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp", p: 8, w: 3, d: 2, l: 3, gf: 18, ga: 14, gd: +4, pts: 11, status: "playoffs" },
        { rank: 23, team: "<a href='../../../../football/clubs/sporting-cp.html'>Sporting CP</a>", badge: "../../../../../../images/sports/football/clubs/sporting-cp.webp", p: 8, w: 3, d: 2, l: 3, gf: 13, ga: 12, gd: +1, pts: 11, status: "playoffs" },
        { rank: 24, team: "<a href='../../../../football/clubs/club-brugge-kv.html'>Club Brugge KV</a>", badge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp", p: 8, w: 3, d: 2, l: 3, gf: 7, ga: 11, gd: -4, pts: 11, status: "playoffs" },
        { rank: 25, team: "<a href='../../../../football/clubs/gnk-dinamo-zagreb.html'>GNK Dinamo Zagreb</a>", badge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp", p: 8, w: 3, d: 2, l: 3, gf: 12, ga: 19, gd: -7, pts: 11, status: "eliminated" },
        { rank: 26, team: "<a href='../../../../football/clubs/vfb-stuttgart.html'>VfB Stuttgart</a>", badge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp", p: 8, w: 3, d: 1, l: 4, gf: 13, ga: 17, gd: -4, pts: 10, status: "eliminated" },
        { rank: 27, team: "<a href='../../../../football/clubs/fc-shakhtar-donetsk.html'>FC Shakhtar Donetsk</a>", badge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp", p: 8, w: 2, d: 1, l: 5, gf: 8, ga: 16, gd: -8, pts: 7, status: "eliminated" },
        { rank: 28, team: "<a href='../../../../football/clubs/bologna-fc-1909.html'>Bologna FC 1909</a>", badge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp", p: 8, w: 1, d: 3, l: 4, gf: 4, ga: 9, gd: -5, pts: 6, status: "eliminated" },
        { rank: 29, team: "<a href='../../../../football/clubs/red-star-belgrade.html'>Red Star Belgrade</a>", badge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp", p: 8, w: 2, d: 0, l: 6, gf: 13, ga: 22, gd: -9, pts: 6, status: "eliminated" },
        { rank: 30, team: "<a href='../../../../football/clubs/sk-sturm-graz.html'>SK Sturm Graz</a>", badge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp", p: 8, w: 2, d: 0, l: 6, gf: 5, ga: 14, gd: -9, pts: 6, status: "eliminated" },
        { rank: 31, team: "<a href='../../../../football/clubs/ac-sparta-prague.html'>AC Sparta Prague</a>", badge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp", p: 8, w: 1, d: 1, l: 6, gf: 7, ga: 21, gd: -14, pts: 4, status: "eliminated" },
        { rank: 32, team: "<a href='../../../../football/clubs/rb-leipzig.html'>RB Leipzig</a>", badge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp", p: 8, w: 1, d: 0, l: 7, gf: 8, ga: 15, gd: -7, pts: 3, status: "eliminated" },
        { rank: 33, team: "<a href='../../../../football/clubs/girona-fc.html'>Girona FC</a>", badge: "../../../../../../images/sports/football/clubs/girona-fc.webp", p: 8, w: 1, d: 0, l: 7, gf: 5, ga: 13, gd: -8, pts: 3, status: "eliminated" },
        { rank: 34, team: "<a href='../../../../football/clubs/fc-red-bull-salzburg.html'>FC Red Bull Salzburg</a>", badge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp", p: 8, w: 1, d: 0, l: 7, gf: 5, ga: 27, gd: -22, pts: 3, status: "eliminated" },
        { rank: 35, team: "<a href='../../../../football/clubs/slovan-bratislava.html'>Slovan Bratislava</a>", badge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp", p: 8, w: 0, d: 0, l: 8, gf: 7, ga: 27, gd: -20, pts: 0, status: "eliminated" },
        { rank: 36, team: "<a href='../../../../football/clubs/bsc-young-boys.html'>BSC Young Boys</a>", badge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp", p: 8, w: 0, d: 0, l: 8, gf: 3, ga: 24, gd: -21, pts: 0, status: "eliminated" }
    ],

    // ─── KNOCKOUT DATA ────────────────────────────────────────────────────────
    knockout: {
        playoffs: [
            {
                home: { name: "Juventus FC", badge: "../../../../../../images/sports/football/clubs/juventus-fc.webp" },
                away: { name: "PSV Eindhoven (a.e.t.)", badge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp" },
                leg1: { homeScore: 2, awayScore: 1 },
                leg2: { homeScore: 3, awayScore: 1 },
                agg: "3–4", winner: "away", pens: null
            },
            {
                home: { name: "Manchester City FC", badge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp" },
                away: { name: "Real Madrid CF", badge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp" },
                leg1: { homeScore: 2, awayScore: 3 },
                leg2: { homeScore: 3, awayScore: 1 },
                agg: "6–3", winner: "away", pens: null
            },
            {
                home: { name: "Stade Brestois 29", badge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp" },
                away: { name: "Paris Saint-Germain FC", badge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp" },
                leg1: { homeScore: 0, awayScore: 3 },
                leg2: { homeScore: 7, awayScore: 0 },
                agg: "0–10", winner: "away", pens: ""
            },
            {
                home: { name: "Club Brugge KV", badge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp" },
                away: { name: "Atalanta BC", badge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp" },
                leg1: { homeScore: 2, awayScore: 1 },
                leg2: { homeScore: 1, awayScore: 3 },
                agg: "5–2", winner: "home", pens: null
            },
            {
                home: { name: "AS Monaco FC", badge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp" },
                away: { name: "SL Benfica", badge: "../../../../../../images/sports/football/clubs/sl-benfica.webp" },
                leg1: { homeScore: 0, awayScore: 1 },
                leg2: { homeScore: 3, awayScore: 3 },
                agg: "3–4", winner: "away", pens: null
            },
            {
                home: { name: "Sporting CP", badge: "../../../../../../images/sports/football/clubs/sporting-cp.webp" },
                away: { name: "Borussia Dortmund", badge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp" },
                leg1: { homeScore: 0, awayScore: 3 },
                leg2: { homeScore: 0, awayScore: 0 },
                agg: "0–3", winner: "away", pens: null
            },
            {
                home: { name: "Celtic FC", badge: "../../../../../../images/sports/football/clubs/celtic-fc.webp" },
                away: { name: "FC Bayern Munich", badge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp" },
                leg1: { homeScore: 1, awayScore: 2 },
                leg2: { homeScore: 1, awayScore: 1 },
                agg: "2–3", winner: "away", pens: null
            },
            {
                home: { name: "Feyenoord Rotterdam", badge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp" },
                away: { name: "AC Milan", badge: "../../../../../../images/sports/football/clubs/ac-milan.webp" },
                leg1: { homeScore: 1, awayScore: 0 },
                leg2: { homeScore: 1, awayScore: 1 },
                agg: "2–1", winner: "home", pens: null
            },
        ],
        roundOf16: [
            {
                home: { name: "PSV Eindhoven", badge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp" },
                away: { name: "Arsenal FC", badge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp" },
                leg1: { homeScore: 1, awayScore: 7 },
                leg2: { homeScore: 2, awayScore: 2 },
                agg: "3–9", winner: "away", pens: null
            },
            {
                home: { name: "Real Madrid CF", badge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp" },
                away: { name: "Atlético Madrid", badge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp" },
                leg1: { homeScore: 2, awayScore: 1 },
                leg2: { homeScore: 1, awayScore: 0 },
                agg: "2–2", winner: "home", pens: "4–2"
            },
            {
                home: { name: "Paris Saint-Germain FC", badge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp" },
                away: { name: "Liverpool FC", badge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp" },
                leg1: { homeScore: 0, awayScore: 1 },
                leg2: { homeScore: 0, awayScore: 1 },
                agg: "1–1", winner: "home", pens: "4–1"
            },
            {
                home: { name: "Club Brugge KV", badge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp" },
                away: { name: "Aston Villa FC", badge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp" },
                leg1: { homeScore: 1, awayScore: 3 },
                leg2: { homeScore: 3, awayScore: 0 },
                agg: "1–6", winner: "away", pens: null
            },
            {
                home: { name: "SL Benfica", badge: "../../../../../../images/sports/football/clubs/sl-benfica.webp" },
                away: { name: "FC Barcelona", badge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp" },
                leg1: { homeScore: 0, awayScore: 1 },
                leg2: { homeScore: 3, awayScore: 1 },
                agg: "1–4", winner: "away", pens: null
            },
            {
                home: { name: "Borussia Dortmund", badge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp" },
                away: { name: "Lille OSC", badge: "../../../../../../images/sports/football/clubs/lille-osc.webp" },
                leg1: { homeScore: 1, awayScore: 1 },
                leg2: { homeScore: 1, awayScore: 2 },
                agg: "3–2", winner: "home", pens: null
            },
            {
                home: { name: "FC Bayern Munich", badge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp" },
                away: { name: "Bayer 04 Leverkusen", badge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp" },
                leg1: { homeScore: 3, awayScore: 0 },
                leg2: { homeScore: 0, awayScore: 2 },
                agg: "5–0", winner: "home", pens: null
            },
            {
                home: { name: "Feyenoord Rotterdam", badge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp" },
                away: { name: "Inter Milan", badge: "../../../../../../images/sports/football/clubs/inter-milan.webp" },
                leg1: { homeScore: 0, awayScore: 2 },
                leg2: { homeScore: 2, awayScore: 1 },
                agg: "1–4", winner: "away", pens: null
            },
        ],
        quarterFinals: [
            {
                home: { name: "Arsenal FC", badge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp" },
                away: { name: "Real Madrid CF", badge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp" },
                leg1: { homeScore: 3, awayScore: 0 },
                leg2: { homeScore: 1, awayScore: 2 },
                agg: "5–1", winner: "home", pens: null
            },
            {
                home: { name: "Paris Saint-Germain FC", badge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp" },
                away: { name: "Aston Villa FC", badge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp" },
                leg1: { homeScore: 3, awayScore: 1 },
                leg2: { homeScore: 3, awayScore: 2 },
                agg: "5–4", winner: "home", pens: null
            },
            {
                home: { name: "FC Barcelona", badge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp" },
                away: { name: "Borussia Dortmund", badge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp" },
                leg1: { homeScore: 4, awayScore: 0 },
                leg2: { homeScore: 3, awayScore: 1 },
                agg: "5–3", winner: "home", pens: null
            },
            {
                home: { name: "FC Bayern Munich", badge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp" },
                away: { name: "Inter Milan", badge: "../../../../../../images/sports/football/clubs/inter-milan.webp" },
                leg1: { homeScore: 1, awayScore: 2 },
                leg2: { homeScore: 2, awayScore: 2 },
                agg: "3–4", winner: "away", pens: null
            },
        ],
        semiFinals: [
            {
                home: { name: "Arsenal FC", badge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp" },
                away: { name: "Paris Saint-Germain FC", badge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp" },
                leg1: { homeScore: 0, awayScore: 1 },
                leg2: { homeScore: 2, awayScore: 1 },
                agg: "1–3", winner: "away", pens: null
            },
            {
                home: { name: "FC Barcelona", badge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp" },
                away: { name: "Inter Milan (a.e.t.)", badge: "../../../../../../images/sports/football/clubs/inter-milan.webp" },
                leg1: { homeScore: 3, awayScore: 3 },
                leg2: { homeScore: 4, awayScore: 3 },
                agg: "6–7", winner: "away", pens: null
            },
        ],
        final: {
            home: { name: "Paris Saint-Germain FC", badge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp" },
            away: { name: "Inter Milan", badge: "../../../../../../images/sports/football/clubs/inter-milan.webp" },
            homeScore: 5,
            awayScore: 0,
            pens: null,
            winner: "home",
            venue: "Allianz Arena, Munich"
        }
    },

    matches: [
        { 
            matchday: "Qualifiers - Round 1",
            games: [
                {
                    home: "FK Panevėžys", 
                    away: "HJK", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "July 9, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fk-panevezys.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/hjk.webp",
                    id: "fk-panevezys-vs-hjk-09-07-2024",
                    note: ""
                },
                { 
                    home: "Hamrun Spartans", 
                    away: "Lincoln Red Imps", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "July 9, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/hamrun-spartans.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lincoln-red-imps.webp",
                    id: "hamrun-spartans-vs-lincoln-red-imps-09-07-2024",
                    note: ""
                },
                { 
                    home: "The New Saints", 
                    away: "FK Dečić", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "July 9, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/the-new-saints.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fk-decic.webp",
                    id: "the-new-saints-vs-fk-decic-09-07-2024",
                    note: ""
                },
                { 
                    home: "UE Santa Coloma", 
                    away: "Ballkani", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "July 9, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ue-santa-coloma.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ballkani.webp",
                    id: "ue-santa-coloma-vs-ballkani-09-07-2024",
                    note: ""
                },
                { 
                    home: "Vikingur Reykjavik", 
                    away: "Shamrock Rovers", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "July 9, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/vikingur-reykjavik.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/shamrock-rovers.webp",
                    id: "vikingur-reykjavik-vs-shamrock-rovers-09-07-2024",
                    note: ""
                },
                { 
                    home: "Virtus Acquaviva", 
                    away: "FCSB", 
                    homeScore: 1,
                    awayScore: 7,
                    date: "July 9, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/virtus-acquaviva.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fcsb.webp",
                    id: "virtus-acquaviva-vs-fcsb-09-07-2024",
                    note: ""
                },
                { 
                    home: "FC Ordabasy", 
                    away: "CS Petrocub", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-ordabasy.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/cs-petrocub.webp",
                    id: "ordabasy-shymkent-vs-cs-petrocub-10-07-2024",
                    note: ""
                },
                { 
                    home: "Flora Tallinn", 
                    away: "NK Celje", 
                    homeScore: 0,
                    awayScore: 5,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/flora-tallinn.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/nk-celje.webp",
                    id: "flora-tallinn-vs-nk-celje-10-07-2024",
                    note: ""
                },
                { 
                    home: "RFS", 
                    away: "Larne", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/rfs.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/larne.webp",
                    id: "rfs-vs-larne-10-07-2024",
                    note: ""
                },
                { 
                    home: "Slovan Bratislava", 
                    away: "FC Struga", 
                    homeScore: 4,
                    awayScore: 2,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-struga.webp",
                    id: "slovan-bratislava-vs-fk-struga-10-07-2024",
                    note: ""
                },
                { 
                    home: "Klaksvík", 
                    away: "FC Differdange 03", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/klaksvik.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-differdange-03.webp",
                    id: "klaksvik-vs-fc-differdange-03-10-07-2024",
                    note: ""
                },
                { 
                    home: "Ludogorets Razgrad", 
                    away: "Dinamo Batumi", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ludogorets-razgrad.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/dinamo-batumi.webp",
                    id: "ludogorets-razgrad-vs-dinamo-batumi-10-07-2024",
                    note: ""
                },
                { 
                    home: "Dinamo Minsk", 
                    away: "Pyunik", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/dinamo-minsk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/pyunik.webp",
                    id: "dinamo-minsk-vs-pyunik-10-07-2024",
                    note: ""
                },
                { 
                    home: "Borac Banja Luka", 
                    away: "Egnatia", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "July 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/borac-banja-luka.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/egnatia.webp",
                    id: "borac-banja-luka-vs-egnatia-10-07-2024",
                    note: ""
                },
                { 
                    home: "Ballkani", 
                    away: "UE Santa Coloma", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ballkani.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ue-santa-coloma.webp",
                    id: "ballkani-vs-ue-santa-coloma-16-07-2024",
                    note: "UE Santa Coloma qualifies, 3-3 (P. 5-6) on aggregate"
                },
                {
                    home: "HJK", 
                    away: "FK Panevėžys", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/hjk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fk-panevezys.webp",
                    id: "hjk-vs-fk-panevezys-16-07-2024",
                    note: "FK Panevėžys qualifies, 1-4 on aggregate"
                },
                {
                    home: "Lincoln Red Imps", 
                    away: "Hamrun Spartans", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/lincoln-red-imps.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/hamrun-spartans.webp",
                    id: "lincoln-red-imps-vs-hamrun-spartans-16-07-2024",
                    note: "Lincoln Red Imps qualifies, 1-1 (p. 5-4) on aggregate"
                },
                {
                    home: "Pyunik", 
                    away: "Dinamo Minsk", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/pyunik.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/dinamo-minsk.webp",
                    id: "pyunik-vs-dinamo-minsk-16-07-2024",
                    note: "Dinamo Minsk qualifies, 0-1 on aggregate"
                },
                {
                    home: "NK Celje", 
                    away: "Flora Tallinn", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/nk-celje.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/flora-tallinn.webp",
                    id: "nk-celje-vs-flora-tallinn-16-07-2024",
                    note: "NK Celje qualifies, 7-1 on aggregate"
                },
                {
                    home: "FCSB", 
                    away: "Virtus Acquaviva", 
                    homeScore: 4,
                    awayScore: 0,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fcsb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/virtus-acquaviva.webp",
                    id: "fcsb-vs-virtus-acquaviva-16-07-2024",
                    note: "FCSB qualifies, 11-1 on aggregate"
                },
                {
                    home: "FK Dečić", 
                    away: "The New Saints", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fk-decic.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/the-new-saints.webp",
                    id: "fk-decic-vs-the-new-saints-16-07-2024",
                    note: "The New Saints qualifies, 1-4 on aggregate"
                },
                {
                    home: "Shamrock Rovers", 
                    away: "Vikingur Reykjavik", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "July 16, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/shamrock-rovers.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/vikingur-reykjavik.webp",
                    id: "shamrock-rovers-vs-vikingur-reykjavik-16-07-2024",
                    note: "Shamrock Rovers qualifies, 2-1 on aggregate"
                },
                {
                    home: "FC Struga", 
                    away: "Slovan Bratislava", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "July 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-struga.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "fc-struga-vs-slovan-bratislava-17-07-2024",
                    note: "Slovan Bratislava qualifies, 3-6 on aggregate"
                },
                {
                    home: "CS Petrocub", 
                    away: "FC Ordabasy", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "July 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/cs-petrocub.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-ordabasy.webp",
                    id: "cs-petrocub-vs-fc-ordabasy-17-07-2024",
                    note: "CS Petrocub qualifies, 1-0 on aggregate"
                },
                {
                    home: "Dinamo Batumi", 
                    away: "Ludogorets Razgrad", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "July 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/dinamo-batumi.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ludogorets-razgrad.webp",
                    id: "dinamo-batumi-vs-ludogorets-razgrad-17-07-2024",
                    note: "Ludogorets Razgrad qualifies, 2-3 on aggregate"
                },
                {
                    home: "FC Differdange 03", 
                    away: "Klaksvík", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "July 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-differdange-03.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/klaksvik.webp",
                    id: "fc-differdange-03-vs-klaksvik-17-07-2024",
                    note: "Klaksvík qualifies, 2-0 on aggregate"
                },
                {
                    home: "Egnatia", 
                    away: "Borac Banja Luka", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "July 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/egnatia.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borac-banja-luka.webp",
                    id: "egnatia-vs-borac-banja-luka-17-07-2024",
                    note: "Borac Banja Luka qualifies, 2-2 (p. 1-4) on aggregate"
                },
                {
                    home: "Larne", 
                    away: "RFS", 
                    homeScore: 0,
                    awayScore: 4,
                    date: "July 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/larne.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/rfs.webp",
                    id: "larne-vs-rfs-17-07-2024",
                    note: "RFS qualifies, 0-7 on aggregate"
                },
            ]
        },
        {
            matchday: "Qualifiers - Round 2",
            games: [
                {
                    home: "Bodø/Glimt", 
                    away: "RFS", 
                    homeScore: 4,
                    awayScore: 0,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bodo-glimt.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/rfs.webp",
                    id: "bodo-glimt-vs-rfs-23-07-2024",
                    note: ""
                },
                {
                    home: "FK Panevėžys", 
                    away: "Jagiellonia Bialystok", 
                    homeScore: 0,
                    awayScore: 4,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fk-panevezys.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/jagiellonia-bialystok.webp",
                    id: "fk-panevezys-vs-jagiellonia-bialystok-23-07-2024",
                    note: ""
                },
                {
                    home: "Lincoln Red Imps", 
                    away: "Qarabağ FK", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/lincoln-red-imps.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/qarabag-fk.webp",
                    id: "lincoln-red-imps-vs-qarabag-fk-23-07-2024",
                    note: ""
                },
                {
                    home: "APOEL Nicosia", 
                    away: "CS Petrocub", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/apoel-nicosia.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/cs-petrocub.webp",
                    id: "apoel-nicosia-vs-cs-petrocub-23-07-2024",
                    note: ""
                },
                {
                    home: "Malmö FF", 
                    away: "Klaksvík", 
                    homeScore: 4,
                    awayScore: 1,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/malmo-ff.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/klaksvik.webp",
                    id: "malmo-ff-vs-klaksvik-23-07-2024",
                    note: ""
                },
                {
                    home: "FCSB", 
                    away: "Maccabi Tel Aviv", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fcsb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/maccabi-tel-aviv.webp",
                    id: "fcsb-vs-maccabi-tel-aviv-23-07-2024",
                    note: ""
                },
                {
                    home: "Dynamo Kyiv", 
                    away: "FK Partizan", 
                    homeScore: 6,
                    awayScore: 2,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/dynamo-kyiv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fk-partizan.webp",
                    id: "dynamo-kyiv-vs-fk-partizan-23-07-2024",
                    note: ""
                },
                {
                    home: "Ferencvárosi TC", 
                    away: "The New Saints", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ferencvarosi-tc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/the-new-saints.webp",
                    id: "ferencvarosi-tc-vs-the-new-saints-23-07-2024",
                    note: ""
                },
                {
                    home: "UE Santa Coloma", 
                    away: "FC Midtjylland", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ue-santa-coloma.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-midtjylland.webp",
                    id: "ue-santa-coloma-vs-fc-midtjylland-23-07-2024",
                    note: ""
                },
                {
                    home: "FC Lugano", 
                    away: "Fenerbahçe SK", 
                    homeScore: 3,
                    awayScore: 4,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-lugano.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fenerbahce-sk.webp",
                    id: "fc-lugano-vs-sk-fenerbahce-23-07-2024",
                    note: ""
                },
                {
                    home: "Shamrock Rovers", 
                    away: "AC Sparta Prague", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "July 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/shamrock-rovers.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    id: "shamrock-rovers-vs-sparta-prague-23-07-2024",
                    note: ""
                },
                {
                    home: "PAOK FC", 
                    away: "Borac Banja Luka", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "July 24, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/paok-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borac-banja-luka.webp",
                    id: "paok-fc-vs-borac-banja-luka-24-07-2024",
                    note: ""
                },
                {
                    home: "Ludogorets Razgrad", 
                    away: "Dinamo Minsk", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "July 24, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ludogorets-razgrad.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/dinamo-minsk.webp",
                    id: "ludogorets-razgrad-vs-dinamo-minsk-24-07-2024",
                    note: ""
                },
                {
                    home: "NK Celje", 
                    away: "Slovan Bratislava", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "July 24, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/nk-celje.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "nk-celje-vs-slovan-bratislava-24-07-2024",
                    note: ""
                },
                {
                    home: "Qarabağ FK", 
                    away: "Lincoln Red Imps", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "July 30, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/qarabag-fk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lincoln-red-imps.webp",
                    id: "qarabag-fk-vs-lincoln-red-imps-30-07-2024",
                    note: "Qarabağ FK qualifies, 7-0 on aggregate"
                },
                {
                    home: "CS Petrocub", 
                    away: "APOEL Nicosia", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "July 30, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/cs-petrocub.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/apoel-nicosia.webp",
                    id: "cs-petrocub-vs-apoel-nicosia-30-07-2024",
                    note: "APOEL Nicosia qualifies, 1-2 on aggregate"
                },
                {
                    home: "Fenerbahçe SK", 
                    away: "FC Lugano", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "July 30, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fenerbahce-sk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-lugano.webp",
                    id: "fenerbahce-sk-vs-fc-lugano-30-07-2024",
                    note: "Fenerbahçe SK qualifies, 6-4 on aggregate"
                },
                {
                    home: "AC Sparta Prague", 
                    away: "Shamrock Rovers", 
                    homeScore: 4,
                    awayScore: 2,
                    date: "July 30, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/shamrock-rovers.webp",
                    id: "ac-sparta-prague-vs-shamrock-rovers-30-07-2024",
                    note: "AC Sparta Prague qualifies, 6-2 on aggregate"
                },
                {
                    home: "The New Saints", 
                    away: "Ferencvárosi TC", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "July 30, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/the-new-saints.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ferencvarosi-tc.webp",
                    id: "the-new-saints-vs-ferencvarosi-tc-30-07-2024",
                    note: "Ferencvárosi TC qualifies, 1-7 on aggregate"
                },
                {
                    home: "Slovan Bratislava", 
                    away: "NK Celje", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "July 30, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/nk-celje.webp",
                    id: "slovan-bratislava-vs-nk-celje-30-07-2024",
                    note: "Slovan Bratislava qualifies, 6-1 on aggregate"
                },
                {
                    home: "Klaksvík", 
                    away: "Malmö FF", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "July 30, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/klaksvik.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/malmo-ff.webp",
                    id: "klaksvik-vs-malmo-ff-30-07-2024",
                    note: "Malmö FF qualifies, 4-6 on aggregate"
                },
                {
                    home: "RFS", 
                    away: "Bodø/Glimt", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "July 31, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/rfs.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bodo-glimt.webp",
                    id: "rfs-vs-bodo-glimt-31-07-2024",
                    note: "Bodø/Glimt qualifies, 1-7 on aggregate"
                },
                {
                    home: "FC Midtjylland", 
                    away: "UE Santa Coloma", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "July 31, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-midtjylland.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ue-santa-coloma.webp",
                    id: "fc-midtjylland-vs-ue-santa-coloma-31-07-2024",
                    note: "FC Midtjylland qualifies, 4-0 on aggregate"
                },
                {
                    home: "Maccabi Tel Aviv", 
                    away: "FCSB", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "July 31, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/maccabi-tel-aviv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fcsb.webp",
                    id: "maccabi-tel-aviv-vs-fcsb-31-07-2024",
                    note: "FCSB qualifies, 1-2 on aggregate"
                },
                {
                    home: "FK Partizan", 
                    away: "Dynamo Kyiv", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "July 31, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fk-partizan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/dynamo-kyiv.webp",
                    id: "fc-partizan-vs-dynamo-kyiv-31-07-2024",
                    note: "Dynamo Kyiv qualifies, 2-9 on aggregate"
                },
                {
                    home: "Jagiellonia Bialystok", 
                    away: "FK Panevėžys", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "July 31, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/jagiellonia-bialystok.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fk-panevezys.webp",
                    id: "jagiellonia-bialystok-vs-fk-panevezys-31-07-2024",
                    note: "Jagiellonia Bialystok qualifies, 7-1 on aggregate"
                },
                {
                    home: "Dinamo Minsk", 
                    away: "Ludogorets Razgrad", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "July 31, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/dinamo-minsk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ludogorets-razgrad.webp",
                    id: "dinamo-minsk-vs-ludogorets-razgrad-31-07-2024",
                    note: "Ludogorets Razgrad qualifies, 1-2 on aggregate"
                },
                {
                    home: "Borac Banja Luka", 
                    away: "PAOK FC", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "July 31, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/borac-banja-luka.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paok-fc.webp",
                    id: "borac-banja-luka-vs-paok-fc-31-07-2024",
                    note: "PAOK FC qualifies, 2-4 on aggregate"
                },
            ]
        },
        {
            matchday: "Qualifiers - Round 3",
            games: [
                {
                    home: "Qarabağ FK", 
                    away: "Ludogorets Razgrad", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "August 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/qarabag-fk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ludogorets-razgrad.webp",
                    id: "qarabag-fk-vs-ludogorets-razgrad-06-08-2024",
                    note: ""
                },
                {
                    home: "Malmö FF", 
                    away: "PAOK FC", 
                    homeScore: 2,
                    awayScore: 2,
                    date: "August 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/malmo-ff.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paok-fc.webp",
                    id: "malmo-ff-vs-paok-fc-06-08-2024",
                    note: ""
                },
                {
                    home: "FC Midtjylland", 
                    away: "Ferencvárosi TC", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "August 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-midtjylland.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ferencvarosi-tc.webp",
                    id: "fc-midtjylland-vs-ferencvarosi-tc-06-08-2024",
                    note: ""
                },
                {
                    home: "Dynamo Kyiv", 
                    away: "Rangers FC", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "August 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/dynamo-kyiv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/rangers-fc.webp",
                    id: "dynamo-kyiv-vs-rangers-fc-06-08-2024",
                    note: ""
                },
                {
                    home: "AC Sparta Prague", 
                    away: "FCSB", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "August 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fcsb.webp",
                    id: "ac-sparta-prague-vs-fcsb-06-08-2024",
                    note: ""
                },
                {
                    home: "Lille OSC", 
                    away: "Fenerbahçe SK", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "August 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fenerbahce-sk.webp",
                    id: "lille-osc-vs-fenerbahce-sk-06-08-2024",
                    note: ""
                },
                {
                    home: "FC Red Bull Salzburg", 
                    away: "FC Twente", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "August 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-twente.webp",
                    id: "fc-red-bull-salzburg-vs-fc-twente-06-08-2024",
                    note: ""
                },
                {
                    home: "SK Slavia Prague", 
                    away: "Royale Union Saint-Gilloise", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "August 7, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sk-slavia-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/royale-union-saint-gilloise.webp",
                    id: "sk-slavia-prague-vs-royale-union-saint-gilloise-07-08-2024",
                    note: ""
                },
                {
                    home: "Slovan Bratislava", 
                    away: "APOEL Nicosia", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "August 7, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/apoel-nicosia.webp",
                    id: "slovan-bratislava-vs-apoel-nicosia-06-08-2024",
                    note: ""
                },
                {
                    home: "Jagiellonia Bialystok", 
                    away: "Bodø/Glimt", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "August 7, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/jagiellonia-bialystok.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bodo-glimt.webp",
                    id: "jagiellonia-bialystok-vs-bodo-glimt-07-08-2024",
                    note: ""
                },
                {
                    home: "APOEL Nicosia", 
                    away: "Slovan Bratislava", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/apoel-nicosia.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "apoel-nicosia-vs-slovan-bratislava-13-08-2024",
                    note: "Slovan Bratislava qualifies, 0-2 on aggregate"
                },
                {
                    home: "Bodø/Glimt", 
                    away: "Jagiellonia Bialystok", 
                    homeScore: 4,
                    awayScore: 1,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bodo-glimt.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/jagiellonia-bialystok.webp",
                    id: "bodo-glimt-vs-jagiellonia-bialystok-13-08-2024",
                    note: "Bodø/Glimt qualifies, 5-1 on aggregate"
                },
                {
                    home: "FC Twente", 
                    away: "FC Red Bull Salzburg", 
                    homeScore: 3,
                    awayScore: 3,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-twente.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    id: "fc-twente-vs-fc-red-bull-salzburg-13-08-2024",
                    note: "FC Red Bull Salzburg qualifies, 4-5 on aggregate"
                },
                {
                    home: "Fenerbahçe SK", 
                    away: "Lille OSC", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fenerbahce-sk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    id: "fenerbahce-sk-vs-lille-osc-13-08-2024",
                    note: "Lille OSC qualifies, 2-3 on aggregate (a.e.t.)"
                },
                {
                    home: "PAOK FC", 
                    away: "Malmö FF", 
                    homeScore: 3,
                    awayScore: 4,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/paok-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/malmo-ff.webp",
                    id: "paok-fc-vs-malmo-ff-13-08-2024",
                    note: "Malmö FF qualifies, 6-5 on aggregate (a.e.t.)"
                },
                {
                    home: "Ferencvárosi TC", 
                    away: "FC Midtjylland", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ferencvarosi-tc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-midtjylland.webp",
                    id: "ferencvarosi-tc-vs-fc-midtjylland-13-08-2024",
                    note: "FC Midtjylland qualifies, 1-3 on aggregate"
                },
                {
                    home: "Ludogorets Razgrad", 
                    away: "Qarabağ FK", 
                    homeScore: 2,
                    awayScore: 7,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ludogorets-razgrad.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/qarabag-fk.webp",
                    id: "ludogorets-razgrad-vs-qarabag-fk-13-08-2024",
                    note: "Qarabağ FK qualifies, 4-8 on aggregate (a.e.t.)"
                },
                {
                    home: "FCSB", 
                    away: "AC Sparta Prague", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fcsb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    id: "fcsb-vs-ac-sparta-prague-13-08-2024",
                    note: "AC Sparta Prague qualifies, 3-4 on aggregate"
                },
                {
                    home: "Royale Union Saint-Gilloise", 
                    away: "SK Slavia Prague", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/royale-union-saint-gilloise.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sk-slavia-prague.webp",
                    id: "royale-union-saint-gilloise-vs-sk-slavia-prague-13-08-2024",
                    note: "SK Slavia Prague qualifies, 1-4 on aggregate"
                },
                {
                    home: "Rangers FC", 
                    away: "Dynamo Kyiv", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "August 13, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/rangers-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/dynamo-kyiv.webp",
                    id: "rangers-fc-vs-dynamo-kyiv-13-08-2024",
                    note: "Dynamo Kyiv qualifies, 1-3 on aggregate"
                },
            ]
        },
        {
            matchday: "Qualifiers - Play-off Round",
            games: [
                {
                    home: "Bodø/Glimt", 
                    away: "Red Star Belgrade", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "August 20, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bodo-glimt.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    id: "bodo-glimt-vs-red-star-belgrade-20-08-2024",
                    note: ""
                },
                {
                    home: "GNK Dinamo Zagreb", 
                    away: "Qarabağ FK", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "August 20, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/qarabag-fk.webp",
                    id: "dinamo-zagreb-vs-qarabag-fk-20-08-2024",
                    note: ""
                },
                {
                    home: "Lille OSC", 
                    away: "SK Slavia Prague", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "August 20, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sk-slavia-prague.webp",
                    id: "lille-osc-vs-sk-slavia-prague-20-08-2024",
                    note: ""
                },
                {
                    home: "Dynamo Kyiv", 
                    away: "FC Red Bull Salzburg", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "August 21, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/dynamo-kyiv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    id: "dynamo-kyiv-vs-fc-red-bull-salzburg-21-08-2024",
                    note: ""
                },
                {
                    home: "FC Midtjylland", 
                    away: "Slovan Bratislava", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "August 21, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-midtjylland.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "fc-midtjylland-vs-slovan-bratislava-21-08-2024",
                    note: ""
                },
                {
                    home: "Malmö FF", 
                    away: "AC Sparta Prague", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "August 21, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/malmo-ff.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    id: "malmo-ff-vs-ac-sparta-prague-21-08-2024",
                    note: ""
                },
                {
                    home: "BSC Young Boys", 
                    away: "Galatasaray SK", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "August 21, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/galatasaray-sk.webp",
                    id: "bsc-young-boys-vs-galatasaray-sk-21-08-2024",
                    note: ""
                },
                {
                    home: "Galatasaray SK", 
                    away: "BSC Young Boys", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "August 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/galatasaray-sk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    id: "galatasaray-sk-vs-bsc-young-boys-27-08-2024",
                    note: "BSC Young Boys qualifies, 2-4 on aggregate"
                },
                {
                    home: "FC Red Bull Salzburg", 
                    away: "Dynamo Kyiv", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "August 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/dynamo-kyiv.webp",
                    id: "fc-red-bull-salzburg-vs-dynamo-kyiv-27-08-2024",
                    note: "FC Red Bull Salzburg qualifies, 3-1 on aggregate"
                },
                {
                    home: "AC Sparta Prague", 
                    away: "Malmö FF", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "August 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/malmo-ff.webp",
                    id: "ac-sparta-prague-vs-malmo-ff-27-08-2024",
                    note: "AC Sparta Prague qualifies, 4-0 on aggregate"
                },
                {
                    home: "Qarabağ FK", 
                    away: "GNK Dinamo Zagreb", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "August 28, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/qarabag-fk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    id: "qarabag-fk-vs-dinamo-zagreb-28-08-2024",
                    note: "GNK Dinamo Zagreb qualifies, 0-5 on aggregate"
                },
                {
                    home: "Red Star Belgrade", 
                    away: "Bodø/Glimt", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "August 28, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bodo-glimt.webp",
                    id: "red-star-belgrade-vs-bodo-glimt-28-08-2024",
                    note: "Red Star Belgrade qualifies, 3-2 on aggregate"
                },
                {
                    home: "SK Slavia Prague", 
                    away: "Lille OSC", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "August 28, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sk-slavia-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    id: "sk-slavia-prague-vs-lille-osc-28-08-2024",
                    note: "Lille OSC qualifies, 2-3 on aggregate"
                },
                {
                    home: "Slovan Bratislava", 
                    away: "FC Midtjylland", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "August 28, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-midtjylland.webp",
                    id: "slovan-bratislava-vs-fc-midtjylland-28-08-2024",
                    note: "Slovan Bratislava qualifies, 4-3 on aggregate"
                },
            ]
        },
        {
            matchday: "Matchday 1",
            games: [
                { 
                    home: "Juventus FC", 
                    away: "PSV Eindhoven", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "September 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    id: "juventus-fc-vs-psv-eindhoven-17-09-2024",
                },
                { 
                    home: "BSC Young Boys", 
                    away: "Aston Villa FC", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "September 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    id: "bsc-young-boys-vs-aston-villa-fc-17-09-2024",
                },
                { 
                    home: "AC Milan", 
                    away: "Liverpool FC", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "September 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    id: "ac-milan-vs-liverpool-fc-17-09-2024",
                },
                { 
                    home: "Sporting CP", 
                    away: "Lille OSC", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "September 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    id: "sporting-cp-vs-lille-osc-17-09-2024",
                },
                { 
                    home: "Real Madrid CF", 
                    away: "VfB Stuttgart", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "September 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    id: "real-madrid-cf-vs-vfb-stuttgart-17-09-2024",
                },
                { 
                    home: "FC Bayern Munich", 
                    away: "GNK Dinamo Zagreb", 
                    homeScore: 9,
                    awayScore: 2,
                    date: "September 17, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    id: "fc-bayern-munich-vs-gnk-dinamo-zagreb-17-09-2024",
                },
                { 
                    home: "AC Sparta Prague", 
                    away: "FC Red Bull Salzburg", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "September 18, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    id: "ac-sparta-prague-vs-fc-red-bull-salzburg-18-09-2024",
                },
                { 
                    home: "Bologna FC 1909", 
                    away: "FC Shakhtar Donetsk", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "September 18, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    id: "bologna-fc-1909-vs-fc-shakhtar-donetsk-18-09-2024",
                },
                { 
                    home: "Manchester City FC", 
                    away: "Inter Milan", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "September 18, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "manchester-city-fc-vs-inter-milan-18-09-2024",
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Girona FC", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "September 18, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    id: "paris-saint-germain-fc-vs-girona-fc-18-09-2024",
                },
                { 
                    home: "Club Brugge KV", 
                    away: "Borussia Dortmund", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "September 18, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    id: "club-brugge-kv-vs-borussia-dortmund-18-09-2024",
                },
                { 
                    home: "Celtic FC", 
                    away: "Slovan Bratislava", 
                    homeScore: 5,
                    awayScore: 1,
                    date: "September 18, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "celtic-fc-vs-slovan-bratislava-18-09-2024",
                },
                { 
                    home: "Feyenoord Rotterdam", 
                    away: "Bayer 04 Leverkusen", 
                    homeScore: 0,
                    awayScore: 4,
                    date: "September 19, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    id: "feyenoord-rotterdam-vs-bayer-04-leverkusen-19-09-2024",
                },
                { 
                    home: "Red Star Belgrade", 
                    away: "SL Benfica", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "September 19, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    id: "red-star-belgrade-vs-sl-benfica-19-09-2024",
                },
                { 
                    home: "Stade Brestois 29", 
                    away: "SK Sturm Graz", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "September 19, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    id: "stade-brestois-29-vs-sk-sturm-graz-19-09-2024",
                },
                { 
                    home: "AS Monaco FC", 
                    away: "FC Barcelona", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "September 19, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    id: "as-monaco-fc-vs-fc-barcelona-19-09-2024",
                },
                { 
                    home: "Atlético Madrid", 
                    away: "RB Leipzig", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "September 19, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    id: "atletico-madrid-vs-rb-leipzig-19-09-2024",
                },
                { 
                    home: "Atalanta BC", 
                    away: "Arsenal FC", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "September 19, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    id: "atalanta-bc-vs-arsenal-fc-19-09-2024",
                }
            ]
        },
        {
            matchday: "Matchday 2",
            games: [
                { 
                    home: "VfB Stuttgart", 
                    away: "AC Sparta Prague", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    id: "vfb-stuttgart-vs-ac-sparta-prague-01-10-2024",
                },
                { 
                    home: "FC Red Bull Salzburg", 
                    away: "Stade Brestois 29", 
                    homeScore: 0,
                    awayScore: 4,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    id: "fc-red-bull-salzburg-vs-stade-brestois-29-01-10-2024",
                },
                { 
                    home: "Arsenal FC", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "arsenal-fc-vs-paris-saint-germain-fc-01-10-2024",
                },
                { 
                    home: "Slovan Bratislava", 
                    away: "Manchester City FC", 
                    homeScore: 0,
                    awayScore: 4,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    id: "slovan-bratislava-vs-manchester-city-fc-01-10-2024",
                },
                { 
                    home: "Borussia Dortmund", 
                    away: "Celtic FC", 
                    homeScore: 7,
                    awayScore: 1,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    id: "borussia-dortmund-vs-celtic-fc-01-10-2024",
                },
                { 
                    home: "Inter Milan", 
                    away: "Red Star Belgrade", 
                    homeScore: 4,
                    awayScore: 0,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    id: "inter-milan-vs-red-star-belgrade-01-10-2024",
                },
                { 
                    home: "Bayer 04 Leverkusen", 
                    away: "AC Milan", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    id: "bayer-04-leverkusen-vs-ac-milan-01-10-2024",
                },
                { 
                    home: "FC Barcelona", 
                    away: "BSC Young Boys", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    id: "fc-barcelona-vs-bsc-young-boys-01-10-2024",
                },
                { 
                    home: "PSV Eindhoven", 
                    away: "Sporting CP", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "October 1, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    id: "psv-eindhoven-vs-sporting-cp-01-10-2024",
                },
                { 
                    home: "FC Shakhtar Donetsk", 
                    away: "Atalanta BC", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    id: "fc-shakhtar-donetsk-vs-atalanta-bc-02-10-2024",
                },
                { 
                    home: "Girona FC", 
                    away: "Feyenoord Rotterdam", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    id: "girona-fc-vs-feyenoord-rotterdam-02-10-2024",
                },
                { 
                    home: "RB Leipzig", 
                    away: "Juventus FC", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    id: "rb-leipzig-vs-juventus-fc-02-10-2024",
                },
                { 
                    home: "SK Sturm Graz", 
                    away: "Club Brugge KV", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    id: "sk-sturm-graz-vs-club-brugge-kv-02-10-2024",
                },
                { 
                    home: "Liverpool FC", 
                    away: "Bologna FC 1909", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    id: "liverpool-fc-vs-bologna-fc-1909-02-10-2024",
                },
                { 
                    home: "Lille OSC", 
                    away: "Real Madrid CF", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    id: "lille-osc-vs-real-madrid-cf-02-10-2024",
                },
                { 
                    home: "GNK Dinamo Zagreb", 
                    away: "AS Monaco FC", 
                    homeScore: 2,
                    awayScore: 2,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    id: "gnk-dinamo-zagreb-vs-as-monaco-fc-02-10-2024",
                },
                { 
                    home: "Aston Villa FC", 
                    away: "FC Bayern Munich", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    id: "aston-villa-fc-vs-fc-bayern-munich-02-10-2024",
                },
                { 
                    home: "SL Benfica", 
                    away: "Atlético Madrid", 
                    homeScore: 4,
                    awayScore: 0,
                    date: "October 2, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    id: "sl-benfica-vs-atletico-madrid-02-10-2024",
                }
            ]
        },
        {
            matchday: "Matchday 3",
            games: [
                { 
                    home: "AS Monaco FC", 
                    away: "Red Star Belgrade", 
                    homeScore: 5,
                    awayScore: 1,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    id: "as-monaco-fc-vs-red-star-belgrade-22-10-2024",
                },
                { 
                    home: "AC Milan", 
                    away: "Club Brugge KV", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    id: "ac-milan-vs-club-brugge-kv-22-10-2024",
                },
                { 
                    home: "Real Madrid CF", 
                    away: "Borussia Dortmund", 
                    homeScore: 5,
                    awayScore: 2,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    id: "real-madrid-cf-vs-borussia-dortmund-22-10-2024",
                },
                { 
                    home: "Arsenal FC", 
                    away: "FC Shakhtar Donetsk", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    id: "arsenal-fc-vs-fc-shakhtar-donetsk-22-10-2024",
                },
                { 
                    home: "SK Sturm Graz", 
                    away: "Sporting CP", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    id: "sk-sturm-graz-vs-sporting-cp-22-10-2024",
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "PSV Eindhoven", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    id: "paris-saint-germain-fc-vs-psv-eindhoven-22-10-2024",
                },
                { 
                    home: "Juventus FC", 
                    away: "VfB Stuttgart", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    id: "juventus-fc-vs-vfb-stuttgart-22-10-2024",
                },
                { 
                    home: "Aston Villa FC", 
                    away: "Bologna FC 1909", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    id: "aston-villa-fc-vs-bologna-fc-1909-22-10-2024",
                },
                { 
                    home: "Girona FC", 
                    away: "Slovan Bratislava", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "October 22, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "girona-fc-vs-slovan-bratislava-22-10-2024",
                },
                { 
                    home: "Stade Brestois 29", 
                    away: "Bayer 04 Leverkusen", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "stade-brestois-29-vs-bayer-04-leverkusen-23-10-2024",
                },
                { 
                    home: "Atalanta BC", 
                    away: "Celtic FC", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    id: "atalanta-bc-vs-celtic-fc-23-10-2024",
                },
                { 
                    home: "FC Red Bull Salzburg", 
                    away: "GNK Dinamo Zagreb", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    id: "fc-red-bull-salzburg-vs-gnk-dinamo-zagreb-23-10-2024",
                },
                { 
                    home: "BSC Young Boys", 
                    away: "Inter Milan", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "bsc-young-boys-vs-inter-milan-23-10-2024",
                },
                { 
                    home: "RB Leipzig", 
                    away: "Liverpool FC", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    id: "rb-leipzig-vs-liverpool-fc-23-10-2024",
                },
                { 
                    home: "Manchester City FC", 
                    away: "AC Sparta Prague", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    id: "manchester-city-fc-vs-ac-sparta-prague-23-10-2024",
                },
                { 
                    home: "SL Benfica", 
                    away: "Feyenoord Rotterdam", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    id: "sl-benfica-vs-feyenoord-rotterdam-23-10-2024",
                },
                { 
                    home: "FC Barcelona", 
                    away: "FC Bayern Munich", 
                    homeScore: 4,
                    awayScore: 1,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    id: "fc-barcelona-vs-fc-bayern-munich-23-10-2024",
                },
                { 
                    home: "Atlético Madrid", 
                    away: "Lille OSC", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "October 23, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    id: "atletico-madrid-vs-lille-osc-23-10-2024",
                },
            ]
        },
        {
            matchday: "Matchday 4",
            games: [
                { 
                    home: "Slovan Bratislava", 
                    away: "GNK Dinamo Zagreb", 
                    homeScore: 1,
                    awayScore: 4,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    id: "slovan-bratislava-vs-gnk-dinamo-zagreb-05-11-2024",
                },
                { 
                    home: "PSV Eindhoven", 
                    away: "Girona FC", 
                    homeScore: 4,
                    awayScore: 0,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    id: "psv-eindhoven-vs-girona-fc-05-11-2024",
                },
                { 
                    home: "Real Madrid CF", 
                    away: "AC Milan", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    id: "real-madrid-cf-vs-ac-milan-05-11-2024",
                },
                { 
                    home: "Sporting CP", 
                    away: "Manchester City FC", 
                    homeScore: 4,
                    awayScore: 1,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    id: "sporting-cp-vs-manchester-city-fc-05-11-2024",
                },
                { 
                    home: "Liverpool FC", 
                    away: "Bayer 04 Leverkusen", 
                    homeScore: 4,
                    awayScore: 0,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    id: "liverpool-fc-vs-bayer-04-leverkusen-05-11-2024",
                },
                { 
                    home: "Lille OSC", 
                    away: "Juventus FC", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    id: "lille-osc-vs-juventus-fc-05-11-2024",
                },
                { 
                    home: "Celtic FC", 
                    away: "RB Leipzig", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    id: "celtic-fc-vs-rb-leipzig-05-11-2024",
                },
                { 
                    home: "Borussia Dortmund", 
                    away: "SK Sturm Graz", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    id: "borussia-dortmund-vs-sk-sturm-graz-05-11-2024",
                },
                { 
                    home: "Bologna FC 1909", 
                    away: "AS Monaco FC", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "November 5, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    id: "bologna-fc-1909-vs-as-monaco-fc-05-11-2024",
                },
                { 
                    home: "FC Shakhtar Donetsk", 
                    away: "BSC Young Boys", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    id: "fc-shakhtar-donetsk-vs-bsc-young-boys-06-11-2024",
                },
                { 
                    home: "Club Brugge KV", 
                    away: "Aston Villa FC", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    id: "club-brugge-kv-vs-aston-villa-fc-06-11-2024",
                },
                { 
                    home: "VfB Stuttgart", 
                    away: "Atalanta BC", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    id: "vfb-stuttgart-vs-atalanta-bc-06-11-2024",
                },
                { 
                    home: "AC Sparta Prague", 
                    away: "Stade Brestois 29", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    id: "ac-sparta-prague-vs-stade-brestois-29-06-11-2024",
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Atlético Madrid", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    id: "paris-saint-germain-fc-vs-atletico-madrid-06-11-2024",
                },
                { 
                    home: "Inter Milan", 
                    away: "Arsenal FC", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    id: "inter-milan-vs-arsenal-fc-06-11-2024",
                },
                { 
                    home: "Feyenoord Rotterdam", 
                    away: "FC Red Bull Salzburg", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    id: "feyenoord-rotterdam-vs-fc-red-bull-salzburg-06-11-2024",
                },
                { 
                    home: "Red Star Belgrade", 
                    away: "FC Barcelona", 
                    homeScore: 2,
                    awayScore: 5,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    id: "red-star-belgrade-vs-fc-barcelona-06-11-2024",
                },
                { 
                    home: "FC Bayern Munich", 
                    away: "SL Benfica", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "November 6, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    id: "fc-bayern-munich-vs-sl-benfica-06-11-2024",
                },
            ]
        },
        {
            matchday: "Matchday 5",
            games: [
                { 
                    home: "AC Sparta Prague", 
                    away: "Atlético Madrid", 
                    homeScore: 0,
                    awayScore: 6,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    id: "ac-sparta-prague-vs-atletico-madrid-26-11-2024",
                },
                { 
                    home: "Slovan Bratislava", 
                    away: "AC Milan", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    id: "slovan-bratislava-vs-ac-milan-26-11-2024",
                },
                { 
                    home: "Manchester City FC", 
                    away: "Feyenoord Rotterdam", 
                    homeScore: 3,
                    awayScore: 3,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    id: "manchester-city-fc-vs-feyenoord-rotterdam-26-11-2024",
                },
                { 
                    home: "Bayer 04 Leverkusen", 
                    away: "FC Red Bull Salzburg", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    id: "bayer-04-leverkusen-vs-fc-red-bull-salzburg-26-11-2024",
                },
                { 
                    home: "BSC Young Boys", 
                    away: "Atalanta BC", 
                    homeScore: 1,
                    awayScore: 6,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    id: "bsc-young-boys-vs-atalanta-bc-26-11-2024",
                },
                { 
                    home: "Sporting CP", 
                    away: "Arsenal FC", 
                    homeScore: 1,
                    awayScore: 5,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    id: "sporting-cp-vs-arsenal-fc-26-11-2024",
                },
                { 
                    home: "FC Bayern Munich", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "fc-bayern-munich-vs-paris-saint-germain-fc-26-11-2024",
                },
                { 
                    home: "Inter Milan", 
                    away: "RB Leipzig", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    id: "inter-milan-vs-rb-leipzig-26-11-2024",
                },
                { 
                    home: "FC Barcelona", 
                    away: "Stade Brestois 29", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "November 26, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    id: "fc-barcelona-vs-stade-brestois-29-26-11-2024",
                },
                { 
                    home: "SK Sturm Graz", 
                    away: "Girona FC", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    id: "sk-sturm-graz-vs-girona-fc-27-11-2024",
                },
                { 
                    home: "Red Star Belgrade", 
                    away: "VfB Stuttgart", 
                    homeScore: 5,
                    awayScore: 1,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    id: "sk-sturm-graz-vs-girona-fc-27-11-2024",
                },
                { 
                    home: "PSV Eindhoven", 
                    away: "FC Shakhtar Donetsk", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    id: "psv-eindhoven-vs-fc-shakhtar-donetsk-27-11-2024",
                },
                { 
                    home: "AS Monaco FC", 
                    away: "SL Benfica", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    id: "as-monaco-fc-vs-sl-benfica-27-11-2024",
                },
                { 
                    home: "Liverpool FC", 
                    away: "Real Madrid CF", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    id: "liverpool-fc-vs-real-madrid-cf-27-11-2024",
                },
                { 
                    home: "GNK Dinamo Zagreb", 
                    away: "Borussia Dortmund", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    id: "gnk-dinamo-zagreb-vs-borussia-dortmund-27-11-2024",
                },
                { 
                    home: "Bologna FC 1909", 
                    away: "Lille OSC", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    id: "bologna-fc-1909-vs-lille-osc-27-11-2024",
                },
                { 
                    home: "Celtic FC", 
                    away: "Club Brugge KV", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    id: "celtic-fc-vs-club-brugge-kv-27-11-2024",
                },
                { 
                    home: "Aston Villa FC", 
                    away: "Juventus FC", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "November 27, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    id: "aston-villa-fc-vs-juventus-fc-27-11-2024",
                },
            ]
        },
        {
            matchday: "Matchday 6",
            games: [
                { 
                    home: "Girona FC", 
                    away: "Liverpool FC", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    id: "girona-fc-vs-liverpool-fc-10-12-2024",
                },
                { 
                    home: "GNK Dinamo Zagreb", 
                    away: "Celtic FC", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    id: "gnk-dinamo-zagreb-vs-celtic-fc-10-12-2024",
                },
                { 
                    home: "FC Red Bull Salzburg", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "fc-red-bull-salzburg-vs-paris-saint-germain-fc-10-12-2024",
                },
                { 
                    home: "FC Shakhtar Donetsk", 
                    away: "FC Bayern Munich", 
                    homeScore: 1,
                    awayScore: 5,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    id: "fc-shakhtar-donetsk-vs-fc-bayern-munich-10-12-2024",
                },
                { 
                    home: "RB Leipzig", 
                    away: "Aston Villa FC", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    id: "rb-leipzig-vs-aston-villa-fc-10-12-2024",
                },
                { 
                    home: "Club Brugge KV", 
                    away: "Sporting CP", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    id: "club-brugge-kv-vs-sporting-cp-10-12-2024",
                },
                { 
                    home: "Stade Brestois 29", 
                    away: "PSV Eindhoven", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    id: "stade-brestois-29-vs-psv-eindhoven-10-12-2024",
                },
                { 
                    home: "Bayer 04 Leverkusen", 
                    away: "Inter Milan", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "bayer-04-leverkusen-vs-inter-milan-10-12-2024",
                },
                { 
                    home: "Atalanta BC", 
                    away: "Real Madrid CF", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "December 10, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    id: "atalanta-bc-vs-real-madrid-cf-10-12-2024",
                },
                { 
                    home: "Lille OSC", 
                    away: "SK Sturm Graz", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    id: "lille-osc-vs-sk-sturm-graz-11-12-2024",
                },
                { 
                    home: "Atlético Madrid", 
                    away: "Slovan Bratislava", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "atletico-madrid-vs-slovan-bratislava-11-12-2024",
                },
                { 
                    home: "Arsenal FC", 
                    away: "AS Monaco FC", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    id: "arsenal-fc-vs-as-monaco-fc-11-12-2024",
                },
                { 
                    home: "VfB Stuttgart", 
                    away: "BSC Young Boys", 
                    homeScore: 5,
                    awayScore: 1,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    id: "vfb-stuttgart-vs-bsc-young-boys-11-12-2024",
                },
                { 
                    home: "AC Milan", 
                    away: "Red Star Belgrade", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    id: "ac-milan-vs-red-star-belgrade-11-12-2024",
                },
                { 
                    home: "Juventus FC", 
                    away: "Manchester City FC", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    id: "juventus-fc-vs-manchester-city-fc-11-12-2024",
                },
                { 
                    home: "Feyenoord Rotterdam", 
                    away: "AC Sparta Prague", 
                    homeScore: 4,
                    awayScore: 2,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    id: "feyenoord-rotterdam-vs-ac-sparta-prague-11-12-2024",
                },
                { 
                    home: "Borussia Dortmund", 
                    away: "FC Barcelona", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    id: "borussia-dortmund-vs-fc-barcelona-11-12-2024",
                },
                { 
                    home: "SL Benfica", 
                    away: "Bologna FC 1909", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "December 11, 2024",
                    homeBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    id: "sl-benfica-vs-bologna-fc-1909-11-12-2024",
                },
            ]
        },
        {
            matchday: "Matchday 7",
            games: [
                { 
                    home: "AS Monaco FC", 
                    away: "Aston Villa FC", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    id: "as-monaco-fc-vs-aston-villa-fc-21-01-2025",
                },
                { 
                    home: "Atalanta BC", 
                    away: "SK Sturm Graz", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    id: "atalanta-bc-vs-sk-sturm-graz-21-01-2025",
                },
                { 
                    home: "Slovan Bratislava", 
                    away: "VfB Stuttgart", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    id: "slovan-bratislava-vs-vfb-stuttgart-21-01-2025",
                },
                { 
                    home: "Red Star Belgrade", 
                    away: "PSV Eindhoven", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    id: "red-star-belgrade-vs-psv-eindhoven-21-01-2025",
                },
                { 
                    home: "Liverpool FC", 
                    away: "Lille OSC", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    id: "liverpool-fc-vs-lille-osc-21-01-2025",
                },
                { 
                    home: "Club Brugge KV", 
                    away: "Juventus FC", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    id: "club-brugge-kv-vs-juventus-fc-21-01-2025",
                },
                { 
                    home: "Bologna FC 1909", 
                    away: "Borussia Dortmund", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    id: "bologna-fc-1909-vs-borussia-dortmund-21-01-2025",
                },
                { 
                    home: "Atlético Madrid", 
                    away: "Bayer 04 Leverkusen", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    id: "atletico-madrid-vs-bayer-04-leverkusen-21-01-2025",
                },
                { 
                    home: "SL Benfica", 
                    away: "FC Barcelona", 
                    homeScore: 4,
                    awayScore: 5,
                    date: "January 21, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    id: "sl-benfica-vs-fc-barcelona-21-01-2025",
                },
                { 
                    home: "FC Shakhtar Donetsk", 
                    away: "Stade Brestois 29", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    id: "fc-shakhtar-donetsk-vs-stade-brestois-29-22-01-2025",
                },
                { 
                    home: "RB Leipzig", 
                    away: "Sporting CP", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    id: "rb-leipzig-vs-sporting-cp-22-01-2025",
                },
                { 
                    home: "Real Madrid CF", 
                    away: "FC Red Bull Salzburg", 
                    homeScore: 5,
                    awayScore: 1,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    id: "real-madrid-cf-vs-fc-red-bull-salzburg-22-01-2025",
                },
                { 
                    home: "Arsenal FC", 
                    away: "GNK Dinamo Zagreb", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    id: "arsenal-fc-vs-gnk-dinamo-zagreb-22-01-2025",
                },
                { 
                    home: "AC Sparta Prague", 
                    away: "Inter Milan", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "ac-sparta-prague-vs-inter-milan-22-01-2025",
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Manchester City FC", 
                    homeScore: 4,
                    awayScore: 2,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    id: "paris-saint-germain-fc-vs-manchester-city-fc-22-01-2025",
                },
                { 
                    home: "AC Milan", 
                    away: "Girona FC", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    id: "ac-milan-vs-girona-fc-22-01-2025",
                },
                { 
                    home: "Feyenoord Rotterdam", 
                    away: "FC Bayern Munich", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    id: "feyenoord-rotterdam-vs-fc-bayern-munich-22-01-2025",
                },
                { 
                    home: "Celtic FC", 
                    away: "BSC Young Boys", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "January 22, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    id: "celtic-fc-vs-bsc-young-boys-22-01-2025",
                },
            ]
        },
        {
            matchday: "Matchday 8",
            games: [
                { 
                    home: "Stade Brestois 29", 
                    away: "Real Madrid CF", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    id: "stade-brestois-29-vs-real-madrid-cf-29-01-2025",
                },
                { 
                    home: "VfB Stuttgart", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 1,
                    awayScore: 4,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/vfb-stuttgart.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "vfb-stuttgart-vs-paris-saint-germain-fc-29-01-2025",
                },
                { 
                    home: "SK Sturm Graz", 
                    away: "RB Leipzig", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/sk-sturm-graz.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/rb-leipzig.webp",
                    id: "sk-sturm-graz-vs-rb-leipzig-29-01-2025",
                },
                { 
                    home: "Girona FC", 
                    away: "Arsenal FC", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/girona-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    id: "girona-fc-vs-arsenal-fc-29-01-2025",
                },
                { 
                    home: "Aston Villa FC", 
                    away: "Celtic FC", 
                    homeScore: 4,
                    awayScore: 2,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    id: "aston-villa-fc-vs-celtic-fc-29-01-2025",
                },
                { 
                    home: "Sporting CP", 
                    away: "Bologna FC 1909", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bologna-fc-1909.webp",
                    id: "sporting-cp-vs-bologna-fc-1909-29-01-2025",
                },
                { 
                    home: "BSC Young Boys", 
                    away: "Red Star Belgrade", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/bsc-young-boys.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/red-star-belgrade.webp",
                    id: "bsc-young-boys-vs-red-star-belgrade-29-01-2025",
                },
                { 
                    home: "Lille OSC", 
                    away: "Feyenoord Rotterdam", 
                    homeScore: 6,
                    awayScore: 1,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    id: "lille-osc-vs-feyenoord-rotterdam-29-01-2025",
                },
                { 
                    home: "Manchester City FC", 
                    away: "Club Brugge KV", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    id: "manchester-city-fc-vs-club-brugge-kv-29-01-2025",
                },
                { 
                    home: "PSV Eindhoven", 
                    away: "Liverpool FC", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    id: "psv-eindhoven-vs-liverpool-fc-29-01-2025",
                },
                { 
                    home: "Juventus FC", 
                    away: "SL Benfica", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    id: "juventus-fc-vs-sl-benfica-29-01-2025",
                },
                { 
                    home: "GNK Dinamo Zagreb", 
                    away: "AC Milan", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/gnk-dinamo-zagreb.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    id: "gnk-dinamo-zagreb-vs-ac-milan-29-01-2025",
                },
                { 
                    home: "FC Red Bull Salzburg", 
                    away: "Atlético Madrid", 
                    homeScore: 1,
                    awayScore: 4,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-red-bull-salzburg.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    id: "fc-red-bull-salzburg-vs-atletico-madrid-29-01-2025",
                },
                { 
                    home: "FC Bayern Munich", 
                    away: "Slovan Bratislava", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/slovan-bratislava.webp",
                    id: "fc-bayern-munich-vs-slovan-bratislava-29-01-2025",
                },
                { 
                    home: "Inter Milan", 
                    away: "AS Monaco FC", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    id: "inter-milan-vs-as-monaco-fc-29-01-2025",
                },
                { 
                    home: "Borussia Dortmund", 
                    away: "FC Shakhtar Donetsk", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-shakhtar-donetsk.webp",
                    id: "borussia-dortmund-vs-fc-shakhtar-donetsk-29-01-2025",
                },
                { 
                    home: "Bayer 04 Leverkusen", 
                    away: "AC Sparta Prague", 
                    homeScore: 2,
                    awayScore: 0,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-sparta-prague.webp",
                    id: "bayer-04-leverkusen-vs-ac-sparta-prague-29-01-2025",
                },
                { 
                    home: "FC Barcelona", 
                    away: "Atalanta BC", 
                    homeScore: 2,
                    awayScore: 2,
                    date: "January 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    id: "fc-barcelona-vs-atalanta-bc-29-01-2025",
                },
            ]
        },
        {
            matchday: "Playoffs",
            games: [
                { 
                    home: "Stade Brestois 29", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "February 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "stade-brestois-29-vs-paris-saint-germain-fc-11-02-2025",
                },
                { 
                    home: "Juventus FC", 
                    away: "PSV Eindhoven", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "February 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    id: "juventus-fc-vs-psv-eindhoven-11-02-2025",
                },
                { 
                    home: "Manchester City FC", 
                    away: "Real Madrid CF", 
                    homeScore: 2,
                    awayScore: 3,
                    date: "February 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    id: "manchester-city-fc-vs-real-madrid-cf-11-02-2025",
                },
                { 
                    home: "Sporting CP", 
                    away: "Borussia Dortmund", 
                    homeScore: 0,
                    awayScore: 3,
                    date: "February 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    id: "sporting-cp-vs-borussia-dortmund-11-02-2025",
                },
                { 
                    home: "Club Brugge KV", 
                    away: "Atalanta BC", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "February 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    id: "club-brugge-kv-vs-atalanta-bc-12-02-2025",
                },
                { 
                    home: "AS Monaco FC", 
                    away: "SL Benfica", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "February 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    id: "as-monaco-fc-vs-sl-benfica-12-02-2025",
                },
                { 
                    home: "Feyenoord Rotterdam", 
                    away: "AC Milan", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "February 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    id: "feyenoord-rotterdam-vs-ac-milan-12-02-2025",
                },
                { 
                    home: "Celtic FC", 
                    away: "FC Bayern Munich", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "February 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    id: "celtic-fc-vs-fc-bayern-munich-12-02-2025",
                },
                { 
                    home: "AC Milan", 
                    away: "Feyenoord Rotterdam", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "February 18, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/ac-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    id: "ac-milan-vs-feyenoord-rotterdam-18-02-2025",
                    note: "Feyenoord Rotterdam qualifies, 1-2 on aggregate"
                },
                { 
                    home: "SL Benfica", 
                    away: "AS Monaco FC", 
                    homeScore: 3,
                    awayScore: 3,
                    date: "February 18, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/as-monaco-fc.webp",
                    id: "sl-benfica-vs-as-monaco-fc-18-02-2025",
                    note: "SL Benfica qualifies, 4-3 on aggregate"
                },
                { 
                    home: "Atalanta BC", 
                    away: "Club Brugge KV", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "February 18, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/atalanta-bc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    id: "atalanta-bc-vs-club-brugge-kv-18-02-2025",
                    note: "Club Brugge KV qualifies, 2-5 on aggregate"
                },
                { 
                    home: "FC Bayern Munich", 
                    away: "Celtic FC", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "February 18, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/celtic-fc.webp",
                    id: "fc-bayern-munich-vs-celtic-fc-18-02-2025",
                    note: "FC Bayern Munich qualifies, 3-2 on aggregate"
                },
                { 
                    home: "Borussia Dortmund", 
                    away: "Sporting CP", 
                    homeScore: 0,
                    awayScore: 0,
                    date: "February 19, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sporting-cp.webp",
                    id: "borussia-dortmund-vs-sporting-cp-19-02-2025",
                    note: "Borussia Dortmund qualifies, 3-0 on aggregate"
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Stade Brestois 29", 
                    homeScore: 7,
                    awayScore: 0,
                    date: "February 19, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/stade-brestois-29.webp",
                    id: "paris-saint-germain-fc-vs-stade-brestois-29-19-02-2025",
                    note: "Paris Saint-Germain FC qualifies, 10-0 on aggregate"
                },
                { 
                    home: "PSV Eindhoven", 
                    away: "Juventus FC", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "February 19, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/juventus-fc.webp",
                    id: "psv-eindhoven-vs-juventus-fc-19-02-2025",
                    note: "PSV Eindhoven qualifies, 4-3 on aggregate"
                },
                { 
                    home: "Real Madrid CF", 
                    away: "Manchester City FC", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "February 19, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/manchester-city-fc.webp",
                    id: "real-madrid-cf-vs-manchester-city-fc-19-02-2025",
                    note: "Real Madrid CF qualifies, 6-3 on aggregate"
                },
            ]
        },
        {
            matchday: "Round of 16",
            games: [
                { 
                    home: "Club Brugge KV", 
                    away: "Aston Villa FC", 
                    homeScore: 1,
                    awayScore: 3,
                    date: "March 4, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    id: "club-brugge-kv-vs-aston-villa-fc-04-03-2025"
                },
                { 
                    home: "Real Madrid CF", 
                    away: "Atlético Madrid", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "March 4, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    id: "real-madrid-cf-vs-atletico-madrid-04-03-2025"
                },
                { 
                    home: "PSV Eindhoven", 
                    away: "Arsenal FC", 
                    homeScore: 1,
                    awayScore: 7,
                    date: "March 4, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    id: "psv-eindhoven-vs-arsenal-fc-04-03-2025"
                },
                { 
                    home: "Borussia Dortmund", 
                    away: "Lille OSC", 
                    homeScore: 1,
                    awayScore: 1,
                    date: "March 4, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    id: "borussia-dortmund-vs-lille-osc-04-03-2025"
                },
                { 
                    home: "Feyenoord Rotterdam", 
                    away: "Inter Milan", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "March 5, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "feyenoord-rotterdam-vs-inter-milan-05-03-2025"
                },
                { 
                    home: "FC Bayern Munich", 
                    away: "Bayer 04 Leverkusen", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "March 5, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    id: "fc-bayern-munich-vs-bayer-04-leverkusen-05-03-2025"
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Liverpool FC", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "March 5, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    id: "paris-saint-germain-fc-vs-liverpool-fc-05-03-2025"
                },
                { 
                    home: "SL Benfica", 
                    away: "FC Barcelona", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "March 5, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    id: "sl-benfica-vs-fc-barcelona-05-03-2025"
                },
                { 
                    home: "FC Barcelona", 
                    away: "SL Benfica", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "March 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/sl-benfica.webp",
                    id: "fc-barcelona-vs-sl-benfica-11-03-2025",
                    note: "FC Barcelona qualifies, 4-1 on aggregate"
                },
                { 
                    home: "Bayer 04 Leverkusen", 
                    away: "FC Bayern Munich", 
                    homeScore: 0,
                    awayScore: 2,
                    date: "March 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/bayer-04-leverkusen.webp",
                    id: "bayer-04-leverkusen-vs-fc-bayern-munich-11-03-2025",
                    note: "FC Bayern Munich qualifies, 0-5 on aggregate"
                },
                { 
                    home: "Inter Milan", 
                    away: "Feyenoord Rotterdam", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "March 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/feyenoord-rotterdam.webp",
                    id: "inter-milan-vs-feyenoord-rotterdam-11-03-2025",
                    note: "FC Barcelona qualifies, 4-1 on aggregate"
                },
                { 
                    home: "Liverpool FC", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "March 11, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/liverpool-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "liverpool-fc-vs-paris-saint-germain-fc-11-03-2025",
                    note: "Paris Saint-Germain FC qualifies, 1-1 (p. 1-4) on aggregate"
                },
                { 
                    home: "Lille OSC", 
                    away: "Borussia Dortmund", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "March 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/lille-osc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    id: "lille-osc-vs-borussia-dortmund-12-03-2025",
                    note: "Borussia Dortmund qualifies, 2-3 on aggregate"
                },
                { 
                    home: "Aston Villa FC", 
                    away: "Club Brugge KV", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "March 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/club-brugge-kv.webp",
                    id: "aston-villa-fc-vs-club-brugge-kv-12-03-2025",
                    note: "Aston Villa FC qualifies, 6-1 on aggregate"
                },
                { 
                    home: "Atlético Madrid", 
                    away: "Real Madrid CF", 
                    homeScore: 1,
                    awayScore: 0,
                    date: "March 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/atletico-madrid.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    id: "atletico-madrid-vs-real-madrid-cf-12-03-2025",
                    note: "Real Madrid CF qualifies, 2-2 (p. 2-4) on aggregate"
                },
                { 
                    home: "Arsenal FC", 
                    away: "PSV Eindhoven", 
                    homeScore: 2,
                    awayScore: 2,
                    date: "March 12, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/psv-eindhoven.webp",
                    id: "arsenal-fc-vs-psv-eindhoven-12-03-2025",
                    note: "Arsenal FC qualifies, 9-3 on aggregate"
                },
            ]
        },
        {
            matchday: "Quarter-Finals",
            games: [
                { 
                    home: "FC Bayern Munich", 
                    away: "Inter Milan", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "April 8, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "fc-bayern-munich-vs-inter-milan-08-04-2025"
                },
                { 
                    home: "Arsenal FC", 
                    away: "Real Madrid CF", 
                    homeScore: 3,
                    awayScore: 0,
                    date: "April 8, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    id: "arsenal-fc-vs-real-madrid-cf-08-04-2025"
                },
                { 
                    home: "FC Barcelona", 
                    away: "Borussia Dortmund", 
                    homeScore: 4,
                    awayScore: 0,
                    date: "April 9, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    id: "fc-barcelona-vs-borussia-dortmund-09-04-2025"
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Aston Villa FC", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "April 9, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    id: "paris-saint-germain-fc-vs-aston-villa-fc-09-04-2025"
                },
                { 
                    home: "Borussia Dortmund", 
                    away: "FC Barcelona", 
                    homeScore: 3,
                    awayScore: 1,
                    date: "April 15, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/borussia-dortmund.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    id: "borussia-dortmund-vs-fc-barcelona-15-04-2025",
                    note: "FC Barcelona qualifies, 3-5 on aggregate"
                },
                { 
                    home: "Aston Villa FC", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 3,
                    awayScore: 2,
                    date: "April 15, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/aston-villa-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "aston-villa-fc-vs-paris-saint-germain-fc-15-04-2025",
                    note: "Paris Saint-Germain FC qualifies, 4-5 on aggregate"
                },
                { 
                    home: "Inter Milan", 
                    away: "FC Bayern Munich", 
                    homeScore: 2,
                    awayScore: 2,
                    date: "April 16, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-bayern-munich.webp",
                    id: "inter-milan-vs-fc-bayern-munich-16-04-2025",
                    note: "Inter Milan qualifies, 4-3 on aggregate"
                },
                { 
                    home: "Real Madrid CF", 
                    away: "Arsenal FC", 
                    homeScore: 1,
                    awayScore: 2,
                    date: "April 16, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/real-madrid-cf.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    id: "real-madrid-cf-vs-arsenal-fc-16-04-2025",
                    note: "Arsenal FC qualifies, 1-5 on aggregate"
                },
            ],
        },
        {
            matchday: "Semi-Finals",
            games: [
                { 
                    home: "Arsenal FC", 
                    away: "Paris Saint-Germain FC", 
                    homeScore: 0,
                    awayScore: 1,
                    date: "April 29, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    id: "arsenal-fc-vs-paris-saint-germain-fc-29-04-2025"
                },
                { 
                    home: "FC Barcelona", 
                    away: "Inter Milan", 
                    homeScore: 3,
                    awayScore: 3,
                    date: "April 30, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "fc-barcelona-vs-inter-milan-30-04-2025"
                },
                { 
                    home: "Inter Milan", 
                    away: "FC Barcelona", 
                    homeScore: 4,
                    awayScore: 3,
                    date: "May 6, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/fc-barcelona.webp",
                    id: "inter-milan-vs-fc-barcelona-06-05-2025",
                    note: "Inter Milan qualifies, 7-6 on aggregate (a.e.t.)"
                },
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Arsenal FC", 
                    homeScore: 2,
                    awayScore: 1,
                    date: "May 7, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/arsenal-fc.webp",
                    id: "paris-saint-germain-fc-vs-arsenal-fc-07-05-2025",
                    note: "Paris Saint-Germain FC qualifies, 3-1 on aggregate"
                },
            ]
        },
        {
            matchday: "Final",
            games: [
                { 
                    home: "Paris Saint-Germain FC", 
                    away: "Inter Milan", 
                    homeScore: 5,
                    awayScore: 0,
                    date: "May 31, 2025",
                    homeBadge: "../../../../../../images/sports/football/clubs/paris-saint-germain-fc.webp",
                    awayBadge: "../../../../../../images/sports/football/clubs/inter-milan.webp",
                    id: "paris-saint-germain-fc-vs-inter-milan-31-05-2025",
                    note: "Paris Saint-Germain FC's 1st UCL title"
                },
            ]
        }
    ],
    playerStats: {
        scorers: [
            { name: "Robert Lewandowski", team: "Barcelona", goals: 7 },
            { name: "Harry Kane", team: "Bayern Munich", goals: 5 }
        ],
        assists: [
            { name: "Raphinha", team: "Barcelona", assists: 4 }
        ]
    },
    teamStats: [
        { team: "Manchester City", possession: "65%", shots: 88 },
        { team: "Real Madrid", possession: "54%", shots: 72 }
    ]
};

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    renderAllData();
});

/**
 * Rendering Functions
 */
function renderAllData() {
    initMatchdayFilter();
    renderStandings();
    renderPlayerStats();
    renderTeamStats();
}

function renderMatches(selectedMatchday = 'all') {
    const container = document.getElementById('matches-container');
    if (!container) return;

    let filteredMatches = uclData2425.matches;
    if (selectedMatchday !== 'all') {
        filteredMatches = uclData2425.matches.filter(md => md.matchday === selectedMatchday);
    }

    let html = '';
    if (filteredMatches.length === 0) {
        html = '<p class="empty-state">No match data available for this matchday.</p>';
    } else {
        filteredMatches.forEach(md => {
        html += `<div class="match-group"><h3 class="match-day-title">${md.matchday}</h3>`;
        let lastShownDate = '';
        md.games.forEach(game => {
            const isNewDate = game.date !== lastShownDate;
            if (isNewDate) lastShownDate = game.date;

            html += `
                <a href="ucl20242025/${game.id}.html" class="match-card-link">
                    ${isNewDate ? `<div class="match-card-header">${game.date} <div class="date-divider"></div></div>` : ''}
                    <div class="match-row" style="${game.note ? 'padding-bottom: 44px;' : ''}">
                        <div class="team-display home">
                            <span class="team-name">${game.home}</span>
                            <img src="${game.homeBadge}" class="team-badge" alt="${game.home}" loading="lazy">
                        </div>
                        <div class="score-column">
                            <div class="match-score-container">
                                <span class="score-val">${game.homeScore}</span>
                                <span class="score-separator">-</span>
                                <span class="score-val">${game.awayScore}</span>
                            </div>
                            ${game.note ? `<span class="match-note">${game.note}</span>` : ''}
                        </div>
                        <div class="team-display away">
                            <img src="${game.awayBadge}" class="team-badge" alt="${game.away}" loading="lazy">
                            <span class="team-name">${game.away}</span>
                        </div>
                    </div>
                </a>
            `;
        });
        html += `</div>`;
        });
    }
    container.innerHTML = html || '<p class="empty-state">No match data available.</p>';
}

function initMatchdayFilter() {
    const selectElement = document.getElementById('matchday-select');
    if (!selectElement) return;

    // Hide native select (browsers won't let us style its options list)
    selectElement.style.display = 'none';
    
    // Create custom UI structure that matches the Navbar Dropdown
    const wrapper = document.createElement('div');
    wrapper.className = 'custom-dropdown-wrapper';
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';
    
    const trigger = document.createElement('button');
    trigger.className = 'matchday-filter-select';
    trigger.id = 'matchday-custom-trigger';
    trigger.innerHTML = 'All Matchdays';
    
    const menu = document.createElement('div');
    menu.className = 'dropdown-container'; // Reuses pretty styles from dropdowns.css
    menu.id = 'matchday-custom-menu';

    // Build custom list including 'All' option
    const matchdays = ['all', ...new Set(uclData2425.matches.map(md => md.matchday))];
    
    matchdays.forEach(val => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.textContent = val === 'all' ? 'All Matchdays' : val;
        
        item.onclick = (e) => {
            e.stopPropagation();
            selectElement.value = val;
            trigger.innerHTML = item.textContent;
            menu.classList.remove('show');
            renderMatches(val);
        };
        
        menu.appendChild(item);
    });

    // Toggle custom menu visibility
    trigger.onclick = (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    };

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    selectElement.parentNode.insertBefore(wrapper, selectElement);

    renderMatches('all');
}

function renderStandings() {
    const container = document.getElementById('standings-container');
    if (!container) return;

    let html = `
        <div class="standings-tabs">
            <button class="tab-btn ${currentStandingsSubTab === 'regular' ? 'active' : ''}" onclick="switchStandingsSubTab('regular')">
                Regular Season
            </button>
            <button class="tab-btn ${currentStandingsSubTab === 'knockout' ? 'active' : ''}" onclick="switchStandingsSubTab('knockout')">
                Knockout
            </button>
        </div>
        <div id="standings-content"></div>
    `;

    container.innerHTML = html;
    const content = document.getElementById('standings-content');

    if (currentStandingsSubTab === 'regular') {
        renderRegularSeasonStandings(content);
    } else {
        renderKnockoutBracket(content);
    }
}

function renderRegularSeasonStandings(container) {
    // Configurable legend items
    const legendItems = [
        { status: 'qualified', label: 'Round of 16', color: '#10b981' },
        { status: 'playoffs', label: 'Play-offs', color: '#3b82f6' },
        { status: 'eliminated', label: 'Eliminated', color: '#ef4444' }
    ];

    let html = `
        <style>
            .standings-legend {
                display: flex;
                flex-wrap: wrap;
                gap: 24px;
                margin-top: 24px;
                padding: 16px;
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid #1e293b;
                border-radius: 12px;
            }
            .legend-item {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.85rem;
                color: #94a3b8;
                font-weight: 500;
            }
            .legend-marker {
                width: 12px;
                height: 12px;
                border-radius: 3px;
                flex-shrink: 0;
            }
        </style>

        <div class="standings-wrapper">
            <table class="wiki-table">
                <thead>
                    <tr>
                        <th class="rank-col">#</th>
                        <th class="team-col">Team</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th class="hide-mobile">GF</th>
                        <th class="hide-mobile">GA</th>
                        <th class="hide-mobile">GD</th>
                        <th class="pts-col">Pts</th>
                    </tr>
                </thead>
                <tbody>
    `;

    uclData2425.standings.forEach(team => {
        // Extracting just the text and URL to ensure the badge is also clickable
        const linkMatch = team.team.match(/href='([^']*)'>(.*)<\/a>/);
        const teamContent = linkMatch 
            ? `<a href="${linkMatch[1]}" class="team-link"><img src="${team.badge}" class="team-badge-small" alt=""><span>${linkMatch[2]}</span></a>`
            : `<img src="${team.badge}" class="team-badge-small" alt=""><span>${team.team}</span>`;

        html += `
            <tr class="status-${team.status}">
                <td class="rank-col">${team.rank}</td>
                <td class="team-col">
                    ${teamContent}
                </td>
                <td>${team.p}</td>
                <td>${team.w}</td>
                <td>${team.d}</td>
                <td>${team.l}</td>
                <td class="hide-mobile">${team.gf}</td>
                <td class="hide-mobile">${team.ga}</td>
                <td class="hide-mobile">${team.gd > 0 ? '+' + team.gd : team.gd}</td>
                <td class="pts-col">${team.pts}</td>
            </tr>
        `;
    });

    html += `</tbody></table></div>
        <div class="standings-legend">
            ${legendItems.map(item => `
                <div class="legend-item">
                    <span class="legend-marker" style="background: ${item.color}; box-shadow: 0 0 10px ${item.color}44;"></span>
                    <span>${item.label}</span>
                </div>
            `).join('')}
        </div>
    `;

    container.innerHTML = html;
}

// ─── KNOCKOUT BRACKET RENDERER ────────────────────────────────────────────────

function buildTwoLegTie(tie) {
    const getSlug = (n) => n.toLowerCase().split(' (')[0].replace(/\s+/g, '-').replace(/\./g, '');
    const homeStatus = tie.winner === 'home' ? 'winner' : 'loser';
    const awayStatus = tie.winner === 'away' ? 'winner' : 'loser';
    
    // Parse penalties if they exist (expected format "4–2")
    let homePens = '';
    let awayPens = '';
    if (tie.pens) {
        const parts = tie.pens.split('–');
        homePens = `<span class="bracket-pens">(${parts[0].trim()})</span>`;
        awayPens = `<span class="bracket-pens">(${parts[1].trim()})</span>`;
    }

    return `
        <div class="bracket-card">
            <div class="bracket-row status-${homeStatus}">
                <img src="${tie.home.badge}" class="bracket-badge" alt="">
                <a href="../../../../football/clubs/${getSlug(tie.home.name)}.html" class="bracket-name">${tie.home.name}</a>
                <span class="bracket-score-cell">${tie.leg1.homeScore}</span>
                <span class="bracket-score-cell">${tie.leg2.awayScore}</span>
                <span class="bracket-agg-cell">${tie.agg.split('–')[0]} ${homePens}</span>
            </div>
            <div class="bracket-row status-${awayStatus}">
                <img src="${tie.away.badge}" class="bracket-badge" alt="">
                <a href="../../../../football/clubs/${getSlug(tie.away.name)}.html" class="bracket-name">${tie.away.name}</a>
                <span class="bracket-score-cell">${tie.leg1.awayScore}</span>
                <span class="bracket-score-cell">${tie.leg2.homeScore}</span>
                <span class="bracket-agg-cell">${tie.agg.split('–')[1]} ${awayPens}</span>
            </div>
        </div>
    `;
}

// Renamed from renderKnockout to renderKnockoutBracket and accepts a container
function renderKnockoutBracket(container) {

    const ko = uclData2425.knockout;

    // Calculate base height from the playoffs (first column with 8 ties)
    const tieH = 82; // Card height
    const gapH = 8;  // Original gap
    const baseHeight = (ko.playoffs.length * tieH) + ((ko.playoffs.length - 1) * gapH);

    const phases = [
        { label: 'Play-offs', key: 'playoffs', ties: ko.playoffs },
        { label: 'Round of 16', key: 'r16', ties: ko.roundOf16 },
        { label: 'Quarter-finals', key: 'qf', ties: ko.quarterFinals },
        { label: 'Semi-finals', key: 'sf', ties: ko.semiFinals },
    ];

    let html = `
        <style>
            /* Phase column */
            .bracket-phase { display: flex; flex-direction: column; min-width: 280px; }
            .bracket-phase__label {
                text-align: center;
                font-size: 0.65rem;
                font-weight: 800;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #64748b;
                padding: 10px 8px 14px;
                border-bottom: 1px solid #1e293b;
                margin-bottom: 12px;
            }
            .bracket-phase__ties { 
                display: flex; 
                flex-direction: column; 
                justify-content: space-around; 
                padding: 0 8px;
                height: ${baseHeight}px;
            }

            /* Final column */
            .bracket-phase--final { min-width: 260px; }
            .bracket-connector { 
                width: 40px; 
                position: relative; 
                display: flex;
                flex-direction: column;
            }
            
            /* Pretty SVG Styling */
            .bracket-connector svg {
                filter: drop-shadow(0 0 3px rgba(51, 65, 85, 0.3));
            }
            .connector-path {
                fill: none;
                stroke: #334155;
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: stroke 0.3s ease;
            }
            .connector-path.highlight {
                stroke: #60a5fa;
                filter: drop-shadow(0 0 5px rgba(96, 165, 250, 0.5));
            }
            .connector-path.final-path {
                stroke: #f59e0b;
                filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.4));
            }

            .bracket-card {
                background: #0f172a;
                border: 1px solid #1e293b;
                border-radius: 8px;
                overflow: hidden;
                width: 100%;
            }

            .bracket-row {
                display: grid;
                grid-template-columns: 24px 1fr 35px 35px 70px;
                align-items: center;
                padding: 6px 10px;
                gap: 8px;
                border-bottom: 1px solid rgba(30, 41, 59, 0.5);
            }
            .bracket-row:last-child { border-bottom: none; }

            .bracket-row.status-winner { background: rgba(59, 130, 246, 0.1); }
            .bracket-row.status-loser { opacity: 0.6; }

            .bracket-badge { width: 18px; height: 18px; object-fit: contain; }
            .bracket-name { 
                font-size: 0.75rem; 
                font-weight: 600; 
                color: #f8fafc; 
                white-space: nowrap; 
                overflow: hidden; 
                text-overflow: ellipsis; 
                text-decoration: none;
                line-height: 1; /* Fixes "placed lower" issue */
            }
            .bracket-score-cell { font-size: 0.75rem; text-align: center; color: #94a3b8; font-family: 'Unbounded', sans-serif; }
            .status-winner .bracket-score-cell { color: #60a5fa; font-weight: 700; }
            .bracket-agg-cell { font-size: 0.75rem; text-align: right; font-weight: 800; color: #e2e8f0; font-family: 'Unbounded', sans-serif; }
            .bracket-pens { color: #a855f7; font-size: 0.65rem; margin-left: 4px; font-weight: 700; }

            .bracket-card--final { border-color: #f59e0b; box-shadow: 0 0 15px rgba(245, 158, 11, 0.1); }

            /* Standings Table Link Fix */
            .team-link { display: flex; align-items: center; gap: 12px; color: inherit; text-decoration: none; }
            .team-link:hover span { color: #a855f7; text-decoration: underline; }
        </style>

        <div class="horizontal-scroll-container">
            <div class="horizontal-scroll-content" style="display: flex; align-items: stretch; gap: 0;">
    `;

    // Build each phase column with SVG connectors between them
    phases.forEach((phase, phaseIdx) => {
        const tieCount = phase.ties.length;
        html += `
            <div class="bracket-phase">
                <div class="bracket-phase__label">${phase.label}</div>
                <div class="bracket-phase__ties">
                    ${phase.ties.map(tie => buildTwoLegTie(tie)).join('')}
                </div>
            </div>
        `;

        // Add connector SVG column between phases (not after the last one)
        if (phaseIdx < phases.length - 1) {
            const nextCount = phases[phaseIdx + 1].ties.length;
            // Each pair in current phase maps to one in next
            const pairsPerNext = tieCount / nextCount;
            let svgLines = '';
            for (let i = 0; i < nextCount; i++) {
                // top and bottom source ties
                const topIdx = i * pairsPerNext;
                const botIdx = i * pairsPerNext + pairsPerNext - 1;
                // Normalized y positions (0–1)
                const yTop = (topIdx + 0.5) / tieCount;
                const yBot = (botIdx + 0.5) / tieCount;
                const yMid = (yTop + yBot) / 2;

                const top = yTop * 100;
                const bot = yBot * 100;
                const mid = yMid * 100;

                svgLines += `
                    <!-- Path from Top Tie -->
                    <path class="connector-path" d="M 0,${top} L 15,${top} L 15,${mid} L 30,${mid}" />
                    <!-- Path from Bottom Tie -->
                    <path class="connector-path" d="M 0,${bot} L 15,${bot} L 15,${mid}" />
                `;
            }

            html += `
                <div class="bracket-connector">
                    <div class="bracket-phase__label" style="border-bottom:none;">&nbsp;</div>
                    <svg viewBox="0 0 30 100" preserveAspectRatio="none" style="width:40px;height:100%;min-height:${baseHeight}px;">
                        ${svgLines}
                    </svg>
                </div>
            `;
        }
    });

    // Final column
    html += `
            <div class="bracket-connector">
                <div class="bracket-phase__label" style="border-bottom:none;">&nbsp;</div>
                <svg viewBox="0 0 30 100" preserveAspectRatio="none" style="width:40px;height:100%;min-height:${baseHeight}px;">
                    <path class="connector-path final-path" d="M 0,25 L 15,25 L 15,75 L 0,75 M 15,50 L 30,50" />
                </svg>
            </div>
            <div class="bracket-phase bracket-phase--final">
                <div class="bracket-phase__label">⭐ Final</div>
                <div class="bracket-phase__ties">
                    ${buildFinalTie(ko.final)}
                </div>
            </div>
        </div><!-- .bracket-phases -->
    </div><!-- .bracket-scroll -->
    `;

    container.innerHTML = html;
}

function buildFinalTie(tie) {
    const getSlug = (n) => n.toLowerCase().split(' (')[0].replace(/\s+/g, '-').replace(/\./g, '');
    const homeStatus = tie.winner === 'home' ? 'winner' : 'loser';
    const awayStatus = tie.winner === 'away' ? 'winner' : 'loser';

    let homePens = '';
    let awayPens = '';
    if (tie.pens) {
        const parts = tie.pens.split('–');
        homePens = `<span class="bracket-pens">(${parts[0].trim()})</span>`;
        awayPens = `<span class="bracket-pens">(${parts[1].trim()})</span>`;
    }

    return `
        <div class="bracket-card bracket-card--final">
            <div class="bracket-row status-${homeStatus}">
                <img src="${tie.home.badge}" class="bracket-badge" alt="">
                <a href="../../../../football/clubs/${getSlug(tie.home.name)}.html" class="bracket-name">${tie.home.name}</a>
                <span class="bracket-score-cell">-</span>
                <span class="bracket-score-cell">-</span>
                <span class="bracket-agg-cell">${tie.homeScore} ${homePens}</span>
            </div>
            <div class="bracket-row status-${awayStatus}">
                <img src="${tie.away.badge}" class="bracket-badge" alt="">
                <a href="../../../../football/clubs/${getSlug(tie.away.name)}.html" class="bracket-name">${tie.away.name}</a>
                <span class="bracket-score-cell">-</span>
                <span class="bracket-score-cell">-</span>
                <span class="bracket-agg-cell">${tie.awayScore} ${awayPens}</span>
            </div>
        </div>
    `;
}

function renderPlayerStats() {
    const container = document.getElementById('player-stats-container');
    if (!container) return;

    let html = '<div class="stats-card"><h4>Top Scorers</h4><div class="stats-list">';
    uclData2425.playerStats.scorers.forEach(p => {
        html += `
            <div class="stat-row">
                <span class="stat-label"><strong>${p.name}</strong> <small>${p.team}</small></span>
                <span class="stat-value">${p.goals} Goals</span>
            </div>`;
    });
    html += '</div></div>';
    container.innerHTML = html;
}

function renderTeamStats() {
    const container = document.getElementById('team-stats-container');
    if (!container) return;

    let html = '<h4>Possession Leaders</h4>';
    uclData2425.teamStats.forEach(t => {
        html += `<div class="stat-row"><span class="stat-label">${t.team}</span><span class="stat-value">${t.possession}</span></div>`;
    });
    container.innerHTML = html;
}