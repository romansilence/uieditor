import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blocktype2',
  templateUrl: './blocktype2.component.html',
  styleUrls: ['./blocktype2.component.css']
})
export class Blocktype2Component implements OnInit {
  @Input() block;
  @Input() index: number;
  @Output() delete = new EventEmitter();
  @Output() change = new EventEmitter();

  constructor() {

  }
  ngOnInit() {
  
  }

  onDelete(event) {
    event.preventDefault();
    this.delete.emit();
  }

  strToBool(str) {
    if(str == 'true') {
      return true;
    } else if(str == 'false') {
      return false;
    } else {
      return false;
    }
  }

  toggle(value, index) {
    this.block.description.options[index].value = String(!this.strToBool(value));
  }

  onChange(event) {
    this.change.emit();    
  }
}
