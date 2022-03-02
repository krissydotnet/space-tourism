import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { NumberedTitleComponent } from './shared/numbered-title/numbered-title.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'destination', component: DestinationComponent},
      { path: 'crew', component: CrewComponent},
      { path: 'technology', component: TechnologyComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
   ])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
