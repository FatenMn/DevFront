import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherdecisionComponent } from './rechercherdecision.component';

describe('RechercherdecisionComponent', () => {
  let component: RechercherdecisionComponent;
  let fixture: ComponentFixture<RechercherdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherdecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
