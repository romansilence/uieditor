import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CodemirrorModule } from 'ng2-codemirror';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { UiEditorComponent } from './components/ui-editor/ui-editor.component';

import { DataService } from './services/data.service';
import { Blocktype1Component } from './components/blocks/blocktype1/blocktype1.component';
import { Blocktype2Component } from './components/blocks/blocktype2/blocktype2.component';
import { Blocktype3Component } from './components/blocks/blocktype3/blocktype3.component';
import { AddBlockFormComponent } from './components/add-block-form/add-block-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    UiEditorComponent,
    Blocktype1Component,
    Blocktype2Component,
    Blocktype3Component,
    AddBlockFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CodemirrorModule,
    DragulaModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
