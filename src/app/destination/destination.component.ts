import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDestination } from './destination';
import { DestinationService } from './destination.service';

@Component({
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  pageName = "destination";
  pageIndex = "1";
  pageTitle="Pick your destination";
  panelIndex = 0;
  tabIndex = 0;
  destinations: IDestination[] = [];
  selectedDestination: IDestination | undefined;
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private destinationService : DestinationService) { }

  ngOnInit(): void {
     // Change the body class to change background image
      let body = document.getElementsByTagName('body')[0];
      if (!body.classList.contains(this.pageName)) {
        body.className = this.pageName;
      }
      
      // Get data from destination api
      this.sub = this.destinationService.getDestinations().subscribe({
        next: destinations => {
          this.destinations = destinations;
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
    this.selectedDestination = this.destinations[tabIndex];
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
        this.tabIndex = this.destinations.length - 1;
    } else {
      this.tabIndex--;
    }
    this.changePanel(this.tabIndex);
    
  }
  moveTabRight() {
    if(this.tabIndex >= this.destinations.length - 1) {
      this.tabIndex = 0;
    } else {
      this.tabIndex++;
    }
    this.changePanel(this.tabIndex); 
  }
}
