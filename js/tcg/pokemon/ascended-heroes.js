// Ascended Heroes set page JavaScript

let currentView = 'grid';
let cardsData = [];

document.addEventListener('DOMContentLoaded', function() {
    initializeSetPage();
});

function initializeSetPage() {
    loadCardsData();
    renderCards();
    setupSearch();
    setupSort();
    switchView('grid');
}

// Generate cards data (1-295)
function generateCardsData() {
    const cards = [];
    
    // Card data structure - you'll fill these with actual names, rarities, and artists
const cardDatabase = {
    1: {name: "Erika's Oddish", rarity: "Common", artist: "Yoriyuki Ikegami"},
    2: {name: "Erika's Gloom", rarity: "Uncommon", artist: "MARINA Chikazawa"},
    3: {name: "Erika's Vileplume ex", rarity: "Double Rare", artist: "5ban Graphics"},
    4: {name: "Erika's Bellsprout", rarity: "Common", artist: "sui"},
    5: {name: "Erika's Weepinbell", rarity: "Uncommon", artist: "LINNE"},
    6: {name: "Erika's Victreebel", rarity: "Rare", artist: "takashi shiraishi"},
    7: {name: "Erika's Tangela", rarity: "Common", artist: "GIDORA"},
    8: {name: "Chikorita", rarity: "Common", artist: "Kariya"},
    9: {name: "Bayleef", rarity: "Uncommon", artist: "Tomomi Ozaki"},
    10: {name: "Mega Meganium ex", rarity: "Double Rare", artist: "5ban Graphics"},
    11: {name: "Wurmple", rarity: "Common", artist: "USGMEN"},
    12: {name: "Silcoon", rarity: "Common", artist: "Eri Yamaki"},
    13: {name: "Beautifly", rarity: "Uncommon", artist: "Narumi Sato"},
    14: {name: "Cascoon", rarity: "Common", artist: "Dsuke"},
    15: {name: "Dustox", rarity: "Uncommon", artist: "kamonabe"},
    16: {name: "Budew", rarity: "Common", artist: "Yoriyuki Ikegami"},
    17: {name: "Grubbin", rarity: "Common", artist: "Jerky"},
    18: {name: "Team Rocket's Tarountula", rarity: "Common", artist: "Saboteri"},
    19: {name: "Team Rocket's Spidops", rarity: "Rare", artist: "Taiga Kasai"},
    20: {name: "Charmander", rarity: "Common", artist: "Orca"},
    21: {name: "Charmeleon", rarity: "Uncommon", artist: "Julie Hang"},
    22: {name: "Mega Charizard Y ex", rarity: "Double Rare", artist: "aky CG Works"},
    23: {name: "Ethan's Slugma", rarity: "Common", artist: "Sanosuke Sakuma"},
    24: {name: "Ethan's Magcargo", rarity: "Rare", artist: "kodama"},
    25: {name: "Entei", rarity: "Rare", artist: "Kazumasa Yasukuni"},
    26: {name: "Ethan's Ho-Oh ex", rarity: "Double Rare", artist: "aky CG Works"},
    27: {name: "Numel", rarity: "Common", artist: "Ounishi"},
    28: {name: "Camerupt", rarity: "Uncommon", artist: "Minahamu"},
    29: {name: "Tepig", rarity: "Common", artist: "Uninori"},
    30: {name: "Pignite", rarity: "Uncommon", artist: "Aliya Chen"},
    31: {name: "Mega Emboar ex", rarity: "Double Rare", artist: "5ban Graphics"},
    32: {name: "N's Darumaka", rarity: "Common", artist: "Gemi"},
    33: {name: "N's Darmanitan", rarity: "Uncommon", artist: "nagimiso"},
    34: {name: "Salandit", rarity: "Common", artist: "Felicia Chen"},
    35: {name: "Salazzle", rarity: "Uncommon", artist: "Taiga Kasai"},
    36: {name: "Scorbunny", rarity: "Common", artist: "Cona Nitanda"},
    37: {name: "Raboot", rarity: "Common", artist: "aspara"},
    38: {name: "Cinderace ex", rarity: "Double Rare", artist: "5ban Graphics"},
    39: {name: "Psyduck", rarity: "Common", artist: "Jiro Sasumo"},
    40: {name: "Golduck", rarity: "Uncommon", artist: "Jiro Sasumo"},
    41: {name: "Totodile", rarity: "Common", artist: "REND"},
    42: {name: "Croconaw", rarity: "Uncommon", artist: "Felicia Chen"},
    43: {name: "Mega Feraligatr ex", rarity: "Double Rare", artist: "5ban Graphics"},
    44: {name: "Sneasel", rarity: "Common", artist: "Krgc"},
    45: {name: "Weavile", rarity: "Uncommon", artist: "aspara"},
    46: {name: "Snorunt", rarity: "Common", artist: "Wintr Wandr"},
    47: {name: "Mega Froslass ex", rarity: "Double Rare", artist: "5ban Graphics"},
    48: {name: "Regice ex", rarity: "Double Rare", artist: "akagi"},
    49: {name: "N's Vanillite", rarity: "Common", artist: "yuu"},
    50: {name: "N's Vanillish", rarity: "Common", artist: "kirisAki"},
    51: {name: "N's Vanilluxe", rarity: "Uncommon", artist: "imonii"},
    52: {name: "Snom", rarity: "Common", artist: "Izucch"},
    53: {name: "Frosmoth", rarity: "Uncommon", artist: "cochi8i"},
    54: {name: "Glastrier", rarity: "Uncommon", artist: "mashu"},
    55: {name: "Pikachu", rarity: "Common", artist: "kamonabe"},
    56: {name: "Raichu", rarity: "Uncommon", artist: "Iori Suzuki"},
    57: {name: "Pikachu ex", rarity: "Double Rare", artist: "aky CG Works"},
    58: {name: "Voltorb ex", rarity: "Double Rare", artist: "5ban Graphics"},
    59: {name: "Tynamo", rarity: "Common", artist: "Jerky"},
    60: {name: "Eelektrik", rarity: "Uncommon", artist: "Jerky"},
    61: {name: "Mega Elektross ex", rarity: "Double Rare", artist: "takuyoa"},
    62: {name: "Stunfisk", rarity: "Common", artist: "Tetsu Kayama"},
    63: {name: "Helioptile", rarity: "Common", artist: "Tika Matsuno"},
    64: {name: "Heliolisk", rarity: "Uncommon", artist: "svlt"},
    65: {name: "Charjabug", rarity: "Common", artist: "Misa Tsutsui"},
    66: {name: "Vikavolt", rarity: "Uncommon", artist: "Shiburingaru"},
    67: {name: "Tapu Koko", rarity: "Rare", artist: "Anesaki Dynamic"},
    68: {name: "Hop's Pincurchin ex", rarity: "Double Rare", artist: "5ban Graphics"},
    69: {name: "Iono's Tadbulb", rarity: "Common", artist: "kurumitsu"},
    70: {name: "Iono's Bellibolt ex", rarity: "Double Rare", artist: "5ban Graphics"},
    71: {name: "Iono's Wattrel", rarity: "Common", artist: "Akira Komayama"},
    72: {name: "Iono's Kilowattrel", rarity: "Rare", artist: "chibi"},
    73: {name: "Miraidon ex", rarity: "Double Rare", artist: "5ban Graphics"},
    74: {name: "Clefairy", rarity: "Common", artist: "satoma"},
    75: {name: "Clefable", rarity: "Uncommon", artist: "satoma"},
    76: {name: "Lillie's Clefairy ex", rarity: "Double Rare", artist: "5ban Graphics"},
    77: {name: "Team Rocket's Exeggcute", rarity: "Common", artist: "Gapao"},
    78: {name: "Team Rocket's Exeggutor", rarity: "Rare", artist: "Ryuta Fuse"},
    79: {name: "Team Rocket's Mewtwo ex", rarity: "Double Rare", artist: "aky CG Works"},
    80: {name: "Togepi", rarity: "Common", artist: "Yoko Hishida"},
    81: {name: "Togetic", rarity: "Common", artist: "Teeziro"},
    82: {name: "Togekiss", rarity: "Rare", artist: "Narano"},
    83: {name: "Marill", rarity: "Common", artist: "Yoshimoto Yoshimon"},
    84: {name: "Azumarill ex", rarity: "Double Rare", artist: "5ban Graphics"},
    85: {name: "Misdreavus", rarity: "Common", artist: "Kazuhisa Uragami"},
    86: {name: "Mismagius", rarity: "Rare", artist: "nisimono"},
    87: {name: "Ralts", rarity: "Common", artist: "Terada Tera"},
    88: {name: "Kirlia", rarity: "Common", artist: "satoma"},
    89: {name: "Mega Gardevoir ex", rarity: "Double Rare", artist: "takuyoa"},
    90: {name: "Shuppet", rarity: "Common", artist: "miki kudo"},
    91: {name: "Banette", rarity: "Uncommon", artist: "Anesaki Dynamic"},
    92: {name: "Rotom", rarity: "Common", artist: "mingo"},
    93: {name: "Swirlix", rarity: "Common", artist: "Saya Tsuruta"},
    94: {name: "Slurpuff", rarity: "Uncommon", artist: "Natsumi Yoshida"},
    95: {name: "Hop's Phantump", rarity: "Common", artist: "tono"},
    96: {name: "Hop's Trevenant", rarity: "Rare", artist: "matazo"},
    97: {name: "Team Rocket's Mimikyu", rarity: "Uncommon", artist: "DOM"},
    98: {name: "Spectrier", rarity: "Rare", artist: "Taiga Kasai"},
    99: {name: "Munkidori", rarity: "Rare", artist: "kodama"},
    100: {name: "Team Rocket's Diglett", rarity: "Common", artist: "Yuriko Akase"},
    101: {name: "Team Rocket's Dugtrio", rarity: "Uncommon", artist: "KEIICHIRO ITO"},
    102: {name: "Hitmontop", rarity: "Common", artist: "Kouki Saitou"},
    103: {name: "Meditite", rarity: "Common", artist: "Lee HyunJung"},
    104: {name: "Medicham", rarity: "Common", artist: "GIDORA"},
    105: {name: "Lunatone", rarity: "Rare", artist: "Whisker"},
    106: {name: "Solrock", rarity: "Uncommon", artist: "Whisker"},
    107: {name: "Regirock ex", rarity: "Double Rare", artist: "Nisota Niso"},
    108: {name: "Groudon", rarity: "Rare", artist: "Kazumasa Yasukuni"},
    109: {name: "Cynthia's Gible", rarity: "Common", artist: "Tomomi Ozaki"},
    110: {name: "Cynhtia's Gabite", rarity: "Uncommon", artist: "Taira Akitsu"},
    111: {name: "Cynthia's Garchomp ex", rarity: "Double Rare", artist: "5ban Graphics"},
    112: {name: "Riolu", rarity: "Common", artist: "hncl"},
    113: {name: "Mega Lucario ex", rarity: "Double Rare", artist: "5ban Graphics"},
    114: {name: "Stunfisk ex", rarity: "Double Rare", artist: "5ban Graphics"},
    115: {name: "Pancham", rarity: "Common", artist: "Minato"},
    116: {name: "Mega Hawlucha ex", rarity: "Double Rare", artist: "5ban Graphics"},
    117: {name: "Carbink", rarity: "Uncommon", artist: "Eri Kamei"},
    118: {name: "Rolycoly", rarity: "Common", artist: "Kurata So"},
    119: {name: "Carkol", rarity: "Common", artist: "Apios"},
    120: {name: "Coalossal", rarity: "Rare", artist: "Nisota Niso"},
    121: {name: "Koraidon ex", rarity: "Double Rare", artist: "aky CG Works"},
    122: {name: "Okidogi", rarity: "Rare", artist: "Mitsuhiro Arita"},
    123: {name: "Gastly", rarity: "Common", artist: "Saboteri"},
    124: {name: "Haunter", rarity: "Uncommon", artist: "Rianti Hidayat"},
    125: {name: "Mega Gengar ex", rarity: "Double Rare", artist: "5ban Graphics"},
    126: {name: "Team Rocket's Murkrow", rarity: "Common", artist: "Mugi Hamada"},
    127: {name: "Team Rocket's Honchkrow", rarity: "Rare", artist: "hncl"},
    128: {name: "Poocheyna", rarity: "Common", artist: "Miki Tanaka"},
    129: {name: "Mightyena", rarity: "Uncommon", artist: "akagi"},
    130: {name: "Galarian Zigzagoon", rarity: "Common", artist: "osare"},
    131: {name: "Galarian Linoone", rarity: "Common", artist: "Tomowaka"},
    132: {name: "Galarian Obstagoon", rarity: "Uncommon", artist: "Dsuke"},
    133: {name: "Cynthia's Spiritomb", rarity: "Uncommon", artist: "satoma"},
    134: {name: "Scraggy", rarity: "Common", artist: "Shimaris Yukichi"},
    135: {name: "Mega Scrafty ex", rarity: "Double Rare", artist: "5ban Graphics"},
    136: {name: "N's Zorua", rarity: "Common", artist: "Jiro Sasumo"},
    137: {name: "N's Zoroark ex", rarity: "Double Rare", artist: "takuyoa"},
    138: {name: "Vullaby", rarity: "Common", artist: "Nisota Niso"},
    139: {name: "Mandibuzz ex", rarity: "Double Rare", artist: "Ultimateinudog"},
    140: {name: "Pangoro", rarity: "Uncommon", artist: "takashi shiraishi"},
    141: {name: "Hoopa", rarity: "Rare", artist: "Anesaki Dynamic"},
    142: {name: "Fezandipiti ex", rarity: "Double Rare", artist: "takuyoa"},
    143: {name: "Pecharunt", rarity: "Rare", artist: "IKEDA Saki"},
    144: {name: "Mawile", rarity: "Uncommon", artist: "CHORISO"},
    145: {name: "Registeel ex", rarity: "Double Rare", artist: "toriyufu"},
    146: {name: "Pawniard", rarity: "Common", artist: "Yuya Oka"},
    147: {name: "Bisharp", rarity: "Common", artist: "Scav"},
    148: {name: "Kingambit", rarity: "Rare", artist: "Teeziro"},
    149: {name: "Togedemaru ex", rarity: "Double Rare", artist: "5ban Graphics"},
    150: {name: "Dratini", rarity: "Common", artist: "HYOGONOSUKE"},
    151: {name: "Dragonair", rarity: "Uncommon", artist: "Gemi"},
    152: {name: "Mega Dragonite ex", rarity: "Double Rare", artist: "aky CG Works"},
    153: {name: "Rayquaza", rarity: "Rare", artist: "nagimiso"},
    154: {name: "N's Reshiram", rarity: "Rare", artist: "rika"},
    155: {name: "N's Zekrom", rarity: "Rare", artist: "AKIRA EGAWA"},
    156: {name: "Noibat", rarity: "Common", artist: "Eri Kamei"},
    157: {name: "Noivern", rarity: "Uncommon", artist: "Natsumi Miyanose"},
    158: {name: "Dreepy", rarity: "Common", artist: "Scav"},
    159: {name: "Drakloak", rarity: "Common", artist: "cochi8i"},
    160: {name: "Dragapult ex", rarity: "Double Rare", artist: "5ban Graphics"},
    161: {name: "Team Rocket's Meowth", rarity: "Common", artist: "Megumi Mizutani"},
    162: {name: "Team Rocket's Kangaskhan", rarity: "Double Rare", artist: "5ban Graphics"},
    163: {name: "Larry's Dunsparce", rarity: "Common", artist: "0313"},
    164: {name: "Larry's Dudunsparce ex", rarity: "Double Rare", artist: "5ban Graphics"},
    165: {name: "Skitty", rarity: "Common", artist: "Yoko Hishida"},
    166: {name: "Delcatty", rarity: "Uncommon", artist: "buchi"},
    167: {name: "Zangoose ex", rarity: "Double Rare", artist: "5ban Graphics"},
    168: {name: "Larry's Starly", rarity: "Common", artist: "Natsumi Miyanose"},
    169: {name: "Larry's Staravia", rarity: "Uncommon", artist: "Fujimoto Gold"},
    170: {name: "Larry's Staraptor", rarity: "Rare", artist: "Po-Suzuki"},
    171: {name: "Fan Rotom", rarity: "Common", artist: "Toshinao Aoki"},
    172: {name: "Mega Audino ex", rarity: "Double Rare", artist: "5ban Graphics"},
    173: {name: "Larry's Rufflet", rarity: "Common", artist: "cochi8i"},
    174: {name: "Larry's Braviary", rarity: "Uncommon", artist: "Ryuta Fuse"},
    175: {name: "Larry's Komala", rarity: "Common", artist: "ryoma uratsuka"},
    176: {name: "Drampa", rarity: "Uncommon", artist: "Scav"},
    177: {name: "Hop's Cramorant", rarity: "Uncommon", artist: "Saboteri"},
    178: {name: "Terapagos", rarity: "Rare", artist: "GIDORA"},
    179: {name: "Terapagos ex", rarity: "Double Rare", artist: "5ban Graphics"},
    180: {name: "Acerola's Mischief", rarity: "Uncommon", artist: "Yuu Nishida"},
    181: {name: "Air Balloon", rarity: "Uncommon", artist: "Studio Bora Inc."},
    182: {name: "Anthea & Concordia", rarity: "Uncommon", artist: "Sanosuke Sakuma"},
    183: {name: "Boss's Orders", rarity: "Uncommon", artist: "akagi"},
    184: {name: "Buddy-Buddy Poffin", rarity: "Common", artist: "AYUMI ODASHIMA"},
    185: {name: "Canari", rarity: "Uncommon", artist: "Naoki Saito"},
    186: {name: "Counter Gain", rarity: "Common", artist: "Toyste Beach"},
    187: {name: "Fighting Gong", rarity: "Uncommon", artist: "Toyste Beach"},
    188: {name: "Forest of Vitality", rarity: "Uncommon", artist: "AYUMI ODASHIMA"},
    189: {name: "Glass Trumpet", rarity: "Common", artist: "Toyste Beach"},
    190: {name: "Iris's Fighting Spirit", rarity: "Uncommon", artist: "yuu"},
    191: {name: "Light Ball", rarity: "Uncommon", artist: "Studio Bora Inc."},
    192: {name: "Lillie's Determination", rarity: "Uncommon", artist: "Atsushi Furusawa"},
    193: {name: "Mega Signal", rarity: "Common", artist: "inose yukie"},
    194: {name: "Mystery Garden", rarity: "Uncommon", artist: "AYUMI ODASHIMA"},
    195: {name: "N's PP Up", rarity: "Uncommon", artist: "Toyste Beach"},
    196: {name: "Night Stretcher", rarity: "Common", artist: "Toyste Beach"},
    197: {name: "Nighttime Mine", rarity: "Uncommon", artist: "Takashi Yamaguchi"},
    198: {name: "PokÃ© Pad", rarity: "Common", artist: "Studio Bora Inc."},
    199: {name: "Premium Power Pro", rarity: "Uncommon", artist: "Toyste Beach"},
    200: {name: "Surfer", rarity: "Common", artist: "Hideki Ishikawa"},
    201: {name: "Team Rocket's Anchor", rarity: "Uncommon", artist: "Hideki Ishikawa"},
    202: {name: "Team Rocket's Ariana", rarity: "Uncommon", artist: "hncl"},
    203: {name: "Team Rocket's Factory", rarity: "Uncommon", artist: "imoniii"},
    204: {name: "Team Rocket's Giovanni", rarity: "Uncommon", artist: "DOM"},
    205: {name: "Team Rocket's Great Ball", rarity: "Uncommon", artist: "Toyste Beach"},
    206: {name: "Team Rocket's Hypnotizer", rarity: "Uncommon", artist: "Toyste Beach"},
    207: {name: "Team Rocket's Petrel", rarity: "Uncommon", artist: "GOSSAN"},
    208: {name: "Team Rocket's Proton", rarity: "Uncommon", artist: "Naoki Saito"},
    209: {name: "Team Rocket's Transciever", rarity: "Uncommon", artist: "inose yukie"},
    210: {name: "Team Rocket's Watchtower", rarity: "Uncommon", artist: "AYUMI ODASHIMA"},
    211: {name: "Thick Scale", rarity: "Uncommon", artist: "Toyste Beach"},
    212: {name: "Tool Scrapper", rarity: "Common", artist: "Studio Bora Inc."},
    213: {name: "Ultra Ball", rarity: "Common", artist: "Ayaka Yoshida"},
    214: {name: "Urbain", rarity: "Uncommon", artist: "Teeziro"},
    215: {name: "Waitress", rarity: "Common", artist: "Cona Nitanda"},
    216: {name: "Prism Energy", rarity: "Uncommon", artist: "-"},
    217: {name: "Team Rocket's Energy", rarity: "Uncommon", artist: "-"},
    218: {name: "Erika's Tangela", rarity: "Illustration Rare", artist: "buchi"},
    219: {name: "Beautifly", rarity: "Illustration Rare", artist: "Mori Yuu"},
    220: {name: "Dustox", rarity: "Illustration Rare", artist: "IKEDA Saki"},
    221: {name: "Budew", rarity: "Illustration Rare", artist: "Yoko Hishida"},
    222: {name: "Ethan's Magcargo", rarity: "Illustration Rare", artist: "Hideki Ishikawa"},
    223: {name: "Numel", rarity: "Illustration Rare", artist: "Yoshimi Miyoshi"},
    224: {name: "Salazzle", rarity: "Illustration Rare", artist: "Dsuke"},
    225: {name: "Scorbunny", rarity: "Illustration Rare", artist: "Yuu Nishida"},
    226: {name: "Psyduck", rarity: "Illustration Rare", artist: "REND"},
    227: {name: "Snorunt", rarity: "Illustration Rare", artist: "Dsuke"},
    228: {name: "Weavile", rarity: "Illustration Rare", artist: "Uninori"},
    229: {name: "Heliolisk", rarity: "Illustration Rare", artist: "Takeshi Nakamura"},
    230: {name: "Vikavolt", rarity: "Illustration Rare", artist: "Tonji Matsuno"},
    231: {name: "Iono's Wattrel", rarity: "Illustration Rare", artist: "mingo"},
    232: {name: "Marill", rarity: "Illustration Rare", artist: "Rond"},
    233: {name: "Misdreavus", rarity: "Illustration Rare", artist: "mashu"},
    234: {name: "Banette", rarity: "Illustration Rare", artist: "YASHIRO Nanaco"},
    235: {name: "Togekiss", rarity: "Illustration Rare", artist: "satoma"},
    236: {name: "Slurpuff", rarity: "Illustration Rare", artist: "Yoshimoto Yoshimon"},
    237: {name: "Hop's Trevenant", rarity: "Illustration Rare", artist: "Tomowaka"},
    238: {name: "Team Rocket's Mimikyu", rarity: "Illustration Rare", artist: "GOSSAN"},
    239: {name: "Team Rocket's Dugtrio", rarity: "Illustration Rare", artist: "Whisker"},
    240: {name: "Hitmontop", rarity: "Illustration Rare", artist: "osare"},
    241: {name: "Medicham", rarity: "Illustration Rare", artist: "KEIICHIRO ITO"},
    242: {name: "Carbink", rarity: "Illustration Rare", artist: "sui"},
    243: {name: "Mightyena", rarity: "Illustration Rare", artist: "Yano Keiji"},
    244: {name: "Cynthia's Spiritomb", rarity: "Illustration Rare", artist: "hncl"},
    245: {name: "Galarian Obstagoon", rarity: "Illustration Rare", artist: "Krgc"},
    246: {name: "Mawile", rarity: "Illustration Rare", artist: "sowsow"},
    247: {name: "Dreepy", rarity: "Illustration Rare", artist: "Jerky"},
    248: {name: "Drakloak", rarity: "Illustration Rare", artist: "Jerky"},
    249: {name: "Larry's Staraptor", rarity: "Illustration Rare", artist: "kantaro"},
    250: {name: "Fan Rotom", rarity: "Illustration Rare", artist: "Yukihiro Tada"},
    251: {name: "Sprigatito ex", rarity: "Ultra Rare", artist: "5ban Graphics"},
    252: {name: "Stunfisk ex", rarity: "Ultra Rare", artist: "5ban Graphics"},
    253: {name: "Mega Audino ex", rarity: "Ultra Rare", artist: "5ban Graphics"},
    254: {name: "Anthea & Concordia", rarity: "Ultra Rare", artist: "Sanosuke Sakuma"},
    255: {name: "Black Belt's Training", rarity: "Ultra Rare", artist: "GOSSAN"},
    256: {name: "Boss's Orders", rarity: "Ultra Rare", artist: "akagi"},
    257: {name: "Canari", rarity: "Ultra Rare", artist: "Naoki Saito"},
    258: {name: "Cheren", rarity: "Ultra Rare", artist: "REND"},
    259: {name: "Counter Gain", rarity: "Ultra Rare", artist: "Toyste Beach"},
    260: {name: "Glass Trumpet", rarity: "Ultra Rare", artist: "Toyste Beach"},
    261: {name: "Jamming Tower", rarity: "Ultra Rare", artist: "AYUMI ODASHIMA"},
    262: {name: "N's PP Up", rarity: "Ultra Rare", artist: "Toyste Beach"},
    263: {name: "Team Rocket's Transceiver", rarity: "Ultra Rare", artist: "inose yukie"},
    264: {name: "Ultra Ball", rarity: "Ultra Rare", artist: "Studio Bora Inc."},
    265: {name: "Mega Froslass ex", rarity: "Mega Attack Rare", artist: "Saboteri"},
    266: {name: "Mega Elektross ex", rarity: "Mega Attack Rare", artist: "DOM"},
    267: {name: "Mega Diancie ex", rarity: "Mega Attack Rare", artist: "DOM"},
    268: {name: "Mega Hawlucha ex", rarity: "Mega Attack Rare", artist: "Taiga Kasai"},
    269: {name: "Mega Gengar ex", rarity: "Mega Attack Rare", artist: "Taiga Kasai"},
    270: {name: "Mega Scrafty ex", rarity: "Mega Attack Rare", artist: "Taiga Kasai"},
    271: {name: "Mega Dragonite ex", rarity: "Mega Attack Rare", artist: "DOM"},
    272: {name: "Mega Meganium ex", rarity: "Special Illustration Rare", artist: "Tika Matsuno"},
    273: {name: "Mega Emboar ex", rarity: "Special Illustration Rare", artist: "nagimiso"},
    274: {name: "Mega Feraligatr ex", rarity: "Special Illustration Rare", artist: "Souichirou Gunjima"},
    275: {name: "Mega Froslass ex", rarity: "Special Illustration Rare", artist: "Teeziro"},
    276: {name: "Pikachu ex", rarity: "Special Illustration Rare", artist: "booota"},
    277: {name: "Pikachu ex", rarity: "Special Illustration Rare", artist: "James Turner"},
    278: {name: "Mega Eelektross ex", rarity: "Special Illustration Rare", artist: "akagi"},
    279: {name: "Iono's Bellibolt ex", rarity: "Special Illustration Rare", artist: "Akira Komayama"},
    280: {name: "Lillie's Clefairy ex", rarity: "Special Illustration Rare", artist: "Naoki Saito"},
    281: {name: "Team Rocket's Mewtwo ex", rarity: "Special Illustration Rare", artist: "Mitsuhiro Arita"},
    282: {name: "Mega Diancie ex", rarity: "Special Illustration Rare", artist: "Narano"},
    283: {name: "Mega Hawlucha ex", rarity: "Special Illustration Rare", artist: "AKIRA EGAWA"},
    284: {name: "Mega Gengar ex", rarity: "Special Illustration Rare", artist: "danciao"},
    285: {name: "Mega Scrafty ex", rarity: "Special Illustration Rare", artist: "nagimiso"},
    286: {name: "N's Zoroark ex", rarity: "Special Illustration Rare", artist: "Raita Kazama"},
    287: {name: "Marnie's Grimmsnarl ex", rarity: "Special Illustration Rare", artist: "Ligton"},
    288: {name: "Fezandipiti ex", rarity: "Special Illustration Rare", artist: "SIE NANAHARA"},
    289: {name: "Steven's Metagross ex", rarity: "Special Illustration Rare", artist: "chibi"},
    290: {name: "Mega Dragonite ex", rarity: "Special Illustration Rare", artist: "DOM"},
    291: {name: "Canari", rarity: "Special Illustration Rare", artist: "kantaro"},
    292: {name: "Iris's Fighting Spirit", rarity: "Special Illustration Rare", artist: "Kuroimori"},
    293: {name: "Surfer", rarity: "Special Illustration Rare", artist: "OKUBO"},
    294: {name: "Mega Charizard Y ex", rarity: "Mega Hyper Rare", artist: "aky CG Works"},
    295: {name: "Mega Dragonite ex", rarity: "Mega Hyper Rare", artist: "aky CG Works"},
};
    
    // Regular cards (1-217)
    for (let i = 1; i <= 217; i++) {
        const cardInfo = cardDatabase[i] || {
            name: `Card ${i}`,
            rarity: "Common",
            artist: "Unknown"
        };
        
        cards.push({
            number: i,
            name: cardInfo.name,
            rarity: cardInfo.rarity,
            artist: cardInfo.artist,
            image: `ASC_${String(i).padStart(3, '0')}.webp`,
            url: `asc-${String(i).padStart(3, '0')}.html`,
            isSecret: false
        });
    }
    
    // Secret cards (218-295)
    for (let i = 218; i <= 295; i++) {
        const cardInfo = cardDatabase[i] || {
            name: `Secret Card ${i}`,
            rarity: "Secret Rare",
            artist: "Unknown"
        };
        
        cards.push({
            number: i,
            name: cardInfo.name,
            rarity: cardInfo.rarity,
            artist: cardInfo.artist,
            image: `ASC_${String(i).padStart(3, '0')}.webp`,
            url: `asc-${String(i).padStart(3, '0')}.html`,
            isSecret: true
        });
    }
    
    return cards;
}

