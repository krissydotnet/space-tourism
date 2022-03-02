import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITechnology } from './technology';
import { TechnologyService } from './technology.service';

@Component({
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  pageName = "technology";
  pageIndex = "3";
  pageTitle = "Space Launch 101";
  panelIndex = 0;
  tabIndex = 0;
  technologies: ITechnology[] = [];
  selectedTechnology: ITechnology | undefined;
  errorMessage: string = '';
  sub!: Subscription;
  
  constructor(private technologyService : TechnologyService) { }

  ngOnInit(): void {
    // Change the body class to change background image
    let body = document.getElementsByTagName('body')[0];
    if (!body.classList.contains(this.pageName)) {
      body.className = this.pageName;
    }

    // Get data from destination api
    this.sub = this.technologyService.getTechnology().subscribe({
      next: tech => {
        this.technologies = tech;
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
     this.selectedTechnology = this.technologies[tabIndex];
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
      this.tabIndex = this.technologies.length - 1;
  } else {
    this.tabIndex--;
  }
  this.changePanel(this.tabIndex);
  
}
moveTabRight() {

  if(this.tabIndex >= this.technologies.length - 1) {
    this.tabIndex = 0;
  } else {
    this.tabIndex++;
  }
  this.changePanel(this.tabIndex); 
}

}
