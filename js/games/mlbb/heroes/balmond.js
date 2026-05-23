// Hero data for Balmond
// Rendering logic moved here from shared helpers to support local file loading
const IMAGES = '../../../../images/games/mlbb/'; // Base path for MLBB images


// ========================================================================= //
// DATA: RATINGS                                                              //
// ========================================================================= //
const heroRatings = [
    {label: "Durability", value: 8},
    {label: "Offense", value: 3},
    {label: "Control Effects", value: 2},
    {label: "Difficulty", value: 1}
];


// ========================================================================= //
// RENDER HELPERS (Moved from shared helpers for compatibility)              //
// ========================================================================= //

function buildCost(cost, IMAGES_PATH) {
    if (cost.type === 'default') {
        return `<span>${cost.label}</span>`;
    }
    return `
        <img class="currency-icon" src="${IMAGES_PATH}currencies/${cost.type}.webp" alt="${cost.type}" width="20" height="20">
        <span>${cost.label}</span>
    `;
}

function buildSkinItem(cosmetic, IMAGES_PATH) {
    let html = `
        <div class="cosmetic-item">
            <img src="${cosmetic.image}" alt="${cosmetic.name}" class="cosmetic-image">
            <div class="cosmetic-caption">
                <div class="cosmetic-name">${cosmetic.name}</div>
    `;
    if (cosmetic.tier) {
        html += `<div class="skin-tier ${cosmetic.tier}">${cosmetic.tier}</div>`;
    }
    if (cosmetic.rarity && cosmetic.rarity !== 'basic') {
        html += `
            <div class="cosmetic-rarity-badge">
                <img src="${IMAGES_PATH}rarities/${cosmetic.rarity}.webp" alt="${cosmetic.rarity}">
            </div>
        `;
    }
    html += `<div class="cosmetic-cost">${buildCost(cosmetic.cost, IMAGES_PATH)}</div>`;
    html += `</div></div>`;
    return html;
}

function buildArchiveSkinItem(item) {
    return `
        <div class="cosmetic-item">
            <img src="${item.image}" alt="${item.name}" class="cosmetic-image">
            <div class="cosmetic-caption">
                <div class="cosmetic-name">${item.name}</div>
            </div>
        </div>
    `;
}

function buildIconItem(cosmetic) {
    return `
        <div class="cosmetic-item cosmetic-item--icon">
            <img src="${cosmetic.image}" alt="${cosmetic.name}" class="cosmetic-image">
            <div class="cosmetic-caption">
                <div class="cosmetic-name">${cosmetic.name}</div>
            </div>
        </div>
    `;
}

function buildCosmeticItem(cosmetic, IMAGES_PATH) {
    let html = `
        <div class="cosmetic-item">
            <img src="${cosmetic.image}" alt="${cosmetic.name}" class="cosmetic-image">
            <div class="cosmetic-caption">
                <div class="cosmetic-name">${cosmetic.name}</div>
    `;
    if (cosmetic.tier) {
        html += `<div class="skin-tier ${cosmetic.tier}">${cosmetic.tier}</div>`;
    }
    if (cosmetic.cost) {
        html += `<div class="cosmetic-cost">${buildCost(cosmetic.cost, IMAGES_PATH)}</div>`;
    }
    html += `</div></div>`;
    return html;
}

function buildAbilityCardHtml(ability, IMAGES_PATH, isArchived = false) {
    let html = '<div class="ability-card' + (isArchived ? ' archived' : '') + '">';
    if (isArchived && ability.version) html += '<div class="archive-tag">' + ability.version + '</div>';
    html += '<div class="ability-header">';
    html += '<img class="ability-icon" src="' + IMAGES_PATH + ability.icon + '" alt="' + ability.name + '">';
    html += '<div class="ability-title"><h4>' + ability.type + ': ' + ability.name + '</h4><div class="ability-tags">';
    if (ability.tags && ability.tags.length > 0) {
        html += ability.tags.map(t => '<span class="ability-tag ' + t.color + '">' + t.label + '</span>').join('');
    }
    html += '</div></div></div><div class="ability-divider"></div>';
    html += '<p class="ability-description">' + ability.description + '</p>';

    if (ability.notes && ability.notes.length > 0) {
        html += '<div class="ability-divider"></div><div class="ability-notes"><h5>Notes</h5><ul>';
        html += ability.notes.map(note => '<li>' + note + '</li>').join('');
        html += '</ul></div>';
    }

    if (ability.scaling && ability.scaling.values && ability.scaling.values.length > 0) {
        html += renderScalingTable(ability.scaling, "Level Scaling");
    }

    if (ability.additionalScalingTables && ability.additionalScalingTables.length > 0) {
        ability.additionalScalingTables.forEach(table => {
            html += renderScalingTable(table, table.title || "Additional Scaling");
        });
    }

    if (ability.variants && ability.variants.length > 0) {
        html += '<div class="ability-divider"></div><div class="ability-variants"><h5>Icon Variants</h5>';
        html += ability.variants.map(v => `
            <div class="variant-row">
                <img class="variant-rarity" src="${IMAGES_PATH}rarities/${v.rarity}.webp" alt="${v.rarity}">
                <img class="variant-icon" src="${IMAGES_PATH}${v.icon}" alt="${v.label}">
                <span class="variant-label">${v.label}</span>
            </div>
        `).join('');
        html += '</div>';
    }
    html += '</div>';
    return html;
}

