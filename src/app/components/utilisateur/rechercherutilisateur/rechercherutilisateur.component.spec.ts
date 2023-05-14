import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherutilisateurComponent } from './rechercherutilisateur.component';

describe('RechercherutilisateurComponent', () => {
  let component: RechercherutilisateurComponent;
  let fixture: ComponentFixture<RechercherutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
