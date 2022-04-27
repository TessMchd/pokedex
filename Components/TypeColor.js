import React from "react";

export function TypeColor(typeName) {
    if (typeName !== null) {
        switch (typeName) {
            case 'bug':
                return "#8bcd8d"
            case 'dark':
                return "#53416f"
            case 'dragon':
                return "#4ca7a7"
            case 'electric':
                return "#f4d339"
            case 'fairy':
                return "#ed90e7"
            case 'fighting':
                return "#cf3f6b"
            case 'fire':
                return "#f1a66b"
            case 'flying':
                return "#90abdf"
            case 'ghost':
                return "#5169ae"
            case 'grass':
                return "#5ba55b"
            case 'ground':
                return "#e08656"
            case 'ice':
                return "#74cfc1"
            case 'normal':
                return "#929ba3"
            case 'poison':
                return "#9f6fb3"
            case 'psychic':
                return "#fa727a"
            case 'rock':
                return "#c6b88d"
            case 'steel':
                return "#5a8fa3"
            case 'water':
                return "#4f91d7"
        }
    }
}