function renderScalingTable(scaling, title) {
    const numLevels = scaling.values[0].length;
    const levelNumbers = Array.from({ length: numLevels }, (_, i) => i + 1).map(n => '<div>' + n + '</div>').join('');
    const gridColumnsStyle = `minmax(140px, 1.2fr) repeat(${numLevels}, minmax(40px, 1fr))`;
    let html = '<div class="ability-divider"></div><div class="ability-scaling"><h5>' + title + '</h5><div class="scaling-table">';
    html += '<div class="scaling-row scaling-header" style="grid-template-columns: ' + gridColumnsStyle + ';"><div>Properties</div>' + levelNumbers + '</div>';
    html += scaling.properties.map((prop, i) => {
        let rowHtml = '<div class="scaling-row" style="grid-template-columns: ' + gridColumnsStyle + ';"><div>' + prop + '</div>';
        rowHtml += scaling.values[i].map(v => '<div>' + v + '</div>').join('');
        rowHtml += '</div>';
        return rowHtml;
    }).join('');
    html += '</div></div>';
    return html;
}

function buildAudioListHtml(data) {
    if (!data || (Array.isArray(data) && data.length === 0) || (typeof data === 'object' && !Array.isArray(data) && Object.keys(data).length === 0)) {
        return '<p class="empty-state">No voice lines available for this category yet.</p>';
    }
    const buildCard = (line) => `
        <li class="audio-card">
            <button class="play-audio-btn" onclick="playHeroAudio('${line.file}')">▶</button>
            <div class="audio-quote">"${line.text}"</div>
        </li>
    `;
    if (Array.isArray(data)) {
        return `<ul class="audio-list">${data.map(buildCard).join('')}</ul>`;
    }
    return Object.entries(data).map(([subtitle, lines]) => `
        <div class="audio-group">
            <h5 class="audio-subtitle">${subtitle}</h5>
            <ul class="audio-list">${lines.map(buildCard).join('')}</ul>
        </div>
    `).join('');
}


// ========================================================================= //
// DATA: ABILITIES                                                            //
// ========================================================================= //
const heroAbilities = [
    {
        name: "Bloodthirst",
        type: "Passive",
        icon: "skills/balmond-bloodthirst.webp",
        tags: [
            {label: "Heal", color: "green"}
        ],
        description: "Balmond recovers 5% <g>Max HP</g> after killing a Minion or Creep, and 20% <g>Max HP</g> after killing a hero.",
        scaling: {},
        variants: []
    },
    {
        name: "Soul Lock",
        type: "Skill 1",
        icon: "skills/balmond-soul-lock.webp",
        tags: [
            {label: "Mobility", color: "purple"},
            {label: "Slow", color: "red"}
        ],
        notes: [],
        description: "Balmond charges to the target direction for a set distance or until he hits an enemy hero, dealing 150–275 <o>(+60% Total Physical Attack)</o> <r>Physical Damage</r> to enemies along the way. The enemy hero hit will be <o>knocked back</o> slightly, and will have their <o>Movement Speed reduced</o> by 40% and <o>Physical Defense</o> reduced by 40% for 3 seconds.",
        scaling: {
            properties: ["Cooldown", "Base Damage"],
            values: [
                ["8.0", "7.4", "6.8", "6.2", "5.6", "5.0"],
                ["150", "175", "200", "225", "250", "275"]
            ]
        },
        variants: []
    },
    {
        name: "Cyclone Sweep",
        type: "Skill 2",
        icon: "skills/balmond-cyclone-sweep.webp",
        tags: [
            {label: "AOE", color: "orange"},
            {label: "Buff", color: "blue"}
        ],
        notes: [
            "Cyclone Sweep can only be cancelled by using his other skills.",
            "Cyclone Sweep cannot be interrupted by <a href='../specialities/crowd-control.html'>Crowd Control</a>."
        ],
        description: "Balmond gains 15% <o>Movement Speed</o> that decays over time and spins his axe for 3 seconds, dealing 25–100 <o>(+25% Total Physical Attack)</o> <g>(+2% Extra HP)</g> <r>Physical Damage</r> per hit to nearby enemies up to 14 times. Each subsequent hit on the same enemy will deal 8.5% increased damage (up to 68%).<br><br>The <o>Physical Attack</o> bonus portion of the damage can <o>Crit</o>.",
        scaling: {
            properties: ["Cooldown", "Base Damage", "Extra Damage"],
            values: [
                ["6.0", "6.0", "6.0", "6.0", "6.0", "6.0"],
                ["25", "40", "55", "70", "85", "100"],
                ["350", "560", "770", "980", "1190", "1400"]
            ]
        },
        additionalScalingTables: [
            {
                title: "Stack Scaling",
                properties: ["Damage Increase per Subsequent Hit"],
                values: [
                    ["8.5%", "8.5%", "8.5%", "8.5%", "8.5%", "8.5%", "8.5%", "8.5%"]
                ]
            }
        ],
        variants: []
    },
    {
        name: "Lethal Counter",
        type: "Ultimate",
        icon: "skills/balmond-lethal-counter.webp",
        tags: [
            {label: "Burst", color: "orange"},
            {label: "Slow", color: "red"}
        ],
        notes: [
            "Deals bonus damage based on the target's missing HP.",
            "Damage is increased the lower the target's HP is."
        ],
        description: "Balmond unleashes a huge strike in the target direction (this skill can only be interrupted by Suppression), dealing 150 <o>(+70% Total Physical Attack)</o> <g>(+target's 30%–45% Lost HP)</g> <y>True Damage</y>.<br><br>This skill only deals up to 1000–2000 damage to non-hero units.",
        scaling: {
            properties: ["Cooldown", "Base Damage", "Max Damage"],
            values: [
                ["34.0", "29.0", "24.0"],
                ["30%", "37.5%", "45%"],
                ["1000", "1500", "2000"]
            ]
        },
        variants: []
    }
];


