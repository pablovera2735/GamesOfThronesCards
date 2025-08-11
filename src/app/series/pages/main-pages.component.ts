import { Component, OnInit } from '@angular/core';
import { Serie, SerieResponse } from '../interfaces/serieInterface';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series-main-pages',
  templateUrl: './main-pages.component.html',
})

export class MainPageComponent implements OnInit{
  public  series: Serie[] = [];

  constructor(private seriesService : SeriesService) {}

  ngOnInit() {
    this.loadSeries();
  }

  public loadSeries() {
      this.seriesService.getDataSerie().subscribe((response: SerieResponse) => {
        this.series = response.data;
      });

  }
}