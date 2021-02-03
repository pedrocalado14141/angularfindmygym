import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpersonaltrainerComponent } from './getpersonaltrainer.component';

describe('GetpersonaltrainerComponent', () => {
  let component: GetpersonaltrainerComponent;
  let fixture: ComponentFixture<GetpersonaltrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpersonaltrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpersonaltrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
