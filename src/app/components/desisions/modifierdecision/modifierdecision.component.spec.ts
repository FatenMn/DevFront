import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdecisionComponent } from './modifierdecision.component';

describe('ModifierdecisionComponent', () => {
  let component: ModifierdecisionComponent;
  let fixture: ComponentFixture<ModifierdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierdecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
