import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeansComponent } from './add-seans.component';

describe('AddSeansComponent', () => {
  let component: AddSeansComponent;
  let fixture: ComponentFixture<AddSeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSeansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