// ========================================================================= //
// DATA: STATS                                                                //
// ========================================================================= //
const heroStats = {
    hp:             [2558, 6212, 261],
    hpRegen:        [9.4, 17.8, 0.6],
    mana:           [0, 0, "/"],
    manaRegen:      [0, 0, "/"],
    physAtk:        [119, 237, 8.43],
    magAtk:         [0, 0, "/"],
    physDef:        ["25 (17.2%)", "90 (42.9%)", 4.6429],
    magDef:         ["15 (11.1%)", "50 (29.4%)", 2.5],
    atkSpeed:       [1.06, 1.34, 0.02],
    atkSpeedRatio:  ["100%", "100%", "/"],
    critDamage:     ["200%", "200%", "/"],
    moveSpeed:      [260, 260, "/"],
    basicAtkRange:  [1.8, 1.8, "/"]
};

const heroStatsLabelMap = {
    hp:             "HP",
    hpRegen:        "HP Regen",
    mana:           "Mana",
    manaRegen:      "Mana Regen",
    physAtk:        "Physical Attack",
    physDef:        "Physical Defense (Physical Damage Reduced)",
    magDef:         "Magic Defense (Magic Damage Reduced)",
    atkSpeed:       "Attack Speed",
    moveSpeed:      "Movement Speed",
    magAtk:         "Magic Power",
    atkSpeedRatio:  "Attack Speed Ratio",
    critDamage:     "Critical Damage",
    basicAtkRange:  "Basic Attack Range"
};


// ========================================================================= //
// DATA: TRIVIA                                                               //
// ========================================================================= //
const heroTrivia = [
    "Balmond's old design is still visible on his Passive design.",
    "In his old lore, he went from being <a href='alice.html'>Alice</a>'s slave to being a mutually exploited ally in the new lore.",
    "Balmond's 'Celestial General' (now 'God of Mountains') is the skin with the longest release postponement; it was supposed to be released at 2018 but the skin was released on August 2021 for the Grand Collection event."
];


// ========================================================================= //
// DATA: MASTERY CODE                                                         //
// ========================================================================= //
const heroMasteryCode = [
    {
        chapter: 1,
        title: "Power of Blood Demon",
        text: "Since the battle with the Blood Demon Alice, Balmond has gained the powers of Blood Demons, which enabled the Blood Axe Orc to absorb the life of his prey to nourish himself. That was exactly why Alice often appointed him with important tasks to realize her own ambitions, which he rarely failed.",
        target: "After slaying enemies, use <b>Bloodthirst</b> and accumulate 6000 HP regen."
    },
    {
        chapter: 2,
        title: "Evil Servant",
        text: "It is said that the Blood Axe Orc was unable to free himself from the servitude of Alice, making him Alice's ace in the hole. Balmond has since become an Orc with Blood Demon powers. He was also dubbed as a Mutant Orc, or an evil incarnation by the masses. During battle, Balmond often falls into a crazed bloodlust thereby making him the most brave and powerful Berserker amongst the Orcs.",
        target: "Accumulate 3 Killing Sprees."
    },
    {
        chapter: 3,
        title: "Fighting Machine",
        text: "Since Balmond gained the Blood Demon power, his combat strength has far surpassed that of average Orcs. His signature Cyclone Sweep has far exceeded its original form a long time ago. Balmond always displayed his great strength in battle, especially with his improved Cyclone Sweep. He has literally become a war machine in battle, one that gets stronger with each fight.",
        target: "Use <b>Cyclone Sweep</b> once and deal Damage to enemies at least 6 times. Complete it 50 times."
    },
    {
        chapter: 4,
        title: "Elves' Nightmare",
        text: "He can often be found near the Enchanted Forest, helping the Blood Demon Alice search for her favorite prey - Moon Elves. He often hides in the woods alone, catching Moon Elves by surprise. Even if more elves come to their aid, they will often get slain by Balmond's axe upon encountering this terrifying Orc.",
        target: "Use <b>Lethal Counter</b> and kill 16 enemies."
    }
];


// ========================================================================= //
// DATA: PATCH HISTORY                                                        //
// ========================================================================= //
const heroPatchHistory = [
    {
        version: "1.8.44",
        date: "12th September 2023",
        type: "Buff",
        title: "Skill 2 HP scaling added",
        description: "Balmond's Cyclone Sweep now scales with bonus HP to reward tankier builds and improve his late-game relevance.",
        changes: [
            { target: "Skill 2", type: "buff", text: "Now deals an additional <b>(+2% Extra HP)</b> Physical Damage per hit." },
            { target: "Skill 2", type: "buff", text: "Base damage per hit: 20–90 → <b>25–100</b>" }
        ]
    },
    {
        version: "1.6.72",
        date: "2021-05-18",
        type: "Adjustment",
        title: "Soul Lock rework",
        description: "Soul Lock was redesigned to better suit Balmond's fighter role, replacing a short dash with a longer charge that can hit multiple targets.",
        changes: [
            { target: "Skill 1", type: "buff",       text: "Charge distance significantly increased." },
            { target: "Skill 1", type: "buff",       text: "Now reduces target's Physical Defense by 40% for 3 seconds." },
            { target: "Skill 1", type: "adjustment", text: "Knockback effect changed from hard knock to slight push." }
        ]
    }
];


