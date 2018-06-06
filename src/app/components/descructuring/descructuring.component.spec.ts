import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescructuringComponent } from './descructuring.component';

describe('DescructuringComponent', () => {
  let component: DescructuringComponent;
  let fixture: ComponentFixture<DescructuringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescructuringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescructuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
