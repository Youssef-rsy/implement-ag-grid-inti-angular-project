import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaydatatableComponent } from './maydatatable.component';

describe('MaydatatableComponent', () => {
  let component: MaydatatableComponent;
  let fixture: ComponentFixture<MaydatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaydatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaydatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
