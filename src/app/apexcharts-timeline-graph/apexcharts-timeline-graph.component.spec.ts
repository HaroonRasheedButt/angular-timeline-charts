import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexchartsTimelineGraphComponent } from './apexcharts-timeline-graph.component';

describe('ApexchartsTimelineGraphComponent', () => {
  let component: ApexchartsTimelineGraphComponent;
  let fixture: ComponentFixture<ApexchartsTimelineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexchartsTimelineGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexchartsTimelineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
