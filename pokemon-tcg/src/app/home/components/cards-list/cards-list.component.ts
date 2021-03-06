import { Component, OnInit, Input } from '@angular/core';
import { ListedCard } from '../../interfaces/card-list.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})

export class CardsListComponent implements OnInit {

  @Input() cardList: ListedCard[];
  @Input() cardQuery: string

  public cardFilteredList: ListedCard[];

  ngOnInit(): void {
    this.cardFilteredList = this.cardList;
  }


}
