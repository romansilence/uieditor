import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blocktype1',
  templateUrl: './blocktype1.component.html',
  styleUrls: ['./blocktype1.component.css']
})
export class Blocktype1Component implements OnInit {
  @Input() block;
  @Input() index: number;
  @Output() delete = new EventEmitter();

  constructor() {

  }
  ngOnInit() {
  
  }

  onDelete(event) {
    event.preventDefault();
    this.delete.emit();
  }
}
