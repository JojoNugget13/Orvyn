const heroes = [
  {
    name: "Miya",
    title: "the Moonlight Archer",
    icon: "images/games/mlbb/heroes/icons/miya-moonlight-archer-icon.webp",
    order: 1,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"},
    ],
    region: "Azrya Woodlands",
    price: [
      {type: "bp", value: "10.8k"},
      {type: "ticket", value: "399"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Balmond",
    title: "the Bloody Beast",
    icon: "images/games/mlbb/heroes/icons/balmond-bloody-beast-icon.webp",
    order: 2,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Damage", "Regen"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "6.5k"},
        {type: "diamond", value: "299"},
    ],
    release: "July 14, 2016"
  },
  {
    name: "Saber",
    title: "the Wandering Sword",
    icon: "images/games/mlbb/heroes/icons/saber-wandering-sword-icon.webp",
    order: 3,
    roles: [
        {key: "assassin", label: "Assassin"},
    ],
    specialties: ["Charge", "Finisher"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Laboratory 1718",
    price: [
        {type: "bp", value: "6.5k"},
        {type: "diamond", value: "299"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Alice",
    title: "the Queen of Blood",
    icon: "images/games/mlbb/heroes/icons/alice-queen-of-blood-icon.webp",
    order: 4,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "mage", label :"Mage"}
    ],
    specialties: ["Charge", "Regen"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "jungle", label: "Jungle"},
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "15k"},
        {type: "diamond", value: "399"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Nana",
    title: "the Sweet Leonin",
    icon: "images/games/mlbb/heroes/icons/nana-sweet-leonin-icon.webp",
    order: 5,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Poke", "Burst"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Azrya Woodlands",
    price: [
        {type: "bp", value: "6.5k"},
        {type: "diamond", value: "299"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Tigreal",
    title: "the Warrior of Dawn",
    icon: "images/games/mlbb/heroes/icons/tigreal-warrior-of-dawn-icon.webp",
    order: 6,
    roles: [
        {key: "tank", label: "Tank"},
    ],
    specialties: ["Crowd Control"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "6.5k"},
        {type: "diamond", value: "299"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Alucard",
    title: "the Demon Hunter",
    icon: "images/games/mlbb/heroes/icons/alucard-demon-hunter-icon.webp",
    order: 7,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "15k"},
        {type: "ticket", value: "399"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Karina",
    title: "the Shadow Blade",
    icon: "images/games/mlbb/heroes/icons/karina-shadow-blade-icon.webp",
    order: 8,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Finisher", "Magic Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Azrya Woodlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Akai",
    title: "the Panda Warrior",
    icon: "images/games/mlbb/heroes/icons/akai-panda-warrior-icon.webp",
    order: 9,
    roles: [
        {key: "tank", label: "Tank"},
    ],
    specialties: ["Guard", "Crowd Control"],
    lanes: [
        {key: "roam", label: "Roaming"},
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "ticket", value: "599"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Franco",
    title: "the Frozen Warrior",
    icon: "images/games/mlbb/heroes/icons/franco-frozen-warrior-icon.webp",
    order: 10,
    roles: [
        {key: "tank", label: "Tank"},
    ],
    specialties: ["Initiator", "Control"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "32k"},
        {type: "ticket", value: "749"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Bane",
    title: "the Frozen King",
    icon: "images/games/mlbb/heroes/icons/bane-frozen-king-icon.webp",
    order: 11,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Push", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "6.5k"},
        {type: "diamond", value: "299"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Bruno",
    title: "the Protector",
    icon: "images/games/mlbb/heroes/icons/bruno-protector-icon.webp",
    order: 12,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Burst"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "15k"},
        {type: "diamond", value: "399"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Clint",
    title: "the West Justice",
    icon: "images/games/mlbb/heroes/icons/clint-west-justice-icon.webp",
    order: 13,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Burst"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "15k"},
        {type: "diamond", value: "399"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Rafaela",
    title: "the Wings of Holiness",
    icon: "images/games/mlbb/heroes/icons/rafaela-wings-of-holiness-icon.webp",
    order: 14,
    roles: [
        {key: "support", label: "Support"}
    ],
    specialties: ["Regen", "Guard"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "6.5k"},
        {type: "diamond", value: "299"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Eudora",
    title: "the Lightning Weaver",
    icon: "images/games/mlbb/heroes/icons/eudora-lightning-weaver-icon.webp",
    order: 15,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Control", "Burst"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "2k"},
        {type: "diamond", value: "399"}
    ],
    release: "July 14, 2016"
  },
  {
    name: "Zilong",
    title: "the Spear of Dragon",
    icon: "images/games/mlbb/heroes/icons/zilong-spear-of-dragon-icon.webp",
    order: 16,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "15k"},
        {type: "ticket", value: "399"}
    ],
    release: "September 9, 2016"
  },
  {
    name: "Fanny",
    title: "the Blade Dancer",
    icon: "images/games/mlbb/heroes/icons/fanny-blade-dancer-icon.webp",
    order: 17,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Finisher"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "September 30, 2016"
  },
  {
    name: "Layla",
    title: "the Energy Gunner",
    icon: "images/games/mlbb/heroes/icons/layla-energy-gunner-icon.webp",
    order: 18,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "2k"},
        {type: "diamond", value: "299"}
    ],
    release: "September 23, 2016"
  },
  {
    name: "Minotaur",
    title: "the Son of Minos",
    icon: "images/games/mlbb/heroes/icons/minotaur-son-of-minos-icon.webp",
    order: 19,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "support", label: "Support"}
    ],
    specialties: ["Crowd Control"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "15k"},
        {type: "diamond", value: "399"}
    ],
    release: "October 14, 2016"
  },
  {
    name: "Lolita",
    title: "the Steel Elf",
    icon: "images/games/mlbb/heroes/icons/lolita-steel-elf-icon.webp",
    order: 20,
    roles: [
        {key: "support", label: "Support"},
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Guard", "Crowd Control"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "October 28, 2016"
  },
  {
    name: "Hayabusa",
    title: "the Crimson Shadow",
    icon: "images/games/mlbb/heroes/icons/hayabusa-crimson-shadow-icon.webp",
    order: 21,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 4, 2016"
  },
  {
    name: "Freya",
    title: "the Valkyrie",
    icon: "images/games/mlbb/heroes/icons/freya-valkyrie-icon.webp",
    order: 22,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "diamond", value: "299"}
    ],
    release: "November 2016"
  },
  {
    name: "Gord",
    title: "the Professor of the Mystics",
    icon: "images/games/mlbb/heroes/icons/gord-professor-of-the-mystics-icon.webp",
    order: 23,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Poke", "Burst"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "November 2016"
  },
  {
    name: "Natalia",
    title: "the Bright Claw",
    icon: "images/games/mlbb/heroes/icons/natalia-bright-claw-icon.webp",
    order: 24,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Finisher"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 2016"
  },
  {
    name: "Kagura",
    title: "the Onmyouji Master",
    icon: "images/games/mlbb/heroes/icons/kagura-onmyouji-master-icon.webp",
    order: 25,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Poke", "Finisher"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 2016"
  },
  {
    name: "Chou",
    title: "the Kung Fu Boy",
    icon: "images/games/mlbb/heroes/icons/chou-kung-fu-boy-icon.webp",
    order: 26,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Control"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "December 2016"
  },
  {
    name: "Sun",
    title: "the Monkey King",
    icon: "images/games/mlbb/heroes/icons/sun-monkey-king-icon.webp",
    order: 27,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Push", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "jungle", label: "Jungle"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 2016"
  },
  {
    name: "Alpha",
    title: "the Blade of Enmity",
    icon: "images/games/mlbb/heroes/icons/alpha-blade-of-enmity-icon.webp",
    order: 28,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Charge", "Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Laboratory 1718",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 2017"
  },
  {
    name: "Ruby",
    title: "the Little Red Hood",
    icon: "images/games/mlbb/heroes/icons/ruby-little-red-hood-icon.webp",
    order: 29,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Crowd Control", "Regen"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Yi Sun-Shin",
    title: "the Paenlong Legend",
    icon: "images/games/mlbb/heroes/icons/yisunshin-paenlong-legend-icon.webp",
    order: 30,
    roles: [
        {key: "assassin", label: "Assassin"},
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Chase"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Moskov",
    title: "the Spear of Quiescence",
    icon: "images/games/mlbb/heroes/icons/moskov-spear-of-quiescence-icon.webp",
    order: 31,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Chase"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "399"}
    ],
    release: "2017"
  },
  {
    name: "Johnson",
    title: "the Wild Engine",
    icon: "images/games/mlbb/heroes/icons/johnson-wild-engine-icon.webp",
    order: 32,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "support", label: "Support"}
    ],
    specialties: ["Support", "Crowd Control"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 14, 2017"
  },
  {
    name: "Cyclops",
    title: "the Starsoul Magician",
    icon: "images/games/mlbb/heroes/icons/cyclops-starsoul-magician-icon.webp",
    order: 33,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Poke", "Control"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Nebula Chronorift",
    price: [
        {type: "bp", value: "15k"},
        {type: "diamond", value: "399"}
    ],
    release: "2017"
  },
  {
    name: "Estes",
    title: "the Moon Elf King",
    icon: "images/games/mlbb/heroes/icons/estes-moon-elf-king-icon.webp",
    order: 34,
    roles: [
        {key: "support", label: "Support"},
    ],
    specialties: ["Regen", "Guard"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Azrya Woodlands",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "2017"
  },
  {
    name: "Hilda",
    title: "the Power of Megalith",
    icon: "images/games/mlbb/heroes/icons/hilda-power-of-megalith-icon.webp",
    order: 35,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Damage", "Regen"],
    lanes: [
        {key: "roam", label: "Roaming"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "2017"
  },
  {
    name: "Aurora",
    title: "the Maiden of the Glacier",
    icon: "images/games/mlbb/heroes/icons/aurora-maiden-of-the-glacier-icon.webp",
    order: 36,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Crowd Control", "Poke"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "2017"
  },
  {
    name: "Lapu-Lapu",
    title: "the Courageous Blade",
    icon: "images/games/mlbb/heroes/icons/lapulapu-courageous-blade-icon.webp",
    order: 37,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Vonetis Sea",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Vexana",
    title: "the Shimmer of Hope",
    icon: "images/games/mlbb/heroes/icons/vexana-shimmer-of-hope-icon.webp",
    order: 38,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Poke", "Control"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Roger",
    title: "the Dire Wolf Hunter",
    icon: "images/games/mlbb/heroes/icons/roger-dire-wolf-hunter-icon.webp",
    order: 39,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "June 25, 2017"
  },
  {
    name: "Karrie",
    title: "the Lost Star",
    icon: "images/games/mlbb/heroes/icons/karrie-lost-star-icon.webp",
    order: 40,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Alaghat",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "2017"
  },
  {
    name: "Gatotkaca",
    title: "the Mighty Legend",
    icon: "images/games/mlbb/heroes/icons/gatotkaca-mighty-legend-icon.webp",
    order: 41,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Crowd Control", "Burst"],
    lanes: [
        {key: "roam", label: "Roaming"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Nebula Chronorift",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 2017"
  },
  {
    name: "Harley",
    title: "the Mage Genius",
    icon: "images/games/mlbb/heroes/icons/harley-mage-genius-icon.webp",
    order: 42,
    roles: [
        {key: "assassin", label: "Assassin"},
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Poke"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 29, 2017"
  },
  {
    name: "Irithel",
    title: "the Jungle Heart",
    icon: "images/games/mlbb/heroes/icons/irithel-jungle-heart-icon.webp",
    order: 43,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Burst"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Azrya Woodlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Grock",
    title: "the Fortress Titan",
    icon: "images/games/mlbb/heroes/icons/grock-fortress-titan-icon.webp",
    order: 44,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Crowd Control", "Initiator"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Argus",
    title: "the Dark Angel",
    icon: "images/games/mlbb/heroes/icons/argus-dark-angel-icon.webp",
    order: 45,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Charge", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Odette",
    title: "the Swan Princess",
    icon: "images/games/mlbb/heroes/icons/odette-swan-princess-icon.webp",
    order: 46,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Poke"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "lucky-gem", value: "20"},
        {type: "hero-fragment", value: "120"}
    ],
    release: "September 29, 2017"
  },
  {
    name: "Lancelot",
    title: "the Blade of Roses",
    icon: "images/games/mlbb/heroes/icons/lancelot-blade-of-roses-icon.webp",
    order: 47,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Diggie",
    title: "the Timekeeper",
    icon: "images/games/mlbb/heroes/icons/diggie-timekeeper-icon.webp",
    order: 48,
    roles: [
        {key: "support", label: "Support"}
    ],
    specialties: ["Guard", "Poke"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "November 19, 2017"
  },
  {
    name: "Hylos",
    title: "the Grand Warden",
    icon: "images/games/mlbb/heroes/icons/hylos-grand-warden-icon.webp",
    order: 49,
    roles: [
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Guard", "Initiator"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Zhask",
    title: "the King of Swarms",
    icon: "images/games/mlbb/heroes/icons/zhask-king-of-swarms-icon.webp",
    order: 50,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Kastiya",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2017"
  },
  {
    name: "Helcurt",
    title: "the Shadowbringer",
    icon: "images/games/mlbb/heroes/icons/helcurt-shadowbringer-icon.webp",
    order: 51,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Push", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 24, 2017"
  },
  {
    name: "Pharsa",
    title: "the Wings of Vengeance",
    icon: "images/games/mlbb/heroes/icons/pharsa-wings-of-vengeance-icon.webp",
    order: 52,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Poke"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 27, 2017"
  },
  {
    name: "Lesley",
    title: "the Deadly Sniper",
    icon: "images/games/mlbb/heroes/icons/lesley-deadly-sniper-icon.webp",
    order: 53,
    roles: [
        {key: "marksman", label: "Marksman"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Finisher", "Burst"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 2018"
  },
  {
    name: "Jawhead",
    title: "the Steel Sweetheart",
    icon: "images/games/mlbb/heroes/icons/jawhead-steel-sweetheart-icon.webp",
    order: 54,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Charge", "Burst"],
    lanes: [
        {key: "roam", label: "Roaming"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Laboratory 1718",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 2018"
  },
  {
    name: "Angela",
    title: "the Bunnylove",
    icon: "images/games/mlbb/heroes/icons/angela-bunnylove-icon.webp",
    order: 55,
    roles: [
        {key: "support", label: "Support"}
    ],
    specialties: ["Guard", "Support"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Laboratory 1718",
    price: [
        {type: "bp", value: "24k"},
        {type: "diamond", value: "499"}
    ],
    release: "February 6, 2018"
  },
  {
    name: "Gusion",
    title: "the Holy Blade",
    icon: "images/games/mlbb/heroes/icons/gusion-holy-blade-icon.webp",
    order: 56,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Burst", "Magic Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2018"
  },
  {
    name: "Valir",
    title: "the Son of Flames",
    icon: "images/games/mlbb/heroes/icons/valir-son-of-flames-icon.webp",
    order: 57,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Damage", "Guard"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2018"
  },
  {
    name: "Martis",
    title: "the Ashura King",
    icon: "images/games/mlbb/heroes/icons/martis-ashura-king-icon.webp",
    order: 58,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Finisher", "Charge"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Nebula Chronorift",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2018"
  },
  {
    name: "Uranus",
    title: "the Aesthereal Defender",
    icon: "images/games/mlbb/heroes/icons/uranus-aesthereal-defender-icon.webp",
    order: 59,
    roles: [
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Regen"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Celestial Palace",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "2018"
  },
  {
    name: "Hanabi",
    title: "the Scarlet Flower",
    icon: "images/games/mlbb/heroes/icons/hanabi-scarlet-flower-icon.webp",
    order: 60,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "April 17, 2018"
  },
  {
    name: "Chang'e",
    title: "the Moon Palace Immortal",
    icon: "images/games/mlbb/heroes/icons/change-moon-palace-immortal-icon.webp",
    order: 61,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Poke", "Burst"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"},
        {type: "hero-fragment", value: "120"}
    ],
    release: "May 30, 2018"
  },
  {
    name: "Kaja",
    title: "the Nazar King",
    icon: "images/games/mlbb/heroes/icons/kaja-nazar-king-icon.webp",
    order: 62,
    roles: [
        {key: "support", label: "Support"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Control", "Charge"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Celestial Palace",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "April 25, 2018"
  },
  {
    name: "Selena",
    title: "the Abyssal Witch",
    icon: "images/games/mlbb/heroes/icons/selena-abyssal-witch-icon.webp",
    order: 63,
    roles: [
        {key: "assassin", label: "Assassin"},
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Initiator", "Finisher"],
    lanes: [
        {key: "mid", label: "Mid Lane"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 10, 2018"
  },
  {
    name: "Aldous",
    title: "the Soul Contractor",
    icon: "images/games/mlbb/heroes/icons/aldous-soul-contractor-icon.webp",
    order: 64,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Burst", "Support"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 24, 2018"
  },
  {
    name: "Claude",
    title: "the Master Thief",
    icon: "images/games/mlbb/heroes/icons/claude-master-thief-icon.webp",
    order: 65,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Burst", "Chase"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Los Pecados",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "August 7, 2018"
  },
  {
    name: "Vale",
    title: "the Windtalker",
    icon: "images/games/mlbb/heroes/icons/vale-windtalker-icon.webp",
    order: 66,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Crowd Control"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 29, 2019"
  },
  {
    name: "Leomord",
    title: "the Sworn Sword",
    icon: "images/games/mlbb/heroes/icons/leomord-sworn-sword-icon.webp",
    order: 67,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "October 3, 2018"
  },
  {
    name: "Lunox",
    title: "the Twilight Goddess",
    icon: "images/games/mlbb/heroes/icons/lunox-twilight-goddess-icon.webp",
    order: 68,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Damage"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 4, 2018"
  },
  {
    name: "Hanzo",
    title: "the Akuma Ninja",
    icon: "images/games/mlbb/heroes/icons/hanzo-akuma-ninja-icon.webp",
    order: 69,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Burst", "Poke"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 4, 2018"
  },
  {
    name: "Belerick",
    title: "the Guard of Nature",
    icon: "images/games/mlbb/heroes/icons/belerick-guard-of-nature-icon.webp",
    order: 70,
    roles: [
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Crowd Control", "Regen"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "August 17, 2018"
  },
  {
    name: "Kimmy",
    title: "the Hoverjet Outrider",
    icon: "images/games/mlbb/heroes/icons/kimmy-hoverjet-outrider-icon.webp",
    order: 71,
    roles: [
        {key: "marksman", label: "Marksman"},
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Damage", "Magic Damage"],
    lanes: [
        {key: "mid", label: "Mid Lane"},
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "October 23, 2018"
  },
  {
    name: "Thamuz",
    title: "the Lord Lava",
    icon: "images/games/mlbb/heroes/icons/thamuz-lord-lava-icon.webp",
    order: 72,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 18, 2018"
  },
  {
    name: "Harith",
    title: "the Time Traveler",
    icon: "images/games/mlbb/heroes/icons/harith-time-traveler-icon.webp",
    order: 73,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"},
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 6, 2018"
  },
  {
    name: "Minsitthar",
    title: "the Courageous Warrior",
    icon: "images/games/mlbb/heroes/icons/minsitthar-courageous-warrior-icon.webp",
    order: 74,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Initiator", "Crowd Control"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Vonetis Sea",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 20, 2018"
  },
  {
    name: "Kadita",
    title: "the Ocean Goddess",
    icon: "images/games/mlbb/heroes/icons/kadita-ocean-goddess-icon.webp",
    order: 75,
    roles: [
        {key: "mage", label: "Mage"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Burst", "Charge"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Vonetis Sea",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 18, 2018"
  },
  {
    name: "Faramis",
    title: "the Soul Binder",
    icon: "images/games/mlbb/heroes/icons/faramis-soul-binder-icon.webp",
    order: 76,
    roles: [
        {key: "support", label: "Support"},
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Guard", "Charge"],
    lanes: [
        {key: "mid", label: "Mid Lane"},
        {key: "roam", label: "Roaming"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "May 18, 2019"
  },
  {
    name: "Badang",
    title: "the Tribal Warrior",
    icon: "images/games/mlbb/heroes/icons/badang-tribal-warrior-icon.webp",
    order: 77,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Charge", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Vonetis Sea",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 15, 2019"
  },
  {
    name: "Khufra",
    title: "the Desert Tyrant",
    icon: "images/games/mlbb/heroes/icons/khufra-desert-tyrant-icon.webp",
    order: 78,
    roles: [
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Initiator", "Crowd Control"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 12, 2019"
  },
  {
    name: "Granger",
    title: "the Death Chanter",
    icon: "images/games/mlbb/heroes/icons/granger-death-chanter-icon.webp",
    order: 79,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Burst", "Finisher"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "April 23, 2019"
  },
  {
    name: "Guinevere",
    title: "the Ms. Violet",
    icon: "images/games/mlbb/heroes/icons/guinevere-ms-violet-icon.webp",
    order: 80,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Burst", "Magic Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "February 21, 2019"
  },
  {
    name: "Esmeralda",
    title: "the Astrologer",
    icon: "images/games/mlbb/heroes/icons/esmeralda-astrologer-icon.webp",
    order: 81,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Regen", "Mixed Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "April 3, 2019"
  },
  {
    name: "Terizla",
    title: "the Executioner",
    icon: "images/games/mlbb/heroes/icons/terizla-executioner-icon.webp",
    order: 82,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Burst", "Crowd Control"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "June 4, 2019"
  },
  {
    name: "X.Borg",
    title: "the Firaga Armor",
    icon: "images/games/mlbb/heroes/icons/xborg-firaga-armor-icon.webp",
    order: 83,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Regen", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "August 9, 2019"
  },
  {
    name: "Ling",
    title: "the Cyan Finch",
    icon: "images/games/mlbb/heroes/icons/ling-cyan-finch-icon.webp",
    order: 84,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 24, 2019"
  },
  {
    name: "Dyrroth",
    title: "the Prince of the Abyss",
    icon: "images/games/mlbb/heroes/icons/dyrroth-prince-of-the-abyss-icon.webp",
    order: 85,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Charge", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "jungle", label: "Jungle"}
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "June 25, 2019"
  },
  {
    name: "Lylia",
    title: "the Little Witch",
    icon: "images/games/mlbb/heroes/icons/lylia-little-witch-icon.webp",
    order: 86,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Push", "Damage"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 23, 2019"
  },
  {
    name: "Baxia",
    title: "the Mystic Tortoise",
    icon: "images/games/mlbb/heroes/icons/baxia-mystic-tortoise-icon.webp",
    order: 87,
    roles: [
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Support", "Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "October 8, 2019"
  },
  {
    name: "Masha",
    title: "the Wild-oats Fist",
    icon: "images/games/mlbb/heroes/icons/masha-wildoats-fist-icon.webp",
    order: 88,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Push", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 17, 2019"
  },
  {
    name: "Wanwan",
    title: "the Agile Tiger",
    icon: "images/games/mlbb/heroes/icons/wanwan-agile-tiger-icon.webp",
    order: 89,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Burst"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 26, 2019"
  },
  {
    name: "Silvanna",
    title: "the Imperial Knightess",
    icon: "images/games/mlbb/heroes/icons/silvanna-imperial-knightess-icon.webp",
    order: 90,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Initiator", "Magic Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 17, 2019"
  },
  {
    name: "Cecilion",
    title: "the Embrace of Night",
    icon: "images/games/mlbb/heroes/icons/cecilion-embrace-of-night-icon.webp",
    order: 91,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Poke", "Burst"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "February 12, 2020"
  },
  {
    name: "Carmilla",
    title: "the Shadow of Twilight",
    icon: "images/games/mlbb/heroes/icons/carmilla-shadow-of-twilight-icon.webp",
    order: 92,
    roles: [
        {key: "support", label: "Support"},
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Crowd Control", "Damage"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 17, 2020"
  },
  {
    name: "Atlas",
    title: "the Ocean Gladiator",
    icon: "images/games/mlbb/heroes/icons/atlas-ocean-gladiator-icon.webp",
    order: 93,
    roles: [
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Crowd Control", "Initiator"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 20, 2020"
  },
  {
    name: "Popol and Kupa",
    title: "the Icefield Companions",
    icon: "images/games/mlbb/heroes/icons/popolkupa-icefield-companions-icon.webp",
    order: 94,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Push", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "April 21, 2020"
  },
  {
    name: "Yu Zhong",
    title: "the Black Dragon",
    icon: "images/games/mlbb/heroes/icons/yuzhong-black-dragon-icon.webp",
    order: 95,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Regen", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "June 16, 2020"
  },
  {
    name: "Luo Yi",
    title: "the Yin-yang Geomancer",
    icon: "images/games/mlbb/heroes/icons/luoyi-yinyang-geomancer-icon.webp",
    order: 96,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Support", "Crowd Control"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "May 16, 2020"
  },
  {
    name: "Benedetta",
    title: "the Shadow Ranger",
    icon: "images/games/mlbb/heroes/icons/benedetta-shadow-ranger-icon.webp",
    order: 97,
    roles: [
        {key: "assassin", label: "Assassin"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 7, 2020"
  },
  {
    name: "Khaleed",
    title: "the Desert Scimitar",
    icon: "images/games/mlbb/heroes/icons/khaleed-desert-scimitar-icon.webp",
    order: 98,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Damage", "Regen"],
    lanes: [
        {key: "roam", label: "Roaming"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "August 7, 2020"
  },
  {
    name: "Barats",
    title: "the Dino Rider",
    icon: "images/games/mlbb/heroes/icons/barats-dino-rider-icon.webp",
    order: 99,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Damage", "Crowd Control"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 18, 2020"
  },
  {
    name: "Brody",
    title: "the Lone Star",
    icon: "images/games/mlbb/heroes/icons/brody-lone-star-icon.webp",
    order: 100,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Burst", "Finisher"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "October 16, 2020"
  },
  {
    name: "Yve",
    title: "the Astrowarden",
    icon: "images/games/mlbb/heroes/icons/yve-astrowarden-icon.webp",
    order: 101,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Poke"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Northern Vale",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "February 12, 2021"
  },
  {
    name: "Mathilda",
    title: "the Swift Plume",
    icon: "images/games/mlbb/heroes/icons/mathilda-swift-plume-icon.webp",
    order: 102,
    roles: [
        {key: "support", label: "Support"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Initiator", "Guard"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Los Pecados",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 12, 2020"
  },
  {
    name: "Paquito",
    title: "the Heavenly Fist",
    icon: "images/games/mlbb/heroes/icons/paquito-heavenly-fist-icon.webp",
    order: 103,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 15, 2021"
  },
  {
    name: "Gloo",
    title: "the Swamp Spirits",
    icon: "images/games/mlbb/heroes/icons/gloo-swamp-spirits-icon.webp",
    order: 104,
    roles: [
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Regen", "Control"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Azrya Woodlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "April 16, 2021"
  },
  {
    name: "Beatrix",
    title: "the Dawnbreak Soldier",
    icon: "images/games/mlbb/heroes/icons/beatrix-dawnbreak-soldier-icon.webp",
    order: 105,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 19, 2021"
  },
  {
    name: "Phoveus",
    title: "the Chains of Sin",
    icon: "images/games/mlbb/heroes/icons/phoveus-chains-of-sin-icon.webp",
    order: 106,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Regen", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "May 11, 2021"
  },
  {
    name: "Natan",
    title: "the Spacetime Walker",
    icon: "images/games/mlbb/heroes/icons/natan-spacetime-walker-icon.webp",
    order: 107,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Burst", "Magic Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 23, 2021"
  },
  {
    name: "Aulus",
    title: "the Warrior of Ferocity",
    icon: "images/games/mlbb/heroes/icons/aulus-warrior-of-ferocity-icon.webp",
    order: 108,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Damage", "Crowd Control"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "The Barren Lands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "August 31, 2021"
  },
  {
    name: "Aamon",
    title: "the Duke of Shards",
    icon: "images/games/mlbb/heroes/icons/aamon-duke-of-shards-icon.webp",
    order: 109,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Magic Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "October 26, 2021"
  },
  {
    name: "Valentina",
    title: "the Prophetess of the Night",
    icon: "images/games/mlbb/heroes/icons/valentina-prophetess-of-the-night-icon.webp",
    order: 110,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Finisher"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 25, 2021"
  },
  {
    name: "Edith",
    title: "the Ancient Guard",
    icon: "images/games/mlbb/heroes/icons/edith-ancient-guard-icon.webp",
    order: 111,
    roles: [
        {key: "tank", label: "Tank"},
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Control", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "roam", label: "Roaming"}
    ],
    region: "Sanctum Island",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 24, 2021"
  },
  {
    name: "Floryn",
    title: "the Budding Hope",
    icon: "images/games/mlbb/heroes/icons/floryn-budding-hope-icon.webp",
    order: 112,
    roles: [
        {key: "support", label: "Support"}
    ],
    specialties: ["Poke", "Guard"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 22, 2021"
  },
  {
    name: "Yin",
    title: "the Martial Genius",
    icon: "images/games/mlbb/heroes/icons/yin-martial-genius-icon.webp",
    order: 113,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Burst", "Control"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "January 18, 2022"
  },
  {
    name: "Melissa",
    title: "the Cursed Needle",
    icon: "images/games/mlbb/heroes/icons/melissa-cursed-needle-icon.webp",
    order: 114,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "February 22, 2022"
  },
  {
    name: "Xavier",
    title: "the Defier of Light",
    icon: "images/games/mlbb/heroes/icons/xavier-defier-of-light-icon.webp",
    order: 115,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Damage", "Guard"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 22, 2022"
  },
  {
    name: "Julian",
    title: "the Scarlet Raven",
    icon: "images/games/mlbb/heroes/icons/julian-scarlet-raven-icon.webp",
    order: 116,
    roles: [
        {key: "assassin", label: "Assassin"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Magic Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"},
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "May 24, 2022"
  },
  {
    name: "Fredrinn",
    title: "the Rogue Appraiser",
    icon: "images/games/mlbb/heroes/icons/fredrinn-rogue-appraiser-icon.webp",
    order: 117,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Damage", "Chase"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Los Pecados",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "August 12, 2022"
  },
  {
    name: "Joy",
    title: "the Flash of Miracle",
    icon: "images/games/mlbb/heroes/icons/joy-flash-of-miracle-icon.webp",
    order: 118,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Damage"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Azrya Woodlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "November 18, 2022"
  },
  {
    name: "Novaria",
    title: "the Star Rebel",
    icon: "images/games/mlbb/heroes/icons/novaria-star-rebel-icon.webp",
    order: 119,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Burst", "Poke"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "May 16, 2023"
  },
  {
    name: "Arlott",
    title: "the Lone Lancer",
    icon: "images/games/mlbb/heroes/icons/arlott-lone-lancer-icon.webp",
    order: 120,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Charge", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "February 14, 2023"
  },
  {
    name: "Ixia",
    title: "the Arclight Outlaw",
    icon: "images/games/mlbb/heroes/icons/ixia-arclight-outlaw-icon.webp",
    order: 121,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "July 8, 2023"
  },
  {
    name: "Nolan",
    title: "the Cosmic Wayfinder",
    icon: "images/games/mlbb/heroes/icons/nolan-cosmic-wayfinder-icon.webp",
    order: 122,
    roles: [
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Eruditio",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 30, 2023"
  },
  {
    name: "Cici",
    title: "the Buoyant Performer",
    icon: "images/games/mlbb/heroes/icons/cici-buoyant-performer-icon.webp",
    order: 123,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Damage", "Regen"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 27, 2023"
  },
  {
    name: "Chip",
    title: "the Phase Technician",
    icon: "images/games/mlbb/heroes/icons/chip-phase-technician-icon.webp",
    order: 124,
    roles: [
        {key: "support", label: "Support"},
        {key: "tank", label: "Tank"}
    ],
    specialties: ["Support", "Crowd Control"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Laboratory 1718",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 16, 2024"
  },
  {
    name: "Zhuxin",
    title: "the Beacon of Spirits",
    icon: "images/games/mlbb/heroes/icons/zhuxin-beacon-of-spirits-icon.webp",
    order: 125,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Damage", "Crowd Control"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "June 29, 2024"
  },
  {
    name: "Suyou",
    title: "the Mask of the Immortal",
    icon: "images/games/mlbb/heroes/icons/suyou-mask-of-the-immortal-icon.webp",
    order: 126,
    roles: [
        {key: "assassin", label: "Assassin"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Chase", "Burst"],
    lanes: [
        {key: "jungle", label: "Jungle"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 21, 2024"
  },
  {
    name: "Lukas",
    title: "the Beast of Light",
    icon: "images/games/mlbb/heroes/icons/lukas-beast-of-light-icon.webp",
    order: 127,
    roles: [
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Regen", "Damage"],
    lanes: [
        {key: "exp", label: "EXP Lane"},
        {key: "jungle", label: "Jungle"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 21, 2024"
  },
  {
    name: "Kalea",
    title: "the Surging Wave",
    icon: "images/games/mlbb/heroes/icons/kalea-surging-wave-icon.webp",
    order: 128,
    roles: [
        {key: "support", label: "Support"},
        {key: "fighter", label: "Fighter"}
    ],
    specialties: ["Control", "Regen"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Vonetis Sea",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 19, 2025"
  },
  {
    name: "Zetian",
    title: "the Celestial Empress",
    icon: "images/games/mlbb/heroes/icons/zetian-celestial-empress-icon.webp",
    order: 129,
    roles: [
        {key: "mage", label: "Mage"}
    ],
    specialties: ["Damage", "Crowd Control"],
    lanes: [
        {key: "mid", label: "Mid Lane"}
    ],
    region: "Cadia Riverlands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "June 18, 2025"
  },
  {
    name: "Obsidia",
    title: "the Sovereign of Dark's End",
    icon: "images/games/mlbb/heroes/icons/obsidia-sovereign-of-darks-end-icon.webp",
    order: 130,
    roles: [
        {key: "marksman", label: "Marksman"}
    ],
    specialties: ["Finisher", "Damage"],
    lanes: [
        {key: "gold", label: "Gold Lane"}
    ],
    region: "Abyss",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "September 17, 2025"
  },
  {
    name: "Sora",
    title: "the Shifting Cloud",
    icon: "images/games/mlbb/heroes/icons/sora-shifting-cloud-icon.webp",
    order: 131,
    roles: [
        {key: "fighter", label: "Fighter"},
        {key: "assassin", label: "Assassin"}
    ],
    specialties: ["Charge", "Burst"],
    lanes: [
        {key: "exp", label: "EXP Lane"}
    ],
    region: "Agelta Drylands",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "December 18, 2025"
  },
  {
    name: "Marcel",
    title: "the Soul Photographer",
    icon: "images/games/mlbb/heroes/icons/marcel-soul-photographer-icon.webp",
    order: 132,
    roles: [
        {key: "support", label: "Support"}
    ],
    specialties: ["Crowd Control", "Support"],
    lanes: [
        {key: "roam", label: "Roaming"}
    ],
    region: "Moniyan Empire",
    price: [
        {type: "bp", value: "32k"},
        {type: "diamond", value: "599"}
    ],
    release: "March 11, 2026"
  },
];

const tbody = document.getElementById("heroesTableBody");

function toHeroSlug(name) {
  return name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

if (tbody) {
    heroes.forEach(hero => {
      tbody.innerHTML += `
        <tr class="hero-row">
          <td class="icon-col">
            <div class="hero-icon-wrapper">
              <img src="../../../${hero.icon}" class="hero-icon">
            </div>
          </td>
          <td>
            <div class="hero-name-wrapper">
              <a class="hero-name hero-name-link" href="heroes/${toHeroSlug(hero.name)}.html">${hero.name}</a>
              <span class="hero-title">${hero.title}</span>
            </div>
          </td>
          <td class="order-col"><span class="hero-number">${hero.order}</span></td>
          <td>${hero.roles.map(r => `<span class="role-tag ${r.key}">${r.label}</span>`).join("")}</td>
          <td>${hero.specialties.map(s => `<span class="specialty-tag">${s}</span>`).join("")}</td>
          <td>${hero.lanes.map(lane => `<span class="lane-tag ${lane.key}">${lane.label}</span>`).join(" ")}</td>
          <td>${hero.region}</td>
          <td>
            ${hero.price.map(p =>
              `<img class="currency-icon" src="../../../images/games/mlbb/currencies/${p.type}.webp"> ${p.value}`
            ).join("<br>")}        </td>
          <td class="date-col">${hero.release}</td>
        </tr>
      `;
    });
}
