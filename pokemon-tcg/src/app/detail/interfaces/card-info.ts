export interface CardInfo {
    card: Card;
}

export interface Card {
    attacks: Attack[];  
    id: string;
    imageUrlHiRes: string;
    name: string;
    number: string;
    resistances: Resistance[];
    types: string[];
    weaknesses: Weakness[];
}

export interface Attack {
    convertedEnergyCost: string;
    cost: string[];
    damage: string;
    name: string;
    text: string;
}

export interface Resistance {
    type: string;
    value: string;
}

export interface Weakness {
    type: string;
    value: string;
}
