import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageCellComponent } from './percentage-cell.component';

describe('PercentageCellComponent', () => {
  let component: PercentageCellComponent;
  let fixture: ComponentFixture<PercentageCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