// ========================================================================= //
// DATA: COSMETICS — SKINS                                                    //
// ========================================================================= //
const heroSkins = [
    {
        name: "Bloody Beast",
        rarity: "basic",
        image: `${IMAGES}heroes/skins/balmond-bloody-beast.webp`,
        cost: {type: "default", label: "Default skin"}
    },
    {
        name: "Power Source",
        tier: "common",
        rarity: "basic",
        image: `${IMAGES}heroes/skins/balmond-power-source.webp`,
        cost: {type: "diamond", label: "254"}
    },
    {
        name: "Ghoul's Fury",
        tier: "common",
        rarity: "elite",
        image: `${IMAGES}heroes/skins/balmond-ghouls-fury.webp`,
        cost: {type: "diamond", label: "399"}
    },
    {
        name: "Savage Hunter",
        tier: "common",
        rarity: "elite",
        image: `${IMAGES}heroes/skins/balmond-savage-hunter.webp`,
        cost: {type: "diamond", label: "599"}
    },
    {
        name: "God of Mountains",
        tier: "exquisite",
        rarity: "collector",
        image: `${IMAGES}heroes/skins/balmond-god-of-mountains.webp`,
        cost: {type: "default", label: "Limited-time Event"}
    },
    {
        name: "Savage Pointguard",
        tier: "exceptional",
        rarity: "special",
        image: `${IMAGES}heroes/skins/balmond-savage-pointguard.webp`,
        cost: {type: "diamond", label: "749"}
    },
    {
        name: "Bioroid",
        tier: "exceptional",
        rarity: "starlight",
        image: `${IMAGES}heroes/skins/balmond-bioroid.webp`,
        cost: {type: "default", label: "04/2022 StarLight Member"}
    },
    {
        name: "Infernal Warlord",
        tier: "deluxe",
        rarity: "epic",
        image: `${IMAGES}heroes/skins/balmond-infernal-warlord.webp`,
        cost: {type: "diamond", label: "899"}
    },
    {
        name: "Razor Edge",
        tier: "exceptional",
        rarity: "special",
        image: `${IMAGES}heroes/skins/balmond-razor-edge.webp`,
        cost: {type: "default", label: "Limited-time Event"}
    },
    {
        name: "Ironhide Berserker",
        tier: "common",
        rarity: "s39",
        image: `${IMAGES}heroes/skins/balmond-ironhide-berserker.webp`,
        cost: {type: "default", label: "S39 Season Journey"}
    }
];


// ========================================================================= //
// DATA: COSMETICS — PAINTED SKINS                                           //
// ========================================================================= //
const heroPaintedSkins = [];


// ========================================================================= //
// DATA: COSMETICS — STATUES                                                  //
// ========================================================================= //
const heroStatues = [];


// ========================================================================= //
// DATA: COSMETICS — ICONS                                                    //
// ========================================================================= //
const heroIcons = [
    { name: "Balmond",          image: `${IMAGES}heroes/icons/balmond-default-icon.webp`        },
    { name: "Fallen Angel",     image: `${IMAGES}heroes/icons/balmond-fallen-angel-icon.webp`   },
    { name: "Death Bringer",    image: `${IMAGES}heroes/icons/balmond-death-bringer-icon.webp`  },
    { name: "Minoan Fury",      image: `${IMAGES}heroes/icons/balmond-minoan-fury-icon.webp`    },
    { name: "Holy Blade",       image: `${IMAGES}heroes/icons/balmond-holy-blade-icon.webp`     },
    { name: "Summoners Rift S9",image: `${IMAGES}heroes/icons/balmond-summoners-rift-s9-icon.webp` }
];


// ========================================================================= //
// DATA: COSMETICS — SPLASH ART                                               //
// ========================================================================= //
const heroSplashArt = [
    { name: "Balmond",          image: `${IMAGES}heroes/splashes/balmond-default-splash.webp`        },
    { name: "Fallen Angel",     image: `${IMAGES}heroes/splashes/balmond-fallen-angel-splash.webp`   },
    { name: "Death Bringer",    image: `${IMAGES}heroes/splashes/balmond-death-bringer-splash.webp`  },
    { name: "Minoan Fury",      image: `${IMAGES}heroes/splashes/balmond-minoan-fury-splash.webp`    },
    { name: "Holy Blade",       image: `${IMAGES}heroes/splashes/balmond-holy-blade-splash.webp`     },
    { name: "Summoners Rift S9",image: `${IMAGES}heroes/splashes/balmond-summoners-rift-s9-splash.webp` }
];


