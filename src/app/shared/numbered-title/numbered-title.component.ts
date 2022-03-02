import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbered-title',
  templateUrl: './numbered-title.component.html',
  styleUrls: ['./numbered-title.component.css']
})
export class NumberedTitleComponent implements OnInit {

  @Input() pageTitle: string = "Title";
  @Input() pageIndex: string = "1";

  constructor() { }

  ngOnInit(): void {
  }

}
