import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotesModulesComponent } from './list-notes-modules.component';

describe('ListNotesModulesComponent', () => {
  let component: ListNotesModulesComponent;
  let fixture: ComponentFixture<ListNotesModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotesModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotesModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
