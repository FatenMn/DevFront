import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepvComponent } from './listepv.component';

describe('ListepvComponent', () => {
  let component: ListepvComponent;
  let fixture: ComponentFixture<ListepvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListepvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
