import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blocktype3',
  templateUrl: './blocktype3.component.html',
  styleUrls: ['./blocktype3.component.css']
})
export class Blocktype3Component implements OnInit {
  @Input() block;
  @Input() index: number;
  @Output() delete = new EventEmitter();
  @Output() change = new EventEmitter();
  
  selected: string;

  constructor() {

  }
  ngOnInit() {
    this.selected = this.block.description.value;
  }
  selectedChange(value) {
    this.block.description.value = value;
  }

  onDelete(event) {
    event.preventDefault();
    this.delete.emit();
  }
  onChange(event) {
    this.change.emit();
  }
}
