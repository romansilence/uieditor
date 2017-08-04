import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  @Input() content: any;  
  @Output() change = new EventEmitter(); 

  config: any;

  constructor() {
    this.config = {
      lineNumbers: true,
      tabSize: 3,
      theme: 'monokai',
      autofocus: true
    };
  }

  ngOnInit() {
        
  }

  onChange() {
    this.change.emit(this.content);
  }
}
