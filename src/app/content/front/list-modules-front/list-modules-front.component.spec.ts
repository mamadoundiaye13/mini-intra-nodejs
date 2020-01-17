import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModulesFrontComponent } from './list-modules-front.component';

describe('ListModulesFrontComponent', () => {
  let component: ListModulesFrontComponent;
  let fixture: ComponentFixture<ListModulesFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModulesFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModulesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
