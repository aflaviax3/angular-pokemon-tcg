import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../interfaces/card-info';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  @Input() cardInfo: Card;
  
  constructor() { }

  ngOnInit(): void {
  }

}
