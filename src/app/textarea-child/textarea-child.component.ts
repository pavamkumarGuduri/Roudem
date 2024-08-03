import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea-child',
  templateUrl: './textarea-child.component.html',
  styleUrls: ['./textarea-child.component.css']
})
export class TextareaChildComponent implements OnInit {
// ------------------word count---------------------
  // @Output() wordCountEvent = new EventEmitter<number>();
  // wordCount: number = 0;

  // onTextChange(event: any) {
  //   const text = event.target.value;
  //   this.wordCount = this.countWords(text);
  //   this.wordCountEvent.emit(this.wordCount);

  //   // Enforce the 50-word limit
  //   if (this.wordCount > 50) {
  //     const words = text.split(/\s+/).slice(0, 50).join(' ');
  //     event.target.value = words;
  //     this.wordCount = 50;
  //     this.wordCountEvent.emit(this.wordCount);
  //   }
  // }
  
  // countWords(text: string): number {
  //   return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  // }

  @Output() charCountEvent = new EventEmitter<number>();
  charCount: number = 0;

  onTextChange(event: any) {
    const text = event.target.value;
    this.charCount = this.countCharacters(text);
    this.charCountEvent.emit(this.charCount);

    // Enforce the 50-character limit
    if (this.charCount > 50) {
      event.target.value = text.substring(0, 50);
      this.charCount = 50;
      this.charCountEvent.emit(this.charCount);
    }
  }

  countCharacters(text: string): number {
    return text.length;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
