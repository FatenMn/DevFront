import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherreunionComponent } from './rechercherreunion.component';

describe('RechercherreunionComponent', () => {
  let component: RechercherreunionComponent;
  let fixture: ComponentFixture<RechercherreunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherreunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
