import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetgymComponent } from './getgym.component';

describe('GetgymComponent', () => {
  let component: GetgymComponent;
  let fixture: ComponentFixture<GetgymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetgymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetgymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
