import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocktype1Component } from './blocktype1.component';

describe('Blocktype1Component', () => {
  let component: Blocktype1Component;
  let fixture: ComponentFixture<Blocktype1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blocktype1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blocktype1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
