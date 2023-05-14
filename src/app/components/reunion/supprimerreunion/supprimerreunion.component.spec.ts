import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerreunionComponent } from './supprimerreunion.component';

describe('SupprimerreunionComponent', () => {
  let component: SupprimerreunionComponent;
  let fixture: ComponentFixture<SupprimerreunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerreunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
