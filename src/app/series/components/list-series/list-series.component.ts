import { Component, Input } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../interfaces/serieInterface';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html',
  styleUrl: './list-series.component.css'
})
export class SeriesComponent {
  @Input()
  public series!: Serie[];

constructor(public seriesService: SeriesService) {}

}