// ========================================================================= //
// DATA: AUDIO                                                                //
// ========================================================================= //
const heroAudioData = {
    en: {
        default: {
            selection: [
                { text: "I am the demon of the battlefield!", file: "audio/en/balmond-default-select.ogg" }
            ],
            movement: {
                "First Move": [
                    { text: "The hunt begins.", file: "audio/en/balmond-default-move-01.ogg" }
                ],
                "Moving": [
                    { text: "My axe thirsts for blood.",                       file: "audio/en/balmond-default-move-02.ogg" },
                    { text: "None can stand before me.",                       file: "audio/en/balmond-default-move-03.ogg" },
                    { text: "I will crush them all.",                          file: "audio/en/balmond-default-move-04.ogg" },
                    { text: "The Abyss gives me strength.",                    file: "audio/en/balmond-default-move-05.ogg" },
                    { text: "Fear is for the weak.",                           file: "audio/en/balmond-default-move-06.ogg" },
                    { text: "Every kill makes me stronger.",                   file: "audio/en/balmond-default-move-07.ogg" },
                    { text: "Their blood will feed the earth.",                file: "audio/en/balmond-default-move-08.ogg" }
                ]
            },
            interaction: {
                "With <a href='../heroes/alice.html'>Alice</a>": [
                    { text: "Sister. Stay out of my way.", file: "audio/en/balmond-default-interaction01.ogg" }
                ],
                "Buying an <a href='../equipment.html'>Equipment</a>": [
                    { text: "This will do.",    file: "audio/en/balmond-default-buy-01.ogg" },
                    { text: "More power.",      file: "audio/en/balmond-default-buy-02.ogg" }
                ],
                "Killing an Enemy": [
                    { text: "Pathetic.",                         file: "audio/en/balmond-default-kill-01.ogg" },
                    { text: "Another soul for the Abyss.",       file: "audio/en/balmond-default-kill-02.ogg" },
                    { text: "Did you really think you'd win?",   file: "audio/en/balmond-default-kill-03.ogg" }
                ],
                "Killing <a href='../lord.html'>Lord</a>": [
                    { text: "Even the mighty fall.",    file: "audio/en/balmond-default-lord-01.ogg" },
                    { text: "Nothing but prey.",        file: "audio/en/balmond-default-lord-02.ogg" }
                ]
            },
            skill: {
                "Attacking": [
                    { text: "Nowhere to run!",              file: "audio/en/balmond-default-attack-01.ogg" },
                    { text: "Feel the weight of my axe!",   file: "audio/en/balmond-default-attack-02.ogg" },
                    { text: "Come closer!",                 file: "audio/en/balmond-default-attack-03.ogg" },
                    { text: "You cannot escape!",           file: "audio/en/balmond-default-attack-04.ogg" }
                ],
                "Basic Attacks": [
                    { text: "(grunts)", file: "audio/en/balmond-default-basic-01.ogg" },
                    { text: "(grunts)", file: "audio/en/balmond-default-basic-02.ogg" },
                    { text: "(grunts)", file: "audio/en/balmond-default-basic-03.ogg" }
                ],
                "Ultimate": [
                    { text: "Taste the void!",      file: "audio/en/balmond-default-ultimate-01.ogg" },
                    { text: "This ends now!",        file: "audio/en/balmond-default-ultimate-02.ogg" }
                ]
            },
            recall: {
                "After Recall": [
                    { text: "I'll be back for more.",   file: "audio/en/balmond-default-recall-01.ogg" },
                    { text: "Regroup.",                 file: "audio/en/balmond-default-recall-02.ogg" }
                ]
            },
            death: {
                "Death": [
                    { text: "Impossible...",     file: "audio/en/balmond-default-death-01.ogg" },
                    { text: "(death roar)",      file: "audio/en/balmond-default-death-02.ogg" }
                ],
                "Respawn": [
                    { text: "The Abyss spits me back out. Good.", file: "audio/en/balmond-default-respawn-01.ogg" },
                    { text: "I'm not done yet.",                   file: "audio/en/balmond-default-respawn-02.ogg" }
                ]
            }
        }
    }
};


// ========================================================================= //
// DATA: ARCHIVE — PREVIOUS ABILITIES                                        //
// ========================================================================= //
const heroArchiveAbilities = [
    {
        name: "Soul Lock",
        type: "Skill 1",
        icon: "skills/balmond-soul-lock-old.webp",
        tags: [
            {label: "Mobility", color: "purple"},
            {label: "Slow", color: "red"}
        ],
        description: "Balmond dashes a short distance in the target direction, dealing <r>Physical Damage</r> to enemies in his path and briefly <o>slowing</o> the first hero hit.",
        scaling: {
            properties: ["Cooldown", "Base Damage"],
            values: [
                ["9.0", "8.4", "7.8", "7.2", "6.6", "6.0"],
                ["120", "145", "170", "195", "220", "245"]
            ]
        },
        variants: []
    }
];


// ========================================================================= //
// DATA: ARCHIVE — PREVIOUS SKINS (GALLERY)                                 //
// ========================================================================= //
const heroArchiveSkins = [
    {name: "Balmond (2016)", image: `${IMAGES}heroes/skins/balmond-default-archive01.webp`},
    {name: "Fallen Angel (2016-2019)", image: `${IMAGES}heroes/skins/balmond-fallen-angel-archive01.webp`}
];


// ========================================================================= //
// DATA: ARCHIVE — PREVIOUS LORE                                             //
// ========================================================================= //
const heroArchiveLore = [
    {
        version: "Original (2016)",
        title: "Original Lore",
        text: "Balmond is a half-demon warrior who has been fighting his whole life, first for survival, and then for conquest. Born of a forbidden union between a human and a demon of the Abyss, he was rejected by both worlds. Rather than succumb to despair, Balmond forged his pain into iron will.<br><br>Armed with his massive axe, he carved his way through battlefields that would have broken lesser beings. Over the centuries, he developed his signature technique: the Cyclone Sweep, a devastating spinning attack that could level entire squads of soldiers.<br><br>When the war for the Land of Dawn erupted, Balmond saw an opportunity — not to serve any king or cause, but to test himself against the strongest warriors in existence. He fights for no one but himself, and every enemy he kills makes him stronger. The Abyss is his birthright, and the battlefield is his throne."
    }
];


