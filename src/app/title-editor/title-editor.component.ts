import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-title-editor',
  templateUrl: './title-editor.component.html',
  styleUrls: ['./title-editor.component.css']
})
export class TitleEditorComponent implements OnInit {
  @Input()
  webTitle:string;

  @Output()
  titleChanged : EventEmitter<string>;

  constructor() { 
    this.titleChanged= new EventEmitter<string>();
  }

  ngOnInit(): void {
  }
  notifyTitleChanged(){
    this.titleChanged.emit(this.webTitle);
  }
}
