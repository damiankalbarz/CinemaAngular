import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowListComponent } from './film-show-list.component';

describe('FilmShowListComponent', () => {
  let component: FilmShowListComponent;
  let fixture: ComponentFixture<FilmShowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmShowListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
