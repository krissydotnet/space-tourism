import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageName = "home";
  
  constructor() { }

  ngOnInit(): void {
    let body = document.getElementsByTagName('body')[0];
    if (!body.classList.contains(this.pageName)) {
      body.className = this.pageName;
    }
  }

}
