"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mirrorMenu = exports.curtainMenu = exports.acMenu = exports.bedMenu = exports.tableMenu = exports.mainMenu = void 0;
exports.mainMenu = {
    reply_markup: {
        keyboard: [
            [{ text: "Mirror" }],
        ],
        resize_keyboard: false
    }
};
exports.tableMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Rainbow🌈' }, { text: 'Night🌃' }],
            [
                { text: '🔴' }, { text: '🟠' }, { text: '🟡' },
                { text: '🟢' }, { text: '🔵' }, { text: '🟣' },
                { text: '⚪️' }, { text: '⚫️' }
            ],
            [{ text: "Back🔙" }]
        ],
        resize_keyboard: true
    }
};
exports.bedMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Rainbow🏳️‍🌈' }, { text: 'Night🌙' }, { text: 'Bright🔼' }, { text: 'Bright🔽' }],
            [
                { text: '🟥' }, { text: '🟧' }, { text: '🟨' },
                { text: '🟩' }, { text: '🟦' }, { text: '🟪' },
                { text: '⬜️' }, { text: '⬛️' }
            ],
            [{ text: "Back🔙" }]
        ],
        resize_keyboard: true
    }
};
exports.acMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Mode⚧' }, { text: 'Temp🔼' }, { text: 'On/Off⏯' }],
            [{ text: 'Swing↕️' }, { text: 'Temp🔽' }, { text: 'Power🌀' }],
            [{ text: "Back🔙" }]
        ],
        resize_keyboard: true
    }
};
exports.curtainMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'Brightness🔼' }, { text: 'On\\Off⏯' }],
            [{ text: 'Brightness🔽' }, { text: 'Mode🔠' }],
            [{ text: "Back🔙" }]
        ],
        resize_keyboard: true
    }
};
exports.mirrorMenu = {
    reply_markup: {
        keyboard: [
            [{ text: 'ON' }, { text: 'OFF' }, { text: 'Night' }],
            [
                { text: '🔴' }, { text: '🟠' }, { text: '🟡' },
                { text: '🟢' }, { text: '🔵' }, { text: '🟣' },
                { text: '⚪️' }, { text: '⚫️' }
            ],
            [{ text: 'Custom 1' }, { text: 'Custom 2' }, { text: 'Custom 3' }],
            [{ text: "Back🔙" }]
        ],
        resize_keyboard: true
    }
};
