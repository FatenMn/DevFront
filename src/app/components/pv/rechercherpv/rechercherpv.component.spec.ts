import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherpvComponent } from './rechercherpv.component';

describe('RechercherpvComponent', () => {
  let component: RechercherpvComponent;
  let fixture: ComponentFixture<RechercherpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherpvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
