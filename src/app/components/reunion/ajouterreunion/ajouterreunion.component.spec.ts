import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterreunionComponent } from './ajouterreunion.component';

describe('AjouterreunionComponent', () => {
  let component: AjouterreunionComponent;
  let fixture: ComponentFixture<AjouterreunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterreunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
