export interface CardList {
    cards: ListedCard[];
}

export interface ListedCard {
    name: string,
    imageUrl: string,
    id: string,
    types: string[]
}
