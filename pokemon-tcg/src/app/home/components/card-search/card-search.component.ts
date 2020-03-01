import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {

  @Output() searchQuery = new EventEmitter();

  public query: string;

  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
    this.query = value;
    this.searchQuery.emit(this.query);
  }



}
