import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingColComponent } from './grouping-col.component';

describe('GroupingColComponent', () => {
  let component: GroupingColComponent;
  let fixture: ComponentFixture<GroupingColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
