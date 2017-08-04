import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blocktype3Component } from './blocktype3.component';

describe('Blocktype3Component', () => {
  let component: Blocktype3Component;
  let fixture: ComponentFixture<Blocktype3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blocktype3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blocktype3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
