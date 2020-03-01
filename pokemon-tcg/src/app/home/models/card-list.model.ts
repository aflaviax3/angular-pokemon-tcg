export interface CardList {
    cards: ListedCard[];
}

export interface ListedCard {
    name: string,
    imageUrl: string,
    id: string,
    url: string,
    types: string[]
}
