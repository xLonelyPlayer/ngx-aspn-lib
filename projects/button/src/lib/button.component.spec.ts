import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAspnButtonComponent } from './button.component';

describe('NgxAspnButtonComponent', () => {
  let component: NgxAspnButtonComponent;
  let fixture: ComponentFixture<NgxAspnButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAspnButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAspnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
