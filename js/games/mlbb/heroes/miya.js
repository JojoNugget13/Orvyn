// Cosmetic data for Miya
// Rendering logic moved here from shared helpers to support local file loading
const IMAGES = '../../../../../images/games/mlbb/'; // Base path for MLBB images


// ========================================================================= //
// DATA: RATINGS                                                              //
// ========================================================================= //
const heroRatings = [
    {label: "Durability", value: 1},
    {label: "Offense", value: 7},
    {label: "Control Effects", value: 4},
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
        name: "Moon Blessing",
        type: "Passive",
        icon: "skills/miya-moon-blessing.webp",
        tags: [
            {label: "Buff", color: "blue"},
            {label: "Attack Effects: 25%", color: "transparent"},
            {label: "Lifesteal Ratio: 0%", color: "transparent"}
        ],
        notes: [],
        description: "Each time Miya hits a target with her <r>Basic Attack</r>, she gains 5% <r>Attack Speed</r> for 4 seconds. Stacks up to 5 times. After reaching full stacks, Miya summons a <r>Moonlight Shadow</r> with each Basic Attack that deals 30 <o>(+25% Total Physical Attack)</o> <r>Physical Damage</r> and inherits a portion of <r>Attack Effects</r>.",
        scaling: {
            properties: ["Extra Attack Speed"],
            values: [
                ["5%", "5%", "5%", "5%", "5%"]
            ]
        },
        variants: [
            {rarity: "legend", icon: "skills/miya-moon-blessing-modena-butterfly.webp", label: "Modena Butterfly"}
        ]
    },
    {
        name: "Moon Arrow",
        type: "Skill 1",
        icon: "skills/miya-moon-arrow.webp",
        tags: [
            {label: "Buff", color: "blue"},
            {label: "AOE", color: "orange"},
            {label: "Attack Effects: 20%", color: "transparent"}
        ],
        notes: [
            "Cooldown starts upon casting.",
            "This skill cannot be cast again until its duration ends."
        ],
        description: "Miya shoots two extra arrows with each <r>Basic Attack</r>, dealing 10–35 <o>(+100% Total Physical Attack)</o> <r>Physical Damage</r> to the target enemy and 30% damage to nearby targets. This effect lasts 4 seconds. Each extra arrow inherits a portion of <r>Attack Effects</r>.",
        scaling: {
            properties: ["Cooldown", "Mana Cost", "Base Damage", "Duration"],
            values: [
                ["11.0", "11.0", "11.0", "11.0", "11.0", "11.0"],
                ["50",   "55",   "60",   "65",   "70",   "75"  ],
                ["10",   "15",   "20",   "25",   "30",   "35"  ],
                ["4",    "5",    "6",    "7",    "8",    "9"   ]
            ]
        },
        variants: [
            {rarity: "legend", icon: "skills/miya-moon-arrow-modena-butterfly.webp", label: "Modena Butterfly"}
        ]
    },
    {
        name: "Arrow of Eclipse",
        type: "Skill 2",
        icon: "skills/miya-arrow-of-eclipse.webp",
        tags: [
            {label: "CC", color: "red"},
            {label: "AOE", color: "orange"}
        ],
        notes: [],
        description: "Miya launches an empowered arrow on the target area, dealing 270–420 <o>(+45% Total Physical Attack)</o> <r>Physical Damage</r> to enemies within and <o>immobilizing</o> them for 1.2 seconds. The arrow then splits into 6 scattering minor arrows, each dealing 40–105 <o>(+20% Total Physical Attack)</o> <r>Physical Damage</r> to the first enemy hit and <o>slowing</o> them by 30% for 2 seconds.",
        scaling: {
            properties: ["Cooldown", "Mana Cost", "Base Damage", "Arrow Damage"],
            values: [
                ["8.0",  "8.0",  "8.0",  "8.0",  "8.0",  "8.0" ],
                ["80",   "90",   "100",  "110",  "120",  "130" ],
                ["270",  "300",  "330",  "360",  "390",  "420" ],
                ["40",   "53",   "66",   "79",   "92",   "105" ]
            ]
        },
        variants: [
            {rarity: "legend", icon: "skills/miya-arrow-of-eclipse-modena-butterfly.webp", label: "Modena Butterfly"}
        ]
    },
    {
        name: "Hidden Moonlight",
        type: "Ultimate",
        icon: "skills/miya-hidden-moonlight.webp",
        tags: [
            {label: "Conceal", color: "blue"},
            {label: "Remove CC", color: "blue"}
        ],
        notes: [
            "'Attacks' that end the duration of Moon Blessing only refer to Miya's basic attacks and her non-ultimate skill casts.",
        ],
        description: "Miya removes all <o>debuffs</o> on her and conceals herself, gaining 65% extra <o>Movement Speed</o>. This state lasts 2 seconds or until she launches an attack. Miya gains full stacks of <o>Moon Blessing</o> upon leaving the state.",
        scaling: {
            properties: ["Cooldown", "Mana Cost"],
            values: [
                ["30.0", "25.0", "20.0"],
                ["120",  "145",  "170" ]
            ]
        },
        variants: [
            {rarity: "legend", icon: "skills/miya-hidden-moonlight-modena-butterfly.webp", label: "Modena Butterfly"}
        ]
    }
];


