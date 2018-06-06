import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratingComponent } from './iterating.component';

describe('IteratingComponent', () => {
  let component: IteratingComponent;
  let fixture: ComponentFixture<IteratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
