import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaltrainerComponent } from './personaltrainer.component';

describe('PersonaltrainerComponent', () => {
  let component: PersonaltrainerComponent;
  let fixture: ComponentFixture<PersonaltrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaltrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaltrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
