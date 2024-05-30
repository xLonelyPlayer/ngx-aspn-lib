import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAspnInputComponent } from './input.component';

describe('NgxAspnInputComponent', () => {
  let component: NgxAspnInputComponent;
  let fixture: ComponentFixture<NgxAspnInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAspnInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAspnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