// ========================================================================= //
// DATA: STATS                                                                //
// ========================================================================= //
const heroStats = {
    hp:             [2225, 4367, 153],
    hpRegen:        [6.0, 9.0, 0.2143],
    mana:           [500, 1900, 100],
    manaRegen:      [4, 6.8, 0.2],
    physAtk:        [115, 227, 8],
    magAtk:         [0, 0, "/"],
    physDef:        ["17 (12.4%)", "74 (38.1%)", 4.0714],
    magDef:         ["15 (11.1%)", "50 (29.4%)", 2.5],
    atkSpeed:       [1.06, 1.41, 0.025],
    atkSpeedRatio:  ["100%", "100%", "/"],
    critDamage:     ["200%", "200%", "/"],
    moveSpeed:      ["240", "240", "/"],
    basicAtkRange:  [4.8, 4.8, "/"]
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
    "In Japanese, Miya (宮) means '<b>shrine</b>' or '<b>palace</b>', often referring to sacred places or nobility. This fits Miya's elegant and mystical Moon Elf background.",
    "She is somewhat inspired by <b>Lufia</b> from <i>Magic Rush</i>, a game created by Moonton before <i>MLBB</i>. Miya's skin <b>Jungle Ranger</b> looks like her.",
    "She is the first hero to have a running animation when having a high movement speed attribute.",
    "Miya's <b>Honor</b> skin is a giveaway skin to celebrate the summer vacation in the Philippines.",
    "Her skin, <b>Suzuhime</b> (鈴姫) is Japanese and can be broken down into two parts: 鈴 (Suzu) means '<b>bell</b>' or '<b>chime</b>', often associated with gentle, pleasant sounds. 姫 (Hime) means '<b>princess</b>' or '<b>young noblewoman</b>'.",
    "Miya was one of the heroes revamped in <a href='../../../mlbb/project-next.html'>Project NEXT</a>'s first batch in September 2020, along with <a href='../../heroes/layla.html'>Layla</a>, <a href='../../heroes/eudora.html'>Eudora</a> (whom Miya also shares the same Japanese-language voice actor, <a href='https://www.themoviedb.org/person/2995662'>Miho Morisaki</a>, with), <a href='../../heroes/zilong.html'>Zilong</a> and <a href='../../heroes/saber.html'>Saber</a>. The goal was to balance the power gap between older and newer heroes, as the latter had better mechanics and animations.",
    "Miya's <b>Burning Bow</b> was previously called <b>Queen of Banshes</b> in 2016 <i>(check Archive)</i>",
    "Miya's <b>Christmas Carnival</b> was previously called <b>Christmas Cheer</b> from 2016 until 2020 <i>(check Archive)</i>",
    "<b>Turbo</b>, <b>Fission Shot</b>, <b>Rain of Arrows</b> and <b>Turbo Stealth</b> were the old names for <b>Moon Blessing</b>, <b>Moon Arrow</b>, <b>Arrow of Eclipse</b> and <b>Hidden Moonlight</b> <i>(check Archive)</i>"
];


// ========================================================================= //
// DATA: MASTERY CODE                                                         //
// ========================================================================= //
const heroMasteryCode = [
    {
        chapter: 1,
        title: "Moon Priestess",
        text: "A silvery moon hangs high in the sky, and all is tranquil in the forest. Miya strides leisurely through the trees, enjoying the brief peace that follows the fierce flames of battle. She passes an elf, who calls out in greeting: 'Priestess! Will you be reciting your prayers again today?' The elves who witnessed her younger years are long gone. Her elder brother, the King of the Moon Elves, remains deep in his slumber. Miya, the Moon Priestess who stands before the elves today is their leader, responsible for the entire Moonlit Forest. For only moonlight may form her shimmering veil. may form her shimmering veil.",
        target: "Use <b>Hidden Moonlight</b> a total of 10 times."
    },
    {
        chapter: 2,
        title: "Moonlit Forest",
        text: "Miya often asks herself: is adopting a peaceful life something one does to protect people and avoid sacrifice? Or is it to live in a self-imposed prison? She still recalls Azrya's former peace and tranquility. War tore it asunder, like a raging gale stripping trees of their leaves. Yet a tree must weather the storm if it is to grow from the rain. So, what will her choice be? Miya stands in a cage, from which she must eventually emerge.",
        target: "Use <b>Arrow of Eclipse</b> to immobilize an enemy hero a total of 20 times."
    },
    {
        chapter: 3,
        title: "Moon Eclipse",
        text: "The fires of war rage once more. On the moon is the brand of the Abyss. Strings and horns sound, moonlight piercing the air like an arrow. In ancient times, the new moon would shine a speck of light into the dark skies, but now, it is under this moon that the elves prepare their longbows for combat: and where their arrows fall, their enemies will flee for their lives!",
        target: "Use <b>Moon Arrow</b> to deal a total of 150000 damage."
    },
    {
        chapter: 4,
        title: "Crescent Moon",
        text: "Elves are gifted with long lives and sharp memories. History is but a cycle of repetition in which all things take part. Miya stands as a participant, witness and guardian. She's laid eyes upon the brutality of the Endless War, lived through the rise and fall of mankind's empires, and fought off invaders from the Abyss. Miya can smell the flames of war as they start to flicker, and sense the winds set to rise. She is the Moon Priestess, guardian of Azrya: longbow in hand, ready to strike down all who dare threaten her home and her people.",
        target: "Get 60 Kills with full stacks of <b>Moon Blessing</b>."
    }
];


