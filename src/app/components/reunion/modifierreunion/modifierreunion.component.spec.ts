import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierreunionComponent } from './modifierreunion.component';

describe('ModifierreunionComponent', () => {
  let component: ModifierreunionComponent;
  let fixture: ComponentFixture<ModifierreunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierreunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierreunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
