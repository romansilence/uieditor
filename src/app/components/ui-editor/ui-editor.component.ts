import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blocktype1Component} from '../blocks/blocktype1/blocktype1.component';
import { Blocktype2Component} from '../blocks/blocktype2/blocktype2.component';
import { Blocktype3Component} from '../blocks/blocktype3/blocktype3.component';
import { AddBlockFormComponent } from '../add-block-form/add-block-form.component';

@Component({
  selector: 'app-ui-editor',
  templateUrl: './ui-editor.component.html',
  styleUrls: ['./ui-editor.component.css']
})
export class UiEditorComponent implements OnInit {
  @Input() blocks: any;
  @Input() blockTypes: any;
  @Output() addBlock = new EventEmitter();
  @Output() delete = new EventEmitter();
    
  constructor() {

  }

  ngOnInit() {

  }
  
  onDelete(event, index) {
    this.delete.emit(index);
  }

  onAddBlock(type) {
    this.addBlock.emit(type);
  }

}
