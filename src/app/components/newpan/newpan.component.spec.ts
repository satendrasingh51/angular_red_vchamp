import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpanComponent } from './newpan.component';

describe('NewpanComponent', () => {
  let component: NewpanComponent;
  let fixture: ComponentFixture<NewpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
