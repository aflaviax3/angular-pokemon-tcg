import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { CardInfoComponent} from './../../components/card-info/card-info.component'
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from "@angular/router";

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent, CardInfoComponent],
      imports: [    
        CommonModule,
        SharedModule,
        RouterModule.forRoot([]),
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
