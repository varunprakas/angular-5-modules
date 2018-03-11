import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootmoduleComponent } from './rootmodule.component';

describe('RootmoduleComponent', () => {
  let component: RootmoduleComponent;
  let fixture: ComponentFixture<RootmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
