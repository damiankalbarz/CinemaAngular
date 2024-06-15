import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowListUserComponent } from './film-show-list-user.component';

describe('FilmShowListUserComponent', () => {
  let component: FilmShowListUserComponent;
  let fixture: ComponentFixture<FilmShowListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmShowListUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmShowListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