// ========================================================================= //
// DATA: PATCH HISTORY                                                        //
// ========================================================================= //
const heroPatchHistory = [
    {
        version: "1.8.66",
        date: "13th March 2024",
        type: "Buff",
        title: "Attribute and Skill 2 buffs",
        description: "Miya is too weak in early-game 1v1 fights, so we want to increase her Skill 2 hit rate and balance her early and late game damage.",
        changes: [
            { target: "Attribute", type: "buff", text: "Basic Attack: 100 → <b>115</b>" },
            { target: "Attribute", type: "nerf", text: "Physical Attack Growth: 14 → <b>10</b>" },
            { target: "Attribute", type: "nerf", text: "Base HP: 2524 → <b>2225</b>" },
            { target: "Attribute", type: "buff", text: "HP Growth: 138.5 → <b>153</b>" },
            { target: "Skill 2",   type: "buff", text: "Base Damage: 90-240 → <b>270-420</b>" },
            { target: "Skill 2",   type: "buff", text: "Reduced delay time by <b>25%</b>" }
        ]
    },
    {
        version: "1.7.08",
        date: "2022-08-01",
        type: "Adjustment",
        title: "Skill 2 Revamp",
        description: "Adjusted the crowd control duration to balance her early game pressure.",
        changes: [
            { target: "Skill 2",    type: "nerf", text: "Immobilize duration decreased from 1.2s to 1s." },
            { target: "Base Stats", type: "buff", text: "Base Physical Attack increased by 10." }
        ]
    }
];


// ========================================================================= //
// DATA: COSMETICS — SKINS                                                    //
// ========================================================================= //
const heroSkins = [
    {
        name: "Moonlight Archer",
        rarity: "basic",
        image: `${IMAGES}heroes/skins/miya-moonlight-archer.webp`,
        cost: { type: "default", label: "Default skin" }
    },
    {
        name: "Burning Bow",
        tier: "common",
        rarity: "elite",
        image: `${IMAGES}heroes/skins/miya-burning-bow.webp`,
        cost: { type: "diamond", label: "599" }
    },
    {
        name: "Christmas Carnival",
        tier: "exquisite",
        rarity: "luckybox",
        image: `${IMAGES}heroes/skins/miya-christmas-carnival.webp`,
        cost: { type: "default", label: "Limited-time Event" }
    },
    {
        name: "Captain Thorns",
        tier: "exceptional",
        rarity: "starlight",
        image: `${IMAGES}heroes/skins/miya-captain-thorns.webp`,
        cost: { type: "default", label: "2017/02 StarLight Member" }
    },
    {
        name: "Honor",
        tier: "common",
        rarity: "limited",
        image: `${IMAGES}heroes/skins/miya-honor.webp`,
        cost: { type: "diamond", label: "599" }
    },
    {
        name: "Modena Butterfly",
        tier: "supreme",
        rarity: "legend",
        image: `${IMAGES}heroes/skins/miya-modena-butterfly.webp`,
        cost: { type: "magic-core", label: "200" }
    },
    {
        name: "Sweet Fantasy",
        tier: "exceptional",
        rarity: "valentine",
        image: `${IMAGES}heroes/skins/miya-sweet-fantasy.webp`,
        cost: { type: "default", label: "Limited-time Event" }
    },
    {
        name: "Suzuhime",
        tier: "exceptional",
        rarity: "special",
        image: `${IMAGES}heroes/skins/miya-suzuhime.webp`,
        cost: { type: "default", label: "Twilight Pass" }
    },
    {
        name: "Jungle Ranger",
        tier: "common",
        rarity: "basic",
        image: `${IMAGES}heroes/skins/miya-jungle-ranger.webp`,
        cost: { type: "default", label: "S18 First Recharge" }
    },
    {
        name: "Moon Priestess",
        tier: "exceptional",
        rarity: "5anniversary",
        image: `${IMAGES}heroes/skins/miya-moon-priestess.webp`,
        cost: { type: "default", label: "Limited-time Event" }
    },
    {
        name: "Doom Catalyst",
        tier: "exquisite",
        rarity: "collector",
        image: `${IMAGES}heroes/skins/miya-doom-catalyst.webp`,
        cost: { type: "default", label: "Limited-time Event" }
    },
    {
        name: "Atomic Pop Miya",
        tier: "deluxe",
        rarity: "atomic",
        image: `${IMAGES}heroes/skins/miya-atomic-pop-miya.webp`,
        cost: { type: "default", label: "Limited-time Event" }
    },
    {
        name: "Nightowl Huntress",
        tier: "exceptional",
        rarity: "starlight",
        image: `${IMAGES}heroes/skins/miya-nightowl-huntress.webp`,
        cost: { type: "default", label: "2025/02 StarLight Member" }
    },
    {
        name: "Arrow of Spring",
        tier: "grand",
        rarity: "seasons",
        image: `${IMAGES}heroes/skins/miya-arrow-of-spring.webp`,
        cost: { type: "default", label: "Limited-time Event" }
    }
];


