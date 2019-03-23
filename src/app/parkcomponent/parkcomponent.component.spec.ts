import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkcomponentComponent } from './parkcomponent.component';

describe('ParkcomponentComponent', () => {
  let component: ParkcomponentComponent;
  let fixture: ComponentFixture<ParkcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
