import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

 
  charCount: number = 0;
  constructor() { }
  ngOnInit(): void {
  }
  updateCharCount(count: number) {
    this.charCount = count;
  }

 
}