// ========================================================================= //
// DATA: COSMETICS — PAINTED SKINS                                           //
// ========================================================================= //
const heroPaintedSkins = [
    {
        name: "Tranquil Bow",
        tier: "common",
        rarity: "elite",
        image: `${IMAGES}heroes/skins/miya-burning-bow.webp`,
        cost: { type: "default", label: "2019/11 StarLight Reward" }
    },
    {
        name: "Nightowl Warden",
        tier: "exceptional",
        rarity: "starlight",
        image: `${IMAGES}heroes/skins/miya-nightowl-warden.webp`,
        cost: { type: "default", label: "2025/05 StarLight Reward" }
    },
    {
        name: "Nightowl Sentinel",
        tier: "exceptional",
        rarity: "starlight",
        image: `${IMAGES}heroes/skins/miya-nightowl-sentinel.webp`,
        cost: { type: "default", label: "2025/05 StarLight Reward" }
    }
];


// ========================================================================= //
// DATA: COSMETICS — STATUES                                                  //
// ========================================================================= //
const heroStatues = [
    {
        name: "Moonlight Guardian",
        tier: "exceptional",
        image: `${IMAGES}heroes/statues/miya-moonlight-guardian.webp`,
        cost: { type: "twilight-coin", label: "50" }
    },
    {
        name: "Moonlit Arrow",
        tier: "exceptional",
        image: `${IMAGES}heroes/statues/miya-moonlit-arrow.webp`,
        cost: { type: "default", label: "2025/05 StarLight Reward" }
    }
];


// ========================================================================= //
// DATA: COSMETICS — ICONS                                                    //
// ========================================================================= //
const heroIcons = [
    { name: "Moonlight Archer",                             image: `${IMAGES}heroes/icons/miya-moonlight-archer-icon.webp`   },
    { name: "Burning Bow",                                  image: `${IMAGES}heroes/icons/miya-burning-bow-icon.webp`        },
    { name: "Christmas Carnival",                           image: `${IMAGES}heroes/icons/miya-christmas-carnival-icon.webp` },
    { name: "Captain Thorns",                               image: `${IMAGES}heroes/icons/miya-captain-thorns-icon.webp`     },
    { name: "Honor",                                        image: `${IMAGES}heroes/icons/miya-honor-icon.webp`              },
    { name: "Modena Butterfly",                             image: `${IMAGES}heroes/icons/miya-modena-butterfly-icon.webp`   },
    { name: "Sweet Fantasy",                                image: `${IMAGES}heroes/icons/miya-sweet-fantasy-icon.webp`      },
    { name: "Suzuhime",                                     image: `${IMAGES}heroes/icons/miya-suzuhime-icon.webp`           },
    { name: "Jungle Ranger",                                image: `${IMAGES}heroes/icons/miya-jungle-ranger-icon.webp`      },
    { name: "Moon Priestess",                               image: `${IMAGES}heroes/icons/miya-moon-priestess-icon.webp`     },
    { name: "Doom Catalyst",                                image: `${IMAGES}heroes/icons/miya-doom-catalyst-icon.webp`      },
    { name: "Atomic Pop Miya",                              image: `${IMAGES}heroes/icons/miya-atomic-pop-miya-icon.webp`    },
    { name: "Nightowl Huntress",                            image: `${IMAGES}heroes/icons/miya-nightowl-huntress-icon.webp`  },
    { name: "Nightowl Warden",                              image: `${IMAGES}heroes/icons/miya-nightowl-warden-icon.webp`    },
    { name: "Nightowl Sentinel",                            image: `${IMAGES}heroes/icons/miya-nightowl-sentinel-icon.webp`  },
    { name: "Arrow of Spring <i>(image needed)</i>",        image: `${IMAGES}heroes/icons/miya-arrow-of-spring-icon.webp`   }
];


// ========================================================================= //
// DATA: COSMETICS — SPLASH ART                                               //
// ========================================================================= //
const heroSplashArt = [
    { name: "Moonlight Archer",                                 image: `${IMAGES}heroes/splashes/miya-moonlight-archer-splash.webp`   },
    { name: "Burning Bow",                                      image: `${IMAGES}heroes/splashes/miya-burning-bow-splash.webp`        },
    { name: "Christmas Carnival",                               image: `${IMAGES}heroes/splashes/miya-christmas-carnival-splash.webp` },
    { name: "Captain Thorns <i>(better image needed)</i>",      image: `${IMAGES}heroes/splashes/miya-captain-thorns-splash.webp`     },
    { name: "Honor",                                            image: `${IMAGES}heroes/splashes/miya-honor-splash.webp`              },
    { name: "Modena Butterfly",                                 image: `${IMAGES}heroes/splashes/miya-modena-butterfly-splash.webp`   },
    { name: "Sweet Fantasy",                                    image: `${IMAGES}heroes/splashes/miya-sweet-fantasy-splash.webp`      },
    { name: "Suzuhime",                                         image: `${IMAGES}heroes/splashes/miya-suzuhime-splash.webp`           },
    { name: "Jungle Ranger",                                    image: `${IMAGES}heroes/splashes/miya-jungle-ranger-splash.webp`      },
    { name: "Moon Priestess",                                   image: `${IMAGES}heroes/splashes/miya-moon-priestess-splash.webp`     },
    { name: "Doom Catalyst",                                    image: `${IMAGES}heroes/splashes/miya-doom-catalyst-splash.webp`      },
    { name: "Atomic Pop Miya",                                  image: `${IMAGES}heroes/splashes/miya-atomic-pop-miya-splash.webp`    },
    { name: "Nightowl Huntress",                                image: `${IMAGES}heroes/splashes/miya-nightowl-huntress-splash.webp`  },
    { name: "Nightowl Warden <i>(image needed)</i>",            image: `${IMAGES}heroes/splashes/miya-nightowl-warden-splash.webp`    },
    { name: "Nightowl Sentinel",                                image: `${IMAGES}heroes/splashes/miya-nightowl-sentinel-splash.webp`  },
    { name: "Arrow of Spring",                                  image: `${IMAGES}heroes/splashes/miya-arrow-of-spring-splash.webp`    }
];


