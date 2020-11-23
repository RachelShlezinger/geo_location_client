import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCitiesComponent } from './choice-cities.component';

describe('ChoiceCitiesComponent', () => {
  let component: ChoiceCitiesComponent;
  let fixture: ComponentFixture<ChoiceCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
