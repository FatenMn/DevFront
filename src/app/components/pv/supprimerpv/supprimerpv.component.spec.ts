import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerpvComponent } from './supprimerpv.component';

describe('SupprimerpvComponent', () => {
  let component: SupprimerpvComponent;
  let fixture: ComponentFixture<SupprimerpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerpvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