// Load cards data
function loadCardsData() {
    cardsData = generateCardsData();
}

// Render all cards to the page
function renderCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    cardsData.forEach(card => {
        const cardElement = createCardElement(card);
        container.appendChild(cardElement);
    });
}

// Create a card HTML element
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-item';
    cardDiv.dataset.number = card.number;
    cardDiv.dataset.name = card.name;
    cardDiv.dataset.rarity = card.rarity;
    cardDiv.dataset.artist = card.artist;
    cardDiv.onclick = () => navigateTo(card.url);
    
    cardDiv.innerHTML = `
        <div class="card-image">
            <img src="../../../images/sets/pokemon/ascended-heroes/${card.image}" 
                 alt="${card.name}" 
                 class="card-img"
                 onerror="this.src='../../../images/cards/placeholder.webp'">
        </div>
        <div class="card-info">
            <div class="card-number">#${String(card.number).padStart(3, '0')}</div>
            <h4 class="card-name">${card.name}</h4>
            <div class="card-meta">
                <div class="meta-row">
                    <span class="meta-label">Rarity:</span>
                    <span class="rarity-badge ${getRarityClass(card.rarity)}" title="${card.rarity}">${getRarityDisplayText(card.rarity)}</span>
                </div>
                <div class="meta-row">
                    <span class="meta-label">Artist:</span>
                    <span class="meta-value">${card.artist}</span>
                </div>
            </div>
        </div>
    `;
    
    return cardDiv;
}

