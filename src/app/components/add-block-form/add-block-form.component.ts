import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-block-form',
  templateUrl: './add-block-form.component.html',
  styleUrls: ['./add-block-form.component.css']
})
export class AddBlockFormComponent implements OnInit {
  @Input() types: string[];
  @Output() addNewBlock = new EventEmitter();

  selected: string;
  show: boolean;

  constructor() { }

  ngOnInit() {
    this.show = false;
    this.selected = '';
  }

  showForm(event) {
    event.preventDefault();
    this.show = !this.show;
  }

  addBlock() {
    this.addNewBlock.emit(this.selected);
    this.selected = '';
    this.show = false;
  }

  cancel() {
    this.selected = '';
    this.show = false;
  }

}
