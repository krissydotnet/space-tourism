import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICrew } from './crew';
import { CrewService } from './crew.service';

@Component({
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  pageName = "crew";
  pageIndex = "2";
  pageTitle = "Meet your crew";
  panelIndex = 0;
  tabIndex = 0;
  crew: ICrew[] = [];
  selectedCrew: ICrew | undefined;
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private crewService : CrewService) { }

  ngOnInit(): void {
    // Change the body class to change background image
    let body = document.getElementsByTagName('body')[0];
    if (!body.classList.contains(this.pageName)) {
      body.className = this.pageName;
    }

    // Get data from destination api
    this.sub = this.crewService.getCrew().subscribe({
      next: crew => {
        this.crew = crew;
        this.changePanel(this.panelIndex);
      },
      error: err => this.errorMessage = err        
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  changePanel(tabIndex: number): void {
    this.tabIndex = tabIndex;
    this.selectedCrew = this.crew[tabIndex];
    this.panelIndex = tabIndex;
  }

  isSelected(tabIndex: number): boolean {
    return tabIndex === this.tabIndex;

}
isTabActive(tabIndex: number): number {
  return this.tabIndex === tabIndex ? 0 : -1;
}

moveTabLeft() {
  if(this.tabIndex <= 0) {
      this.tabIndex = this.crew.length - 1;
  } else {
    this.tabIndex--;
  }
  this.changePanel(this.tabIndex);
  
}
moveTabRight() {
  if(this.tabIndex >= this.crew.length - 1) {
    this.tabIndex = 0;
  } else {
    this.tabIndex++;
  }
  this.changePanel(this.tabIndex); 
}

}
