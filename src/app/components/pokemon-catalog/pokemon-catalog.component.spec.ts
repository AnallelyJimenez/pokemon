import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoCatalogComponent } from './pokemon-catalog.component';

describe('PokemoCatalogComponent', () => {
  let component: PokemoCatalogComponent;
  let fixture: ComponentFixture<PokemoCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemoCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
