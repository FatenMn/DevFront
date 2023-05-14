import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerdecisionComponent } from './supprimerdecision.component';

describe('SupprimerdecisionComponent', () => {
  let component: SupprimerdecisionComponent;
  let fixture: ComponentFixture<SupprimerdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerdecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