// ========================================================================= //
// DATA: STRATEGY                                                             //
// ========================================================================= //
const heroStrategy = {
    recommendations: {
        builds: [
            {name: "Durable Fighter <i>(Default Build)</i>",    items: ["<a href='../equipments/warrior-boots.html'>Warrior Boots</a>", "<a href='../equipments/bloodlust-axe.html'>Bloodlust Axe</a>", "<a href='../equipments/cursed-helmet.html'>Cursed Helmet</a>", "<a href='../equipments/immortality.html'>Immortality</a>", "<a href='../equipments/queen-s-wings.html'>Queen's Wings</a>", "<a href='../equipments/blade-of-despair.html'>Blade of Despair</a>"]},
            {name: "HP Scaling <i>(Default Build)</i>",         items: ["<a href='../equipments/warrior-boots.html'>Warrior Boots</a>", "<a href='../equipments/oracle.html'>Oracle</a>", "<a href='../equipments/cursed-helmet.html'>Cursed Helmet</a>", "<a href='../equipments/antique-cuirass.html'>Antique Cuirass</a>", "<a href='../equipments/immortality.html'>Immortality</a>", "<a href='../equipments/queen-s-wings.html'>Queen's Wings</a>"]},
            {name: "Damage Fighter <i>(User Build)</i>",        items: ["<a href='../equipments/warrior-boots.html'>Warrior Boots</a>", "<a href='../equipments/bloodlust-axe.html'>Bloodlust Axe</a>", "<a href='../equipments/hunter-strike.html'>Hunter Strike</a>", "<a href='../equipments/blade-of-despair.html'>Blade of Despair</a>", "<a href='../equipments/malefic-roar.html'>Malefic Roar</a>", "<a href='../equipments/immortality.html'>Immortality</a>"]}
        ],
        emblems: ["Fighter (Festival of Blood / Brave Smite)", "Tank (Tenacity / Brave Smite)"],
        spells: ["<a href='../spells/flicker.html'>Flicker</a> <i>(to extend Soul Lock's reach or escape)</i>", "<a href='../spells/vengeance.html'>Vengeance</a> <i>(to punish burst damage dealers)</i>", "<a href='../spells/sprint.html'>Sprint</a> <i>(to chase down slippery enemies)</i>"]
    },
    prosCons: {
        pros: [
            "Very durable with high base HP and HP growth",
            "Strong sustain through his Passive after clearing jungle or minions",
            "Cyclone Sweep deals surprising damage when built with HP items",
            "Execute ultimate is excellent for securing kills on low-HP targets",
            "Soul Lock provides a defense shred, making him valuable in team fights",
            "Simple kit makes him beginner-friendly",
            "Good at clearing waves and jungle camps quickly"
        ],
        cons: [
            "Highly reliant on getting kills or clearing minions to sustain in lane",
            "Lacks hard crowd control, making him easy to kite",
            "Weak against ranged enemies who can avoid Cyclone Sweep",
            "Ultimate requires good positioning to hit multiple targets",
            "Falls off slightly in the late game against burst assassins"
        ]
    },
    tactics: {
        tips: [
            {text: "Prioritise clearing minion waves and jungle camps to stack your Passive healing — this makes Balmond very difficult to zone out of lane."},
            {text: "Use <b>Soul Lock</b> to initiate fights: the Physical Defense reduction makes Balmond's follow-up Cyclone Sweep and allied physical damage much more lethal."},
            {text: "Save <b>Lethal Counter</b> for when an enemy drops below roughly 30% HP to maximise the execute bonus damage."},
            {text: "Building HP items like Cursed Helmet synergises directly with Cyclone Sweep's bonus HP scaling, letting you deal damage while staying tanky."}
        ],
        bestTeamUps: ["<a href='tigreal.html'>Tigreal</a>", "<a href='franco.html'>Franco</a>", "<a href='odette.html'>Odette</a>", "<a href='layla.html'>Layla</a>", "<a href='miya.html'>Miya</a>", "<a href='eudora.html'>Eudora</a>", "<a href='nana.html'>Nana</a>"]
    },
    counters: {
        tips: [
            {text: "<a href='karrie.html'>Karrie</a> and other true-damage dealers ignore Balmond's high physical defense, making them strong picks against him."},
            {text: "<a href='nana.html'>Nana</a> can interrupt Cyclone Sweep with her polymorphs, completely shutting down his primary damage tool."},
            {text: "Kite-heavy marksmen like <a href='layla.html'>Layla</a> can poke Balmond from a safe distance; avoid letting him close the gap with Soul Lock."},
            {text: "<a href='chou.html'>Chou</a> can use his kick to interrupt Cyclone Sweep and knock Balmond away from the team."}
        ],
        weakAgainst: ["<a href='karrie.html'>Karrie</a>", "<a href='nana.html'>Nana</a>", "<a href='chou.html'>Chou</a>", "<a href='lancelot.html'>Lancelot</a>", "<a href='layla.html'>Layla</a>", "<a href='irithel.html'>Irithel</a>"]
    }
};


// ========================================================================= //
// RENDER FUNCTIONS                                                           //
// ========================================================================= //

