import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedecisionComponent } from './listedecision.component';

describe('ListedecisionComponent', () => {
  let component: ListedecisionComponent;
  let fixture: ComponentFixture<ListedecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
