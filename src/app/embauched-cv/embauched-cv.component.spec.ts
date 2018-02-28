import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbauchedCvComponent } from './embauched-cv.component';

describe('EmbauchedCvComponent', () => {
  let component: EmbauchedCvComponent;
  let fixture: ComponentFixture<EmbauchedCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbauchedCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbauchedCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