function renderRatings() {
    const container = document.getElementById('ratings-container');
    if (!container) return;
    container.innerHTML = '<div class="rating-list">' +
        heroRatings.map(function(r) {
            return `
                <div class="rating-row">
                    <span>${r.label}</span>
                    <div class="rating-bar">
                        <div class="rating-fill" style="width: ${r.value * 10}%; background-color: ${r.color}"></div>
                    </div>
                    <span class="rating-value">${r.value}</span>
                </div>
            `;
        }).join('') +
    '</div>';
}

function renderAbilities() {
    const container = document.getElementById('abilities-container');
    if (!container) return;
    container.innerHTML = '<div class="abilities-list">' +
        heroAbilities.map(ability => buildAbilityCardHtml(ability, IMAGES, false)).join('') +
    '</div>';
}

function renderStats() {
    const container = document.getElementById('stats-container');
    if (!container) return;
    let html = '<div class="hero-stats-table">';
    html += `
        <div class="stats-row stats-header">
            <div>Attribute</div>
            <div class="stats-subheader">
                <span>Level 1</span>
                <span>Level 15</span>
                <span>Growth</span>
            </div>
        </div>
    `;
    html += Object.entries(heroStats).map(function([key, values]) {
        return `
            <div class="stats-row">
                <div>${heroStatsLabelMap[key] || key}</div>
                <div class="stats-values">
                    <span>${values[0]}</span>
                    <span>${values[1]}</span>
                    <span>${values[2]}</span>
                </div>
            </div>
        `;
    }).join('');
    html += '</div>';
    container.innerHTML = html;
}

function renderTrivia() {
    const container = document.getElementById('trivia-container');
    if (!container) return;
    if (heroTrivia.length > 0) {
        container.innerHTML = '<ul class="trivia-list">' +
            heroTrivia.map(item => `<li>${item}</li>`).join('') +
        '</ul>';
    } else {
        container.innerHTML = '<p>No trivia available for this hero.</p>';
    }
}

function renderMasteryCode() {
    const container = document.getElementById('mastery-container');
    if (!container) return;
    container.innerHTML = '<div class="mastery-chapters-wrapper">' +
        heroMasteryCode.map(item => `
            <div class="mastery-chapter-card">
                <div class="mastery-chapter-header">
                    <span class="chapter-label">Chapter ${item.chapter}</span>
                    <h4 class="chapter-title">${item.title}</h4>
                </div>
                <div class="mastery-chapter-body">
                    <div class="mastery-story-container">
                        <p>${item.text}</p>
                    </div>
                </div>
                <div class="mastery-task-container">
                    <div class="task-badge">Task Target</div>
                    <p class="task-description">${item.target}</p>
                </div>
            </div>
        `).join('') +
    '</div>';
}

function renderPatchHistory() {
    const container = document.getElementById('patch-history-container');
    if (!container) return;
    container.innerHTML = '<div class="patch-timeline">' +
        heroPatchHistory.map(function(patch) {
            const typeClass = patch.type.toLowerCase();
            return `
                <div class="patch-card ${typeClass}">
                    <div class="patch-card-header">
                        <div class="patch-info">
                            <span class="patch-version">v${patch.version}</span>
                            <span class="patch-date">${patch.date}</span>
                        </div>
                        <div class="patch-tag ${typeClass}">${patch.type}</div>
                    </div>
                    <div class="patch-card-content">
                        <h4>${patch.title}</h4>
                        <p class="patch-summary">${patch.description}</p>
                        <ul class="patch-change-list">
                            ${patch.changes.map(change => `
                                <li class="change-item">
                                    <span class="change-type-indicator ${change.type}"></span>
                                    <strong>${change.target}:</strong> ${change.text}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }).join('') +
    '</div>';
}

function renderCosmeticsGallery() {
    const skinsEl = document.getElementById('skins-container');
    if (skinsEl) skinsEl.innerHTML = heroSkins.map(skin => buildSkinItem(skin, IMAGES)).join('');

    const paintedSkinsEl = document.getElementById('painted-skins-container');
    if (paintedSkinsEl) paintedSkinsEl.innerHTML = heroPaintedSkins.map(skin => buildSkinItem(skin, IMAGES)).join('');

    const iconsEl = document.getElementById('icons-container');
    if (iconsEl) iconsEl.innerHTML = heroIcons.map(buildIconItem).join('');

    const galleries = {
        'statues-container':    heroStatues,
        'splash-art-container': heroSplashArt
    };
    Object.entries(galleries).forEach(([id, data]) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data.map(cosmetic => buildCosmeticItem(cosmetic, IMAGES)).join('');
    });
}

function renderAudioIntoContainer(containerId, audioDataSource, lang, skin, category) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const data = audioDataSource?.[lang]?.[skin]?.[category];
    container.innerHTML = buildAudioListHtml(data);
}

window.renderAudioList = function(lang, skin, category) {
    const containerId = `audio-${lang}-${skin}-${category}`;
    renderAudioIntoContainer(containerId, heroAudioData, lang, skin, category);
}


// ========================================================================= //
// ARCHIVE RENDER FUNCTIONS                                                   //
// ========================================================================= //

function renderArchiveAbilities() {
    const container = document.getElementById('archive-abilities-container');
    if (!container) return;
    container.innerHTML = '<div class="abilities-list">' +
        heroArchiveAbilities.map(ability => buildAbilityCardHtml(ability, IMAGES, true)).join('') +
    '</div>';
}

function renderArchiveSkins() {
    const container = document.getElementById('archive-skins-container');
    if (!container) return;
    container.innerHTML = heroArchiveSkins.map(buildArchiveSkinItem).join('');
}

