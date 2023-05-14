import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpvComponent } from './ajouterpv.component';

describe('AjouterpvComponent', () => {
  let component: AjouterpvComponent;
  let fixture: ComponentFixture<AjouterpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterpvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