// ========================================================================= //
// DATA: AUDIO                                                                //
// ========================================================================= //
const heroAudioData = {
    en: {
        default: {
            selection: [
                { text: "I am the moonlight that breaks through the darkness.", file: "audio/en/miya-default-select.ogg" }
            ],
            movement: {
                "First Move": [
                    { text: "As twilight falls, the new moon draws near.", file: "audio/en/miya-default-move-01.ogg" }
                ],
                "Moving": [
                    { text: "Elves won't give in, no matter how much more suffering we'll go through.",       file: "audio/en/miya-default-move-02.ogg" },
                    { text: "My arrow is my answer.",                                                         file: "audio/en/miya-default-move-03.ogg" },
                    { text: "The way of the hunter: moderate, respectful, and sincere.",                      file: "audio/en/miya-default-move-04.ogg" },
                    { text: "The way of the arrow: swift, silent, and precise.",                              file: "audio/en/miya-default-move-05.ogg" },
                    { text: "The way of the bow: flexible, reserved, and understated.",                       file: "audio/en/miya-default-move-06.ogg" },
                    { text: "The forest might burn, the moon may be dark, but our hope outlives everything.", file: "audio/en/miya-default-move-07.ogg" },
                    { text: "The forest is on my watch when the moon is shrouded in darkness.",               file: "audio/en/miya-default-move-08.ogg" },
                    { text: "The moon impartially sheds her grace on every corner of the forest.",            file: "audio/en/miya-default-move-09.ogg" },
                    { text: "Could it be me that misunderstood my brother's decree?",                         file: "audio/en/miya-default-move-10.ogg" },
                    { text: "The moonlight spares no mercy to the foes of <a href='../locations/azrya-woodlands.html'>Azrya</a>.", file: "audio/en/miya-default-move-11.ogg" }
                ]
            },
            interaction: {
                "With <a href='../heroes/estes.html'>Estes</a>": [
                    { text: "I now protect our home in your footsteps, brother.", file: "audio/en/miya-default-interaction01.ogg" }
                ],
                "Buying an <a href='../equipment.html'>Equipment</a>": [
                    { text: "Wise choice.",                 file: "audio/en/miya-default-buy-01.ogg" },
                    { text: "A gift from the great forest.", file: "audio/en/miya-default-buy-02.ogg" }
                ],
                "Killing an Enemy": [
                    { text: "May the moon have mercy on you.",        file: "audio/en/miya-default-kill-01.ogg" },
                    { text: "Perish in the sacred moonlight.",         file: "audio/en/miya-default-kill-02.ogg" },
                    { text: "Bow before the glory of the Moon Goddess!", file: "audio/en/miya-default-kill-03.ogg" }
                ],
                "Killing <a href='../lord.html'>Lord</a>": [
                    { text: "Begone from our forest!",  file: "audio/en/miya-default-lord-01.ogg" },
                    { text: "Another successful hunt.", file: "audio/en/miya-default-lord-02.ogg" }
                ]
            },
            skill: {
                "Attacking": [
                    { text: "Watch your back.",                                                                   file: "audio/en/miya-default-attack-01.ogg" },
                    { text: "You can't run from my arrow.",                                                       file: "audio/en/miya-default-attack-02.ogg" },
                    { text: "My aim is true.",                                                                    file: "audio/en/miya-default-attack-03.ogg" },
                    { text: "Trespassers will not be tolerated!",                                                 file: "audio/en/miya-default-attack-04.ogg" },
                    { text: "For <a href='../locations/azrya-woodlands.html'>Azrya</a>, our last homeland!",     file: "audio/en/miya-default-attack-05.ogg" }
                ],
                "Basic Attacks": [
                    { text: "(grunts)", file: "audio/en/miya-default-basic-01.ogg" },
                    { text: "(grunts)", file: "audio/en/miya-default-basic-02.ogg" },
                    { text: "(grunts)", file: "audio/en/miya-default-basic-03.ogg" }
                ],
                "Ultimate": [
                    { text: "May the moon forever shine upon us!", file: "audio/en/miya-default-ultimate-01.ogg" },
                    { text: "Fade into the moonlight!",             file: "audio/en/miya-default-ultimate-02.ogg" }
                ]
            },
            recall: {
                "After Recall": [
                    { text: "The gentle moonlight heals my wounds.", file: "audio/en/miya-default-recall-01.ogg" },
                    { text: "A tactical retreat.",                    file: "audio/en/miya-default-recall-02.ogg" }
                ]
            },
            death: {
                "Death": [
                    { text: "The... eclipse...", file: "audio/en/miya-default-death-01.ogg" },
                    { text: "(groans)",           file: "audio/en/miya-default-death-02.ogg" }
                ],
                "Respawn": [
                    { text: "Until the new moon graces us again, my fight carries on.", file: "audio/en/miya-default-respawn-01.ogg" },
                    { text: "I'm ready to re-enter the battle.",                         file: "audio/en/miya-default-respawn-02.ogg" }
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
        name: "Turbo",
        type: "Passive",
        icon: "skills/miya-turbo.webp",
        tags: [],
        description: "Each time <o>Basic Attack</o> hits a target, <r>her Attack Speed will be increased by 5%</r> that can stacked up to 8 times for 4 seconds.",
        scaling: {},
        variants: [
            {rarity: "legend", icon: "skills/miya-turbo-modena-butterfly.webp", label: "Modena Butterfly (2017-2020)"}
        ]
    },
    {
        name: "Fission Shot",
        type: "Skill 1",
        icon: "skills/miya-fission-shot.webp",
        tags: [
            {label: "Buff", color: "blue"},
            {label: "AOE", color: "orange"}
        ],
        description: "Splits her <o>Basic Attack</o> into two arrows, dealing 5 <o>(+105%% Total Physical Attack)</o> <r>Physical Damage</r> to the main target and 30% <r>Physical Damage</r> to secondary targets for 4 seconds. Her <o>Basic Attack</o> splits only once.",
        scaling: {
            properties: ["Cooldown", "Mana Cost", "Base Damage"],
            values: [
                ["11.0", "11.0", "11.0", "11.0", "11.0", "11.0"],
                ["80", "90", "100", "110", "120", "130"],
                ["5", "8", "11", "14", "17", "20"]
            ]
        },
        variants: [
            {rarity: "legend", icon: "skills/miya-fission-shot-modena-butterfly.webp", label: "Modena Butterfly (2017-2020)"}
        ]
    },
    {
        name: "Rain of Arrows",
        type: "Skill 2",
        icon: "skills/miya-rain-of-arrows.webp",
        tags: [
            {label: "CC", color: "red"},
            {label: "AOE", color: "orange"}
        ],
        description: "Shoots a barrage of arrows towards a designated area, dealing 5 hits of damage to enemies. Each hit deals 30 <o>(+15%% Total Physical Attack)</o> <r>Physical Damage</r> and <r>slows enemies by 30%</r> for 2 seconds. Enemies who are hit 4 times by this skill will be <o>Frozen</o> for 1 second.",
        scaling: {
            properties: ["Cooldown", "Mana Cost", "Base Damage"],
            values: [
                ["10.0", "10.0", "10.0", "10.0", "10.0", "10.0"],
                ["80", "95", "110", "125", "140", "155"],
                ["30", "40", "50", "60", "70", "80"]
            ]
        },
        variants: [
            {rarity: "legend", icon: "skills/miya-rain-of-arrows-modena-butterfly.webp", label: "Modena Butterfly (2017-2020)"}
        ]
    },
    {
        name: "Turbo Stealth",
        type: "Ultimate",
        icon: "skills/miya-turbo-stealth.webp",
        tags: [
            {label: "Conceal", color: "blue"},
            {label: "Burst",   color: "orange"}
        ],
        description: "<r>Removes Crowd Control effects</r> and concealing herself and increasing <r>her Movement Speed</r> for 1.5 seconds. Meanwhile, <r>her Attack Speed</r> is increased for 6 seconds.",
        scaling: {
            properties: ["Cooldown", "Mana Cost", "Movement Speed Increase", "Attack Speed Increase"],
            values: [
                ["38.0", "34.0", "30.0"],
                ["120",  "145",  "170" ],
                ["45%",  "55%",  "65%" ],
                ["35%",  "50%",  "65%" ]
            ]
        },
        variants: [
            {rarity: "legend", icon: "skills/miya-turbo-stealth-modena-butterfly.webp", label: "Modena Butterfly (2017-2020)"}
        ]
    }
];


// ========================================================================= //
// DATA: ARCHIVE — PREVIOUS SKINS (GALLERY)                                 //
// ========================================================================= //
const heroArchiveSkins = [
    {name: "Moonlight Archer (2016)",       image: `${IMAGES}heroes/skins/miya-moonlight-archer-archive01.webp`},
    {name: "Moonlight Archer (2016)",       image: `${IMAGES}heroes/skins/miya-moonlight-archer-archive02.webp`},
    {name: "Moonlight Archer (2016-2017)",  image: `${IMAGES}heroes/skins/miya-moonlight-archer-archive03.webp`},
    {name: "Moonlight Archer (2017-2020)",  image: `${IMAGES}heroes/skins/miya-moonlight-archer-archive04.webp`},
    {name: "Moonlight Archer (2020-2023)",  image: `${IMAGES}heroes/skins/miya-moonlight-archer-archive05.webp`},
    {name: "Burning Bow (2016)",            image: `${IMAGES}heroes/skins/miya-burning-bow-archive01.webp`},
    {name: "Burning Bow (2016)",            image: `${IMAGES}heroes/skins/miya-burning-bow-archive02.webp`},
    {name: "Christmas Carnival (2016-2020)",image: `${IMAGES}heroes/skins/miya-christmas-carnival-archive01.webp`},
    {name: "Christmas Carnival (2020-2021)",image: `${IMAGES}heroes/skins/miya-christmas-carnival-archive02.webp`},
    {name: "Modena Butterfly (2017-2020)",  image: `${IMAGES}heroes/skins/miya-modena-butterfly-archive01.webp`},
    {name: "Sweet Fantasy (2018-2022)",     image: `${IMAGES}heroes/skins/miya-sweet-fantasy-archive01.webp`}
];


// ========================================================================= //
// DATA: ARCHIVE — PREVIOUS LORE                                             //
// ========================================================================= //
const heroArchiveLore = [
    {
        version: "Original (2016)",
        title: "Original Lore",
        text: "Miya was born in the Temple of the Moon God in the Moonlit Forest and studied hard to one day become a worthy sacrifice to the Moon God.<br><br>When the fires of war between Humans and Orcs engulfed the Moon Elves, the Moon Elf hero Miya took a stand and led her fellow Moon Elves to resist the invasion. Despite their best efforts, Miya and her fellow elves were forced to retreat make a last stand in the temple against the enemy.<br><br>Miya knelt in the center of the temple to pray, for one last time when she realized that all hope was lost. Then, a miracle occurred. The moon God answered Miya's prayer and blessed her longbow with an ancient relic power. Miya grasped the newly endowed bow and fired an arrow, and with the power of the stars, the arrow turned into an eagle spirit and sunk the enemy into chaos.<br><br>Miya led her people out of the temple, raining showers of star-wrought arrows upon the enemy with each pull of her bow. Meanwhile, the magical eagle hovered the enemy, singling them out and attacking them. Like a falling tide, the humans and orcs quickly started to retreat. Miya and her countrymen retook the shores of the Moon God, and the moon elves recognized Miya and her spirit eagle as the Moon God incarnated.<br><br>The young Miya knew, within her heart that if this problem was not stopped at the root, the wars would never end. With the Moon God's blessing, she set out on a journey to the <a href='../locations/land-of-dawn.html'>Land of Dawn</a>, hoping to find a king, who could bring peace and order to this world."
    }
];


// ========================================================================= //
// DATA: STRATEGY                                                             //
// ========================================================================= //
const heroStrategy = {
    recommendations: {
        builds: [
            {name: "Attack Speed Effects <i>(Default Build)</i>", items: ["<a href='../equipments/demon-hunter-sword.html'>Demon Hunter Sword</a>", "<a href='../equipments/swift-boots.html'>Swift Boots</a>", "<a href='../equipments/golden-staff.html'>Golden Staff</a>", "<a href='../equipments/corrosion-scythe.html'>Corrosion Scythe</a>", "<a href='../equipments/blade-of-despair.html'>Blade of Despair</a>", "<a href='../equipments/immortality.html'>Immortality</a>"]},
            {name: "Sustained DPS <i>(Default Build)</i>",        items: ["<a href='../equipments/haas-claws.html'>Haas' Claws</a>", "<a href='../equipments/swift-boots.html'>Swift Boots</a>", "<a href='../equipments/windtalker.html'>Windtalker</a>", "<a href='../equipments/berserkers-fury.html'>Berserker's Fury</a>", "<a href='../equipments/blade-of-despair.html'>Blade of Despair</a>", "<a href='../equipments/rose-gold-meteor.html'>Rose Gold Meteor</a>"]},
            {name: "Attack and Defend <i>(Default Build)</i>",    items: ["<a href='../equipments/haas-claws.html'>Haas' Claws</a>", "<a href='../equipments/swift-boots.html'>Swift Boots</a>", "<a href='../equipments/windtalker.html'>Windtalker</a>", "<a href='../equipments/berserkers-fury.html'>Berserker's Fury</a>", "<a href='../equipments/malefic-roar.html'>Malefic Roar</a>", "<a href='../equipments/wind-of-nature.html'>Wind of Nature</a>"]},
            {name: "DPS, Durable <i>(User Build)</i>",            items: ["<a href='../equipments/haas-claws.html'>Haas' Claws</a>", "<a href='../equipments/swift-boots.html'>Swift Boots</a>", "<a href='../equipments/berserkers-fury.html'>Berserker's Fury</a>", "<a href='../equipments/scarlet-phantom.html'>Scarlet Phantom</a>", "<a href='../equipments/malefic-roar.html'>Malefic Roar</a>", "<a href='../equipments/immortality.html'>Immortality</a>"]},
            {name: "DPS, Push <i>(User Build)</i>",               items: ["<a href='../equipments/scarlet-phantom.html'>Scarlet Phantom</a>", "<a href='../equipments/swift-boots.html'>Swift Boots</a>", "<a href='../equipments/windtalker.html'>Windtalker</a>", "<a href='../equipments/demon-hunter-sword.html'>Demon Hunter Sword</a>", "<a href='../equipments/berserkers-fury.html'>Berserker's Fury</a>", "<a href='../equipments/blade-of-despair.html'>Blade of Despair</a>"]},
            {name: "RRQ Skylar <i>(User Build)</i>",              items: ["<a href='../equipments/swift-boots.html'>Swift Boots</a>", "<a href='../equipments/haas-claws.html'>Haas' Claws</a>", "<a href='../equipments/windtalker.html'>Windtalker</a>", "<a href='../equipments/berserkers-fury.html'>Berserker's Fury</a>", "<a href='../equipments/malefic-gun.html'>Malefic Gun</a>", "<a href='../equipments/malefic-roar.html'>Malefic Roar</a>"]}
        ],
        emblems: ["Marksman (Electro Flash / Weakness Finder)", "Assassin (Killing Spree / High and Dry)"],
        spells: ["<a href='../spells/inspire.html'>Inspire</a> <i>(to increase Attack Speed)</i>", "<a href='../spells/flicker.html'>Flicker</a> <i>(to increase the chance of escaping)</i>", "<a href='../spells/aegis.html'>Aegis</a> <i>(to increase the chances of Miya winning a 1v1)</i>"]
    },
    prosCons: {
        pros: [
            "She can clear lanes since she can hit multiple targets",
            "She has high carry potential",
            "She has free <a href='../spells/purify.html'>Purify</a> so more utility slots on battle spells <i>(check recommendations)</i>",
            "She has good <a href='../specialities/crowd-control.html'>Crowd Control</a> and zoning ability",
            "She can buff the team",
            "She has good clear speed",
            "Her <b>Passive</b> can stack up to 5 which results in fast Attack Speed",
            "Her <b>Ultimate</b> can be used to escape, buff her attack or to get close and kill enemies",
            "Her pushing power is as strong as <a href='helcurt.html'>Helcurt</a>'s <b>Passive</b>, <a href='zilong.html'>Zilong</a>'s <b>Ultimate</b> and <a href='../spells/inspire.html'>Inspire</a> and <a href='sun.html'>Sun</a>'s with his <b>maximum amount of clones</b> and <a href='../spells/inspire.html'>Inspire</a>"
        ],
        cons: [
            "Buying the wrong equipment will put her at a disadvantage",
            "She's a late game hero, so she can be easily killed by heroes early game",
            "She's vulnerable and squishy when her <b>Ultimate</b> is down",
            "Her <b>Ultimate</b> can't remove the Suppresion effect caused by <a href='../specialities/crowd-control.html'>Crowd Control</a>"
        ]
    },
    tactics: {
        tips: [
            {text: "Max out her 2nd skill, upgrade her 1st skill but max out her Ultimate before maxing out her 1st skill"},
            {text: "Due to how her <b>Passive</b> works, you need to buy 2 attack damage items and then attack speed items for maximum effectiveness"},
            {text: "You need to keep attacking most of the time to keep her <b>Passive</b> active because it lasts 4 seconds"},
            {text: "Her 1st skill is powerful late game"}
        ],
        bestTeamUps: ["<a href='layla.html'>Layla</a>", "<a href='nana.html'>Nana</a>", "<a href='tigreal.html'>Tigreal</a>", "<a href='alucard.html'>Alucard</a>", "<a href='estes.html'>Estes</a>", "<a href='grock.html'>Grock</a>", "<a href='hylos.html'>Hylos</a>", "<a href='odette.html'>Odette</a>", "<a href='johnson.html'>Johnson</a>", "<a href='angela.html'>Angela</a>"]
    },
    counters: {
        tips: [
            {text: "<a href='natalia.html'>Natalia</a> is her best counter because of her backstabbing, invisibility, and her ability to close gaps but Natalia-Miya matchups rarely happen."},
            {text: "<a href='alucard.html'>Alucard</a> can counter Miya because of her low durability and slower movement speed. Alucard needs lifesteal items to be able to beat her easily."},
            {text: "<a href='clint.html'>Clint</a> is a good counter because he can dodge her 2nd skill when he dashes backwards and has longer range. You can out-farm Miya with a 1 or 2k gold gap."},
            {text: "<a href='layla.html'>Layla</a> is a good counter but you have to rely on your Passive for the increased damage and 1st Skill to stop Miya from attacking otherwise she can dodge your Ultimate easily."},
            {text: "<a href='eudora.html'>Eudora</a> can deal more damage than Miya and then can stun her using her 2nd skill but Miya is able to win if she has more lifesteal items than Eudora."},
            {text: "<a href='zilong.html'>Zilong</a> is a high early game damage hero. His 2nd and 1st kill can counter Miya easily early game."}
        ],
        weakAgainst: ["<a href='natalia.html'>Natalia</a>", "<a href='karina.html'>Karina</a>", "<a href='lancelot.html'>Lancelot</a>", "<a href='zilong.html'>Zilong</a>", "<a href='helcurt.html'>Helcurt</a>", "<a href='saber.html'>Saber</a>", "<a href='akai.html'>Akai</a>", "<a href='hayabusa.html'>Hayabusa</a>", "<a href='argus.html'>Argus</a>", "<a href='angela.html'>Angela</a>"]
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