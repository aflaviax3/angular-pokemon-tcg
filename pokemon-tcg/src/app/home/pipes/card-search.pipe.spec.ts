import { CardSearchPipe } from './card-search.pipe';

describe('CardSearchPipe', () => {
  let pipe = new CardSearchPipe();

  it('create an instance', () => {
    const pipe = new CardSearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter cardList by name', () => {
    const cardList =     
    [  
      {
        "id": "base5-20",
        "name": "Dark Blastoise",
        "imageUrl": "https://images.pokemontcg.io/base5/20.png",
        "types": [
            "Water"
        ]
      },
      {
        "id":"dp6-90",
        "name":"Cubone",
        "imageUrl":"https://images.pokemontcg.io/dp6/90.png",
        "types":[
          "Fighting"
        ]
      }
    ];
    const filteredCardList =     
      [  
        {
          "id":"dp6-90",
          "name":"Cubone",
          "imageUrl":"https://images.pokemontcg.io/dp6/90.png",
          "types":[
            "Fighting"
          ]
        }
      ];
    expect(pipe.transform(cardList, 'Cubone')).toEqual(filteredCardList);
  });
});
