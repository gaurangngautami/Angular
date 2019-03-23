import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnparkcomponentComponent } from './unparkcomponent.component';

describe('UnparkcomponentComponent', () => {
  let component: UnparkcomponentComponent;
  let fixture: ComponentFixture<UnparkcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnparkcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnparkcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
