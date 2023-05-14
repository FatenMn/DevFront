import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpvComponent } from './modifierpv.component';

describe('ModifierpvComponent', () => {
  let component: ModifierpvComponent;
  let fixture: ComponentFixture<ModifierpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierpvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
