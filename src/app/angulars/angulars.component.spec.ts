import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularsComponent } from './angulars.component';

describe('AngularsComponent', () => {
  let component: AngularsComponent;
  let fixture: ComponentFixture<AngularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