// Get display text for rarity (abbreviated in grid view)
function getRarityDisplayText(rarity) {
    if (rarity === "Special Illustration Rare") {
        return "SIR";
    }
    return rarity;
}

// Get CSS class for rarity badge
function getRarityClass(rarity) {
    // Convert rarity name to CSS class
    return 'rarity-' + rarity.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\./g, '');
}

// Switch between grid and list view
function switchView(view) {
    currentView = view;
    const container = document.getElementById('cardsContainer');
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (view === 'grid') {
        container.className = 'cards-grid';
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    } else {
        container.className = 'cards-list';
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    }
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('cardSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            filterCards(query);
        });
    }
}

// Filter cards based on search
function filterCards(query) {
    const cards = document.querySelectorAll('.card-item');
    
    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const number = card.dataset.number;
        const rarity = card.dataset.rarity.toLowerCase();
        const artist = card.dataset.artist.toLowerCase();
        
        if (name.includes(query) || number.includes(query) || rarity.includes(query) || artist.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Setup sort functionality
function setupSort() {
    const sortSelect = document.getElementById('sortBy');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortType = e.target.value;
            sortCards(sortType);
        });
    }
}

// Sort cards
function sortCards(sortType) {
    const container = document.getElementById('cardsContainer');
    const cards = Array.from(container.querySelectorAll('.card-item'));
    
    cards.sort((a, b) => {
        switch(sortType) {
            case 'number':
                return parseInt(a.dataset.number) - parseInt(b.dataset.number);
            case 'name':
                return a.dataset.name.localeCompare(b.dataset.name);
            case 'rarity':
                return a.dataset.rarity.localeCompare(b.dataset.rarity);
            case 'artist':
                return a.dataset.artist.localeCompare(b.dataset.artist);
            default:
                return 0;
        }
    });
    
    // Re-append sorted cards
    cards.forEach(card => container.appendChild(card));
}

console.log('âš¡ Ascended Heroes set page loaded');