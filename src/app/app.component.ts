import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  types: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.types = this.dataService.getTypesOfBlocks();
  }

  getBlocks() {
    return this.dataService.getBlocks();
  }

  getContent() {
    return JSON.stringify(this.getBlocks(), null, 3);
  }

  delete(index) {
    this.dataService.delete(index);
  }
  
  addBlock(type) {
    this.dataService.create(type);
  }

  change(content) {
    this.dataService.update(content);
  }
}
