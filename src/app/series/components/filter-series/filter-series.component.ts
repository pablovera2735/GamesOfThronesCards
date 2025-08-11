import { Component, Input } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../interfaces/serieInterface';

@Component({
  selector: 'app-filter-series',
  templateUrl: './filter-series.component.html',
  styleUrl: './filter-series.component.css'
})
export class FilterSeriesComponent {
  @Input()
  public series!: Serie[];
  public filteredSeries: Serie[] = [];

  public filterByFamily(family: string): void {
    this.filteredSeries = this.series.filter(serie => serie.family === family);
  }

constructor(public seriesService: SeriesService) {}


}
