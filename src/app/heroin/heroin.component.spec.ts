import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinComponent } from './heroin.component';

describe('HeroinComponent', () => {
  let component: HeroinComponent;
  let fixture: ComponentFixture<HeroinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
