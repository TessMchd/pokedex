import React from "react";

export function TypeColor(typeName) {
    if (typeName !== null) {
        switch (typeName) {
            case 'bug':
                return "#e9ffbf"
            case 'dark':
                return "#41305a"
            case 'dragon':
                return "#4ca7a7"
            case 'electric':
                return "#ffed9d"
            case 'fairy':
                return "#ffe0f1"
            case 'fighting':
                return "#ffd6d6"
            case 'fire':
                return "#ffcf94"
            case 'flying':
                return "#b6c4e3"
            case 'ghost':
                return "#7886b3"
            case 'grass':
                return "#c1eac1"
            case 'ground':
                return "#ffe4d6"
            case 'ice':
                return "#74cfc1"
            case 'normal':
                return "#e8e8e8"
            case 'poison':
                return "#e5c9ff"
            case 'psychic':
                return "#fa727a"
            case 'rock':
                return "#f6ecd3"
            case 'steel':
                return "#5a8fa3"
            case 'water':
                return "#c9e9ff"
        }
    }
}