function renderArchiveLore() {
    const container = document.getElementById('archive-lore-container');
    if (!container) return;
    container.innerHTML = '<div class="mastery-chapters-wrapper">' +
        heroArchiveLore.map(item => `
            <div class="mastery-chapter-card">
                <div class="mastery-chapter-header">
                    <span class="chapter-label">${item.version}</span>
                    <h4 class="chapter-title">${item.title}</h4>
                </div>
                <div class="mastery-chapter-body">
                    <div class="mastery-story-container">
                        <p>${item.text}</p>
                    </div>
                </div>
            </div>
        `).join('') +
    '</div>';
}

function renderStrategy() {
    const recCont   = document.getElementById('strategy-recommendations');
    const pcCont    = document.getElementById('strategy-pros-cons');
    const tacCont   = document.getElementById('strategy-tactics');
    const countCont = document.getElementById('strategy-counters');

    if (recCont) {
        recCont.innerHTML = `
            <div class="strategy-grid">
                <div class="recommendation-card">
                    <h4 style="color: white; font-size: 1.5rem;">Recommended Equipment Builds</h4>
                    ${heroStrategy.recommendations.builds.map(build => `
                        <div style="margin-bottom: 1.5rem;">
                            <h5 style="color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.9rem;">${build.name}</h5>
                            <div class="build-path">
                                ${build.items.map((item, i) => `
                                    <span class="build-item">${item}</span>
                                    ${i < build.items.length - 1 ? '<span class="build-arrow">→</span>' : ''}
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="emblem-spell-grid">
                    <div class="recommendation-card">
                        <h4 style="color: white; font-size: 1.5rem;">Recommended Emblems</h4>
                        <div class="build-path">
                            ${heroStrategy.recommendations.emblems.map(e => `<span class="build-item" style="border-left: 3px solid #f59e0b;">${e}</span>`).join('')}
                        </div>
                    </div>
                    <div class="recommendation-card">
                        <h4 style="color: white; font-size: 1.5rem;">Battle Spells</h4>
                        <div class="build-path">
                            ${heroStrategy.recommendations.spells.map(s => `<span class="build-item" style="border-left: 3px solid var(--secondary-color);">${s}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (pcCont) {
        pcCont.innerHTML = `
            <div class="strategy-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                <div class="recommendation-card" style="border-top: 4px solid #10b981;">
                    <h4 style="color: white; font-size: 1.5rem; margin-bottom: 1.25rem;">Pros</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        ${heroStrategy.prosCons.pros.map(p => `
                            <li style="display: flex; gap: 12px; color: #cbd5e1; font-size: 0.95rem; line-height: 1.4;">
                                <span style="color: #10b981; font-weight: bold;">✓</span>
                                <span>${p}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="recommendation-card" style="border-top: 4px solid #ef4444;">
                    <h4 style="color: white; font-size: 1.5rem; margin-bottom: 1.25rem;">Cons</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem;">
                        ${heroStrategy.prosCons.cons.map(c => `
                            <li style="display: flex; gap: 12px; color: #cbd5e1; font-size: 0.95rem; line-height: 1.4;">
                                <span style="color: #ef4444; font-weight: bold;">✕</span>
                                <span>${c}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    if (tacCont) {
        let tacticsHtml = heroStrategy.tactics.tips.map(t => `
            <div class="story-block"><p>${t.text}</p></div>
        `).join('');
        tacticsHtml += `
            <div class="recommendation-card" style="margin-top: 1.5rem; border-left: 4px solid var(--primary-color);">
                <h4 style="color: white; font-size: 1.5rem; margin-bottom: 1.25rem;">Best Team-ups</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                    ${heroStrategy.tactics.bestTeamUps.map(hero => `
                        <span class="build-item" style="background: rgba(99, 102, 241, 0.1); border: 1px solid var(--primary-color); padding: 0.5rem 1rem;">${hero}</span>
                    `).join('')}
                </div>
            </div>
        `;
        tacCont.innerHTML = tacticsHtml;
    }

    if (countCont) {
        let countersHtml = heroStrategy.counters.tips.map(t => `
            <div class="story-block"><p>${t.text}</p></div>
        `).join('');
        countersHtml += `
            <div class="recommendation-card" style="margin-top: 1.5rem; border-left: 4px solid #ef4444;">
                <h4 style="color: white; font-size: 1.5rem; margin-bottom: 1.25rem;">Countered by</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                    ${heroStrategy.counters.weakAgainst.map(hero => `
                        <span class="build-item" style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; padding: 0.5rem 1rem;">${hero}</span>
                    `).join('')}
                </div>
            </div>
        `;
        countCont.innerHTML = countersHtml;
    }
}


// ========================================================================= //
// INITIALIZATION                                                             //
// ========================================================================= //
function initHeroPage() {
    renderRatings();
    renderAbilities();
    renderStats();
    renderTrivia();
    renderMasteryCode();
    renderPatchHistory();
    renderCosmeticsGallery();
    renderStrategy();

    renderArchiveAbilities();
    renderArchiveSkins();
    renderArchiveLore();

    renderAudioList('en', 'default', 'selection');
}

window.playHeroAudio = function(file) {
    const audio = new Audio(`${IMAGES}${file}`);
    audio.play().catch(e => console.warn("Audio file not found:", `${IMAGES}${file}`));
};

document.addEventListener('DOMContentLoaded', initHeroPage);