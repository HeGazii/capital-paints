import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandDComponent } from './rand-d.component';

describe('RandDComponent', () => {
  let component: RandDComponent;
  let fixture: ComponentFixture<RandDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
