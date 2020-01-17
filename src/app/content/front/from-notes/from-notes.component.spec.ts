import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNotesComponent } from './from-notes.component';

describe('FromNotesComponent', () => {
  let component: FromNotesComponent;
  let fixture: ComponentFixture<FromNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
