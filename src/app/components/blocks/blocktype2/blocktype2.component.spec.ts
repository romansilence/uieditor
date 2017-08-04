import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocktype2Component } from './blocktype2.component';

describe('Blocktype2Component', () => {
  let component: Blocktype2Component;
  let fixture: ComponentFixture<Blocktype2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blocktype2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blocktype2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
