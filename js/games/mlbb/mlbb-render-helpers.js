// Shared render helpers for MLBB hero pages
// Lives at: js/games/mlbb/mlbb-render-helpers.js

/**
 * Builds cost HTML: currency icon + label, or plain text for default costs.
 */
export function buildCost(cost, IMAGES_PATH) {
    if (cost.type === 'default') {
        return `<span>${cost.label}</span>`;
    }
    return `
        <img class="currency-icon" src="${IMAGES_PATH}currencies/${cost.type}.webp" alt="${cost.type}" width="20" height="20">
        <span>${cost.label}</span>
    `;
}

/**
 * Builds a skin card with tier badge, rarity icon, and cost.
 */
export function buildSkinItem(cosmetic, IMAGES_PATH) {
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

/**
 * Builds an archive skin card: image + name only, no tier/rarity/cost.
 */
export function buildArchiveSkinItem(item) {
    return `
        <div class="cosmetic-item">
            <img src="${item.image}" alt="${item.name}" class="cosmetic-image">
            <div class="cosmetic-caption">
                <div class="cosmetic-name">${item.name}</div>
            </div>
        </div>
    `;
}

/**
 * Builds an icon card (name only, no tier/cost).
 */
export function buildIconItem(cosmetic) {
    return `
        <div class="cosmetic-item cosmetic-item--icon">
            <img src="${cosmetic.image}" alt="${cosmetic.name}" class="cosmetic-image">
            <div class="cosmetic-caption">
                <div class="cosmetic-name">${cosmetic.name}</div>
            </div>
        </div>
    `;
}

/**
 * Builds a generic cosmetic card (statue, splash art) with optional tier and cost.
 */
export function buildCosmeticItem(cosmetic, IMAGES_PATH) {
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

/**
 * Shared helper to build an ability card.
 * Handles both current and archived abilities for UI consistency.
 * Includes support for notes and additional scaling tables.
 */
export function buildAbilityCardHtml(ability, IMAGES_PATH, isArchived = false) {
    let html = '<div class="ability-card' + (isArchived ? ' archived' : '') + '">';

    if (isArchived && ability.version) {
        html += '<div class="archive-tag">' + ability.version + '</div>';
    }

    html += '<div class="ability-header">';
    html += '<img class="ability-icon" src="' + IMAGES_PATH + ability.icon + '" alt="' + ability.name + '">';
    html += '<div class="ability-title">';
    html += '<h4>' + ability.type + ': ' + ability.name + '</h4>';
    html += '<div class="ability-tags">';

    if (ability.tags && ability.tags.length > 0) {
        html += ability.tags.map(function(t) {
            return '<span class="ability-tag ' + t.color + '">' + t.label + '</span>';
        }).join('');
    }

    html += '</div></div></div>';
    html += '<div class="ability-divider"></div>';
    html += '<p class="ability-description">' + ability.description + '</p>';

    // Render notes
    if (ability.notes && ability.notes.length > 0) {
        html += '<div class="ability-divider"></div>';
        html += '<div class="ability-notes">';
        html += '<h5>Notes</h5>';
        html += '<ul>';
        html += ability.notes.map(note => '<li>' + note + '</li>').join('');
        html += '</ul>';
        html += '</div>';
    }

    // Render main scaling table
    if (ability.scaling && ability.scaling.values && ability.scaling.values.length > 0) {
        const numLevels = ability.scaling.values[0].length;
        const levelNumbers = Array.from({ length: numLevels }, (_, i) => i + 1)
            .map(n => '<div>' + n + '</div>').join('');
        const gridColumnsStyle = `minmax(140px, 1.2fr) repeat(${numLevels}, minmax(40px, 1fr))`;

        html += '<div class="ability-divider"></div>';
        html += '<div class="ability-scaling">';
        html += '<h5>Level Scaling</h5>';
        html += '<div class="scaling-table">';
        html += '<div class="scaling-row scaling-header" style="grid-template-columns: ' + gridColumnsStyle + ';">';
        html += '<div>Properties</div>' + levelNumbers;
        html += '</div>';

        html += ability.scaling.properties.map(function(prop, i) {
            let rowHtml = '<div class="scaling-row" style="grid-template-columns: ' + gridColumnsStyle + ';">';
            rowHtml += '<div>' + prop + '</div>';
            rowHtml += ability.scaling.values[i].map(v => '<div>' + v + '</div>').join('');
            rowHtml += '</div>';
            return rowHtml;
        }).join('');

        html += '</div></div>';
    }

    // Render additional scaling tables
    if (ability.additionalScalingTables && ability.additionalScalingTables.length > 0) {
        ability.additionalScalingTables.forEach(function(extraScalingTable) {
            if (extraScalingTable.values && extraScalingTable.values.length > 0) {
                const numLevels = extraScalingTable.values[0].length;
                const levelNumbers = Array.from({ length: numLevels }, (_, i) => i + 1)
                    .map(n => '<div>' + n + '</div>').join('');
                const gridColumnsStyle = `minmax(140px, 1.2fr) repeat(${numLevels}, minmax(40px, 1fr))`;

                html += '<div class="ability-divider"></div>';
                html += '<div class="ability-scaling">';
                if (extraScalingTable.title) {
                    html += '<h5>' + extraScalingTable.title + '</h5>';
                } else {
                    html += '<h5>Additional Scaling</h5>';
                }
                html += '<div class="scaling-table">';
                html += '<div class="scaling-row scaling-header" style="grid-template-columns: ' + gridColumnsStyle + ';">';
                html += '<div>Properties</div>' + levelNumbers;
                html += '</div>';

                html += extraScalingTable.properties.map(function(prop, i) {
                    let rowHtml = '<div class="scaling-row" style="grid-template-columns: ' + gridColumnsStyle + ';">';
                    rowHtml += '<div>' + prop + '</div>';
                    rowHtml += extraScalingTable.values[i].map(v => '<div>' + v + '</div>').join('');
                    rowHtml += '</div>';
                    return rowHtml;
                }).join('');

                html += '</div></div>';
            }
        });
    }

    if (ability.variants && ability.variants.length > 0) {
        html += '<div class="ability-divider"></div>';
        html += '<div class="ability-variants">';
        html += '<h5>Icon Variants</h5>';
        html += ability.variants.map(function(v) {
            return `
                <div class="variant-row">
                    <img class="variant-rarity" src="${IMAGES_PATH}rarities/${v.rarity}.webp" alt="${v.rarity}">
                    <img class="variant-icon" src="${IMAGES_PATH}${v.icon}" alt="${v.label}">
                    <span class="variant-label">${v.label}</span>
                </div>
            `;
        }).join('');
        html += '</div>';
    }

    html += '</div>';
    return html;
}

/**
 * Builds audio lines HTML for a given data object (flat array or grouped object).
 */
export function buildAudioListHtml(data) {
    const isEmpty = !data ||
        (Array.isArray(data) && data.length === 0) ||
        (typeof data === 'object' && !Array.isArray(data) && Object.keys(data).length === 0);

    if (isEmpty) {
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