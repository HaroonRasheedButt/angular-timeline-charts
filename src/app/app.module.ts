import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { ApexchartsTimelineGraphComponent } from './apexcharts-timeline-graph/apexcharts-timeline-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LineGraphComponent,
    ApexchartsTimelineGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
